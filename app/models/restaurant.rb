class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :categories, presence: true
  validates :rating, presence: true
  validates :address1, presence: true
  validates :city, presence: true
  validates :zip_code, presence: true
  validates :country, presence: true
  validates :state, presence: true
  validates :display_phone, presence: true
  validates :distance, presence: true
  validates :price, presence: true
  validates :review_count, presence: true
  has_many :caterers
  has_many :events, through: :caterers
end
