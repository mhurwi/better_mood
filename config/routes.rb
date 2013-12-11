BetterMood::Application.routes.draw do
  root :to => "home#index"

  namespace :api, defaults: {format: :json} do
  	resources :events, only: [:index, :show, :create, :update, :destroy]
  	get 'templates/:path.html' => 'templates#page', :constraints => { :path => /.+/  }
  end

  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users

  resources :events
end