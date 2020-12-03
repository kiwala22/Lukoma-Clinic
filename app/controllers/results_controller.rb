class ResultsController < ApplicationController
  before_action :authenticate_doctor!

  def index
    @q = Result.all.ransack(params[:q])
    @results = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @result = Result.new()
  end

  def create
    patient = Patient.find_by(patient_id: result_params[:patient_number])
    patient_id = patient.id

    @result = Result.new(result_params.merge(
      patient_id: patient_id
      ))
    if @result.save
      flash[:notice] = "Patient Results records successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  private

  def result_params
    params.require(:result).permit(:patient_number, :results => {})
  end

end
