Rails.application.routes.draw do
  get 'tests/index', 'tests#index'
  get 'tests/hoge', 'tests#hoge'
end
