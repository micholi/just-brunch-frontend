class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_restaurant, only: [:index, :create]

  def index
    @comments = @restaurant.comments
    render json: @comments
  end

  def show
    # is this needed? tbd
  end

  def new
  end

  def create
    @comment = @restaurant.comments.build(comment_params)
    if @comment.save
      render json: @comment
    # else
      # figure out how to handle errors
    end
  end

  def edit
  end

  def update
    @comment = Comment.new(comment_params)
    if @comment.update
      render json: @comment
    # else
      # figure out how to handle errors
    end
  end

  def destroy
    @comment.destroy
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :commenter, :restaurant_id)
    end

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_restaurant
      @restaurant = Restaurant.find_by(id: params[:restaurant_id])
    end
end
