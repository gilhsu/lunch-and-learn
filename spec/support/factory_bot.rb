require 'factory_bot'

FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { Faker::Name.first_name  }
    last_name { Faker::Name.last_name }
    profile_photo { Faker::Avatar.image }
    bio { Faker::Quote.yoda }
    rep { true }
    company_id { 1 }
    title { "Account Executive" }
  end

  factory :company do
    name { Faker::Company.name }
    avatar { Faker::Avatar.image }
    description { Faker::Quote.yoda }
  end

  factory :event do
    user {FactoryBot.create(:user)}
    client_company {Faker::Company.name}
    email { Faker::Internet.email }
    name {Faker::Quote.yoda}
    description {Faker::Quote.yoda}
  end

  factory :restaurant do
    name { Faker::Company.name }
    image_url { Faker::Avatar.image }
    categories {[Faker::Food.vegetables, Faker::Food.vegetables]}
    rating {Faker::Number.number(1)}
    address1 {Faker::Address.street_address}
    city {Faker::Address.city}
    zip_code {Faker::Address.zip_code}
    country {Faker::Address.country}
    state {Faker::Address.state}
    display_phone {Faker::PhoneNumber.phone_number}
    distance {Faker::Number.normal(50, 3.5)}
    price {'$$'}
    review_count {Faker::Number.number(4)}
  end

  factory :caterer do
    event {FactoryBot.create(:event)}
    restaurant {FactoryBot.create(:restaurant)}
    selection {Faker::Number.number(1)}
  end
end
