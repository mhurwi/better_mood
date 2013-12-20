module  Api
  class EventsController < ApiController

  	respond_to :json

  	def active_model_serializer
  		EventSerializer
  	end

    def index
      if current_user.present?
        @events = Event.where(user_id: current_user.id.to_s)
      else
        @events = []
      end
      respond_with @events
    end

    def anonymous
      @anonymous_events = Event.where(anonymous: true)
      respond_with @anonymous_events
    end

    def show
      @current_user = current_user
      @event = Event.find(params[:id])
      respond_with @event
    end

  	def create
  		@event = Event.new
      if current_user.present?
        user_id = current_user.id.to_s
        anonymous = false
      else
        user_id = "anonymous"
        anonymous = true
      end
      @event.update_attributes(user_id: user_id, anonymous: false) if current_user.present?
  		@event.save
      Analytics.track(
        user_id: user_id, 
        event: 'Created CBT Event', 
        properties: { anonymous: true  })
  		respond_with @event
  	end

    def update
      @event = Event.find(params[:id])
      @event.update_attributes(description: params["event"]["description"])
      @event.update_attributes(feelings: params["event"]["feelings"])
      @event.update_attributes(thoughts: params["event"]["thoughts"])
      respond_with @event
    end

    def destroy
      event = Event.find(params[:id])
      event.remove
      head :ok
    end



	end
end