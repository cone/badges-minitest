class BadgesController < ApplicationController
  respond_to :json
  
  def index
    
  end

  def show
    data = {badges: ['workaholic','workaholic','workaholic']}
    render json: data
  end
end
