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
  		@event = Event.new(safe_params)
  		@event.save
  		respond_with @event
  	end



	end
end