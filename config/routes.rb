Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'home', to: 'home#index'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'chat', to: 'home#chat'
  get 'money', to: 'home#money'

  namespace :api do
    namespace :money_api do
      namespace :v1 do
        resources :money
      end
    end
  end
end
