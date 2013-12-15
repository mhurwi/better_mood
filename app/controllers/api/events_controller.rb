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
  		@event.save
  		respond_with @event
  	end

    def update
      @event = Event.find(params[:id])
      @event.update_attributes(safe_params)
      respond_with @event
    end

    def destroy
      event = Event.find(params[:id])
      event.remove
      head :ok
    end



	end
end