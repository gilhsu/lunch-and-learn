class Event < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :description, presence: true
  belongs_to :user
end
