MinitestBadges::Application.routes.draw do
  root :to => 'badges#index'
  resources 'badges', only: [:index, :show] , format: false
end
#== Route Map
# Generated on 28 Oct 2012 22:57
#
# badges GET /badges     badges#index
#  badge GET /badges/:id badges#show
