Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :restaurants, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
      resources :comments
    end
  end
end
