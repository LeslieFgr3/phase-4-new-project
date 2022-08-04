class UsersController < ApplicationController
  skip_before_action :authorized_user, only: [:show, :create]

  # GET /users/1
  def show
    render json: current_user, status: :ok
  end

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def update
    user = User.find_by(feeling: params[:feeling])
    User.update!(user)
    render json: user, status: :accepted
  end


  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password)
    end
end
