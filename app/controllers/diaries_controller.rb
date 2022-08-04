class DiariesController < ApplicationController
  skip_before_action :authorized_user, only: [:index]


  # GET /diaries
  def index
    @diaries = Diary.all

    render json: @diaries
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diary
      @diary = Diary.find(params[:id])
    end
end
