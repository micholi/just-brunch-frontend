class Restaurant < ApplicationRecord
  has_many :comments
  validates :name, presence: true
  validates :neighborhood, presence: true
  validates :cuisine, presence: true
  validates :price_range, presence: true
  validates :dress_code, presence: true
end
