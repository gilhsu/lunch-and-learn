require 'rails_helper'

feature 'user registers', %Q{
  As a visitor
  I want to register
  So that I can create an account
} do

  # Acceptance Criteria:
  # * I must specify a valid email address,
  #   password, and password confirmation
  # * If I don't specify the required information, I am presented with
  #   an error message

  scenario 'provide valid registration information' do
    user = FactoryBot.create(:user)

    visit new_user_registration_path

    fill_in 'First name', with: user.first_name
    fill_in 'Last name', with: user.last_name
    fill_in 'Email', with: 'james@gmail.com'
    fill_in 'Password', with: user.password
    fill_in 'Password confirmation', with: user.password

    click_button 'Sign up'

    expect(page).to have_content('Dashboard')
    expect(page).to have_content('Sign Out')
  end

  scenario 'provide invalid registration information' do
    visit new_user_registration_path

    click_button 'Sign up'
    expect(page).to have_content("can't be blank")
    expect(page).to_not have_content('Sign Out')
    expect(page).to_not have_content('Dashboard')
  end
end
