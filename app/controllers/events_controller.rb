class EventsController < ApplicationController
  # before_filter :authenticate_user!

  def index
    # authorize! :index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end
  
  def update
  end
    
  def destroy
  end
end