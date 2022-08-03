class DiariesController < ApplicationController
  before_action :set_diary, only: [:show]

  # GET /diaries
  def index
    diaries = Diary.all

    render json: diaries, status: :ok
  end

  # GET diaries/1
  def show
    render json: @diary, status: :created
  end

  private

end
