class HomeController < ApplicationController
  before_action :authenticate_doctor!

  def index
    patients = []
    lab_patients = []
    labels = []

    ((Date.today - 14)..Date.today).each do |date|
      labels.push(date.to_s)
      patients_number = Patient.where("created_at >= ? AND created_at <= ?", date.beginning_of_day, date.end_of_day).count()
      #lab_patients_number = LabPatient.where("created_at >= ? AND created_at <= ?", date.beginning_of_day, date.end_of_day).count()
      patients.push(patients_number)
      #lab_patients.push(lab_patients_number)
    end

    gon.labels = labels
    gon.patients = patients
    #gon.lab_patients = lab_patients
  end
end
