class DiagnosesController < ApplicationController
  before_action :authenticate_doctor!

  def index
    @q = Diagnosis.all.ransack(params[:q])
    @diagnoses = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @diagnosis = Diagnosis.new()
  end

  def create
    patient = Patient.find_by(patient_id: diagnosis_params[:patient_number])
    patient_id = patient.id

    @diagnosis = Diagnosis.new(diagnosis_params.merge(
      patient_id: patient_id
      ))
    if @diagnosis.save
      flash[:notice] = "Patient Diagnosis records successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  private

  def diagnosis_params
    params.require(:diagnosis).permit(:patient_number, :diagnosis => {})
  end

end
