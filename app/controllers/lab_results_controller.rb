class LabResultsController < ApplicationController
  before_action :authenticate_doctor!

  def index
    @q = LabResult.all.ransack(params[:q])
    @lab_results = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @lab_result = LabResult.new()
  end

  def create
    lab_patient = LabPatient.find_by(lab_patient_id: lab_result_params[:lab_patient_number])
    lab_patient_id = lab_patient.id

    @lab_result = LabResult.new(lab_result_params.merge(
      lab_patient_id: lab_patient_id
      ))
    if @lab_result.save
      flash[:notice] = "Patient Results records successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  private

  def lab_result_params
    params.require(:lab_result).permit(:lab_patient_number, :result, :diagnosis)
  end

end
