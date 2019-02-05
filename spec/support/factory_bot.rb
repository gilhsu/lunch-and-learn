require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'james' }
    last_name { 'franco' }
    avatar { 'www.aws.com' }
    bio { 'Hi, I\'m the bio' }
    rep { true }
  end

  factory :company do
    name { 'ABC Company'}
    avatar { 'www.aws.com' }
    description { 'Hi, I\'m the description' }
  end
end
