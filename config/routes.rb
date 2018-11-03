Rails.application.routes.draw do
  get 'tests/index', 'tests#index'
  get 'tests/show', to: 'tests#index'
end
