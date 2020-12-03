class Patient < ApplicationRecord
    validates :first_name, presence: {message: "First Name is required."}
    validates :last_name, presence: {message: "Last Name is required."}
    validates :sex, presence: {message: "Sex is required."}
    validates :date_of_birth, presence: {message: "Date of Birth is required."}
    validates :address, presence: {message: "Address is required."}
    validates :phone_number, presence: {message: "Phone Number is required."}
    validates :height, presence: {message: "Height is required."}
    validates :weight, presence: {message: "Weight is required."}
    validates :height, numericality: {message: "Height must be a number."}
    validates :weight, numericality: {message: "Weight must be a number."}


    has_many :diagnoses
    has_many :results
    has_many :prescriptions
    has_many :conclusions
    has_many :billings
end
