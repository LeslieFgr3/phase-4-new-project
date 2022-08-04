Rails.application.routes.draw do
  
  resources :diaries, only: [:index]
  resources :quotes
  resources :users, only: [:show, :create, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'
  patch '/updated_feeling', to: 'users#update'

end
