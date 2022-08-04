class FeelingsController < ApplicationController
  # before_action :set_quote, only: [:show, :update, :destroy]
  skip_before_action :authorized_user, only: [:index, :show, :create, :destroy]

  # GET /feeling
  def index
    feelings = Feeling.all
    render json: feelings, status: :ok
  end

  # GET/feeling/1
  def show
    feeling = Feeling.find(params[:id])
    render json: feeling, status: :ok
  end

  # POST/feeling
  def create
    feeling = Feeling.create!(feeling_params)
    render json: feeling, status: :created
  end

  # DELETE /feeling/1
  def destroy
    feeling = Feeling.find(params[:id]) 
    feeling.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def feeling_params
      params.permit(:id, :feeling, :user_id)
    end
end
