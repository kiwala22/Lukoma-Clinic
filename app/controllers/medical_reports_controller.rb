class MedicalReportsController < ApplicationController
  before_action :authenticate_doctor!
  before_action :set_medical_report, only: [:show]
  layout :resolve_layout
  load_and_authorize_resource


  def index
  end

  def new
    @medical_report = MedicalReport.new()
  end

  def create
    if medical_report_params[:patient_id].present?
      patient_name = Patient.find(medical_report_params[:patient_id]).full_name
      @medical_report = MedicalReport.new(medical_report_params.merge(
        report_number: generate_report_id(),
        patient_name: patient_name,
        doctor_name: current_doctor.username
        ))
  
      if @medical_report.save
        render json: @medical_report
      else
        render json: @medical_report.errors, status: :unprocessable_entity
      end
    else
      render json: "Error", status: :unprocessable_entity
    end
  end

  def fetch_reports_data
    @medical_reports = MedicalReport.order("created_at DESC")

    respond_to do |format|
      format.json { render json: @medical_reports }
    end
  end

  def fetch_unpaid_reports_data
    @medical_reports = MedicalReport.where(paid: false).order("created_at DESC")

    respond_to do |format|
      format.json { render json: @medical_reports }
    end
  end

  def complete_reports_data
    @medical_report = MedicalReport.find(params[:id])

    @complete_report = {
      report_number: @medical_report.report_number,
      patient_number: @medical_report.patient.patient_id,
      patient_name: @medical_report.patient_name,
      gender: @medical_report.patient.sex,
      category: @medical_report.patient.category,
      diagnosis: @medical_report.diagnosis,
      result: @medical_report.result,
      prescription: @medical_report.prescription,
      conclusion: @medical_report.conclusion,
      amount: @medical_report.amount_paid,
      doctor: @medical_report.doctor_name
    }

    respond_to do |format|
      format.json { render json: @complete_report }  
    end
  end


  private

  def resolve_layout
    case action_name
    when "show"
      "patient_show.html"
    else
      "application"
    end
  end

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
