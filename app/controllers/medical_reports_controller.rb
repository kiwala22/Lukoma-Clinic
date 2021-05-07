class MedicalReportsController < ApplicationController
  before_action :authenticate_doctor!
  before_action :set_medical_report, only: [:show]
  load_and_authorize_resource


  def index
  end

  def new
    @medical_report = MedicalReport.new()
  end

  def create
    patient_name = Patient.find(payment_params[:patient_id]).full_name
    @medical_report = MedicalReport.new(medical_report_params.merge(
      patient_name: patient_name,
      doctor_name: current_doctor.username
      ))

      if @medical_report.save
        render json: @medical_report
      else
        render json: @medical_report.errors
      end
  end

  def fetch_reports_data
    @medical_reports = MedicalReport.where(paid: false).order("created_at DESC")

    respond_to do |format|
      format.json { render json: @medical_reports }
    end
  end

  private

  def set_medical_report
    @medical_report = MedicalReport.find(params[:id])
  end

  def generate_report_id
    begin
        report_id = "REP-"+rand(36**8).to_s(36).upcase
    end while MedicalReport.where(report_number: report_id).exists?
    return report_id
  end

  def medical_report_params
    params.require(:medical_report).permit(:patient_id, :conclusion, :diagnosis => [], :result => [], :prescription => [])
  end


end
