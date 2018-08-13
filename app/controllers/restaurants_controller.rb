class RestaurantsController < ApplicationController

  def index
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def restaurant_params
      params.require(:restaurant).permit(:name, :neighborhood, :cuisine, :price_range, :dress_code, :image)
    end
end
