class UsersController < ApplicationController
  skip_before_action :authorized_user, only: [:index, :show, :create, :update]

  # GET /users/1

  def index 
    user = User.all
    render json: user, status: :ok
  end

  def show
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end


  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password)
    end
end
