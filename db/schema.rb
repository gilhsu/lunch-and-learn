# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_12_200300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "avatar"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.string "email", null: false
    t.text "description", null: false
    t.date "date"
    t.string "contact_first_name"
    t.string "contact_last_name"
    t.string "contact_email"
    t.string "contact_phone"
    t.string "address"
    t.string "suite"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "food_one"
    t.string "food_two"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "confirmed", default: false
    t.string "client_company", null: false
    t.string "time"
    t.string "vegetarian"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.bigint "event_id", null: false
    t.string "name", null: false
    t.string "image_url", null: false
    t.string "categories", null: false, array: true
    t.float "rating", null: false
    t.string "address1", null: false
    t.string "city", null: false
    t.string "zip_code", null: false
    t.string "country", null: false
    t.string "state", null: false
    t.string "display_phone", null: false
    t.float "distance", null: false
    t.string "price", null: false
    t.integer "review_count", null: false
    t.index ["event_id"], name: "index_restaurants_on_event_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "rep", default: true
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "avatar"
    t.text "bio"
    t.string "profile_photo"
    t.integer "company_id", default: 1
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
