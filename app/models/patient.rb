class Patient < ApplicationRecord
    validates :full_name, presence: {message: "Full Name is required."}
    # validates :last_name, presence: {message: "Last Name is required."}
    validates :sex, presence: {message: "Sex is required."}
    # validates :date_of_birth, presence: {message: "Date of Birth is required."}
    # validates :address, presence: {message: "Address is required."}
    # validates :phone_number, presence: {message: "Phone Number is required."}
    # validates :height, presence: {message: "Height is required."}
    # validates :weight, presence: {message: "Weight is required."}
    # validates :height, numericality: {message: "Height must be a number."}
    # validates :weight, numericality: {message: "Weight must be a number."}
    validates :age, presence: {message: "Age is required."}
    validates :age, numericality: {message: "Age must be a number."}


    has_many :medical_reports
    has_many :payments
end
