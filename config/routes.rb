BetterMood::Application.routes.draw do
  root :to => "home#index"
  get '/dashboard' => "home#dashboard", as: "dashboard"

  namespace :api, defaults: {format: :json} do
  	resources :events, only: [:index, :show, :create, :update, :destroy] do
  		collection do
  			get 'anonymous'
  		end
  	end
  	get 'templates/:path.html' => 'templates#page', :constraints => { :path => /.+/  }
  end

  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users

  resources :events do
    collection do
      get "start_wizard" => 'events#start_wizard', as: "start_wizard"
    end
    member do
      get "email_version" => 'events#email_version', as: "email_version"
      get "save_anonymous" => 'events#save_anonymous', as: "save_anonymous"
      get "save_private" => 'events#save_private', as: "save_private"
      get "delete" => 'events#destroy'
    end
  end
end