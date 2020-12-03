class PrescriptionsController < ApplicationController
  before_action :authenticate_doctor!

  def index
    @q = Prescription.all.ransack(params[:q])
    @prescriptions = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @prescription = Prescription.new()
  end

  def create
    patient = Patient.find_by(patient_id: prescription_params[:patient_number])
    patient_id = patient.id

    @prescription = Prescription.new(prescription_params.merge(
      patient_id: patient_id
      ))
    if @prescription.save
      flash[:notice] = "Patient Prescriptions records successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  private

  def prescription_params
    params.require(:prescription).permit(:patient_number, :prescription => {})
  end

end
