module  Api
  class EventsController < ApiController

  	respond_to :json

  	def active_model_serializer
  		EventSerializer
  	end

    def index
      @events = Event.all
      respond_with @events
    end

    def show
      @event = Event.find(params[:id])
      respond_with @event
    end

  	def create
  		@event = Event.new
      @event.update_attributes(user_id: current_user.id.to_s, anonymous: false) if current_user.present?
  		@event.save
  		respond_with @event
  	end

    def update
      @event = Event.find(params[:id])
      @event.update_attributes(description: params["event"]["description"])
      @event.update_attributes(feelings: params["event"]["feelings"]) unless params["event"]["feelings"].nil?
      @event.update_attributes(thoughts: params["event"]["thoughts"]) unless params["event"]["thoughts"].nil?
      respond_with @event
    end

    def destroy
      event = Event.find(params[:id])
      event.remove
      head :ok
    end



	end
end