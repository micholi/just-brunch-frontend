class Comment < ApplicationRecord
  belongs_to :restaurant
  validates :content, presence: true
  validates :commenter, presence: true
  validates :restaurant_id, presence: true
end
