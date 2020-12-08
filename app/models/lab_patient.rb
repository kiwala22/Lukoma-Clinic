class LabPatient < ApplicationRecord
  validates :first_name, presence: {message: "First Name is required."}
  validates :last_name, presence: {message: "Last Name is required."}
  validates :sex, presence: {message: "Sex is required."}
  validates :address, presence: {message: "Address is required."}
  validates :phone_number, presence: {message: "Phone Number is required."}
  validates :height, presence: {message: "Height is required."}
  validates :weight, presence: {message: "Weight is required."}
  validates :height, numericality: {message: "Height must be a number."}
  validates :weight, numericality: {message: "Weight must be a number."}
  validates :age, presence: {message: "Age is required."}
  validates :age, numericality: {message: "Age must be a number."}
  
  has_many :lab_results
end
