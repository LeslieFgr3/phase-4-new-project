class QuotesController < ApplicationController
  # before_action :set_quote, only: [:show, :update, :destroy]
  skip_before_action :authorized_user, only: [:index, :create, :show]

  # GET /quotes
  def index
    quotes = Quote.all

    render json: quotes, status: :ok
  end

  # GET quotes/1
  def show
    quote = Quote.find(params[:id])
    render json: quote, status: :ok
  end

  # POST quotes
  def create
    quote = Quote.create!(quote_params)
    render json: quote, status: :created
  end

  # PATCH/PUT /quotes/1
  def update
    quote = Quote.find(params[:id])
    quote.update!(quote_params)
      render json: quote, status: :accepted
  end

  # DELETE /quotes/1
  def destroy
    @quote.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def quote_params
      params.permit(:text, :author)
    end
end
