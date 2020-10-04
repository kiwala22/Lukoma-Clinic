class HomeController < ApplicationController
  before_action :authenticate_doctor!
  
  def index
    patients = []
    labels = []

    ((Date.today - 14)..Date.today).each do |date|
      labels.push(date.to_s)
      patients_number = Patient.where("created_at >= ? AND created_at <= ?", date.beginning_of_day, date.end_of_day).count()

      patients.push(patients_number)
    end

    gon.labels = labels
    gon.patients = patients
  end
end
