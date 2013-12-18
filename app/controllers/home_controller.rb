class HomeController < ApplicationController
  def index
    @users = User.all
  end

  def dashboard
  	
  end
end
