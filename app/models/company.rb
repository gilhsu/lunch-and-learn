class Company < ApplicationRecord
  mount_uploader :avatar, CompanyLogoUploader
  validates :name, presence: true
  has_many :users
end
