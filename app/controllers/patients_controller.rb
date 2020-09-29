class PatientsController < ApplicationController
  before_action :authenticate_doctor!
  before_action :set_patient, only: [:show, :edit, :update, :destroy]

  def index
    @patients = Patient.all.order("created_at DESC").page params[:page]
  end

  def new
    @patient = Patient.new
  end

  def create
    @patient = Patient.new(
      patient_id: "LUK-"+generate_patient_id(),
      first_name: patient_params[:first_name],
      last_name: patient_params[:last_name],
      sex: patient_params[:sex],
      address: patient_params[:address],
      patient_history: patient_params[:patient_history],
      diagnosis: patient_params[:diagnosis],
      results: patient_params[:results],
      conclusion: patient_params[:conclusion],
      doctor: current_doctor.username 
    )

    if @patient.save
      flash[:notice] = "Patient records successfully saved."
      redirect_to action: "index"
    else
      flash.now[:alert] = @patient.errors
      render action: "new"
    end
  end

  def show
    @patient = Patient.find(params[:id])
  end

  def edit
  end

  def update
    if @patient.update(patient_params)
      flash[:notice] = "Patient info updated successfully"
      redirect_to action: "index"
    else
      render action: "edit"
    end
  end

  def destroy
  end

  private

  def generate_patient_id
    begin
        patient_id = rand(36**8).to_s(36).upcase
    end while Patient.where(patient_id: patient_id).exists?
    return patient_id
  end

  def set_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :sex, :address, :patient_history, :diagnosis, :results, :conclusion)
  end

end
