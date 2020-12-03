class ConclusionsController < ApplicationController
  before_action :authenticate_doctor!

  def index
    @q = Conclusion.all.ransack(params[:q])
    @conclusions = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @conclusion = Conclusion.new()
  end

  def create
    patient = Patient.find_by(patient_id: conclusion_params[:patient_number])
    patient_id = patient.id

    @conclusion = Conclusion.new(conclusion_params.merge(
      patient_id: patient_id
      ))
    if @conclusion.save
      flash[:notice] = "Patient Recommendations successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  private

  def conclusion_params
    params.require(:conclusion).permit(:patient_number, :conclusion => {})
  end

end
