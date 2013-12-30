class EventsController < ApplicationController
  # before_filter :authenticate_user!, only:[:show]

  respond_to :html, :json

  def index
    # authorize! :index
    if current_user.present?
      @events = Event.where(user_id: current_user.id.to_s)
      @anonymous_events = Event.where(anonymous: true)
    else
      @anonymous_events = Event.where(anonymous: true)
    end

  end

  def show
    @event = Event.find(params[:id])
    if((current_user.present? && current_user.id.to_s == @event.user_id) || (@event.anonymous?))
      respond_with @event
    else
      redirect_to :index, notice: "You are not authorized to view that event."
    end
  end

  def email_version
    @event = Event.find(params[:id])
    if((current_user.present? && current_user.id.to_s == @event.user_id) || (@event.anonymous?))
      respond_with @event
    else
      redirect_to :index, notice: "You are not authorized to view that event."
    end
  end

  def start_wizard
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
      redirect_to "/events/new#/#{@event.id.to_s}", event: @event
  end

  def save_anonymous
    @event = Event.find(params[:id])
    @event.update_attributes(anonymous: true)
    @event.save
    redirect_to "/events", notice: "Thanks for publishing your event anonymously!"
  end

  def save_private
    @event = Event.find(params[:id])
    # we need to send a parameter along to the sign_up page that identifies this event...
  end

  def new 
  end
  
  def update
  end
    
  def destroy
    @event = Event.find(params[:id])
    @event.remove
    redirect_to "/events", notice: "Your event has been deleted!"
  end

end