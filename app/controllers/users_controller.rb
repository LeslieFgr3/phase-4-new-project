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

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end


  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:feeling, :username, :password)
    end
end
