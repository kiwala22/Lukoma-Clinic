# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_30_102555) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "billings", force: :cascade do |t|
    t.string "patient_number"
    t.json "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "patient_id", null: false
    t.index ["patient_id"], name: "index_billings_on_patient_id"
  end

  create_table "conclusions", force: :cascade do |t|
    t.string "patient_number"
    t.json "conclusion"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "patient_id", null: false
    t.index ["patient_id"], name: "index_conclusions_on_patient_id"
  end

  create_table "diagnoses", force: :cascade do |t|
    t.string "patient_number"
    t.json "diagnosis"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "patient_id", null: false
    t.index ["patient_id"], name: "index_diagnoses_on_patient_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.datetime "locked_at"
    t.string "role", default: "nurse"
    t.index ["email"], name: "index_doctors_on_email", unique: true
    t.index ["reset_password_token"], name: "index_doctors_on_reset_password_token", unique: true
  end

  create_table "patients", force: :cascade do |t|
    t.string "patient_id"
    t.string "first_name"
    t.string "last_name"
    t.string "sex"
    t.string "address"
    t.text "patient_medical_history"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "doctor"
    t.date "date_of_birth"
    t.string "phone_number"
    t.decimal "height"
    t.decimal "weight"
    t.string "middle_name"
  end

  create_table "prescriptions", force: :cascade do |t|
    t.string "patient_number"
    t.json "prescription"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "patient_id", null: false
    t.index ["patient_id"], name: "index_prescriptions_on_patient_id"
  end

  create_table "results", force: :cascade do |t|
    t.string "patient_number"
    t.json "results"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "patient_id", null: false
    t.index ["patient_id"], name: "index_results_on_patient_id"
  end

  add_foreign_key "billings", "patients"
  add_foreign_key "conclusions", "patients"
  add_foreign_key "diagnoses", "patients"
  add_foreign_key "prescriptions", "patients"
  add_foreign_key "results", "patients"
end
