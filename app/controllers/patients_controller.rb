class PatientsController < ApplicationController
  before_action :authenticate_doctor!
  before_action :set_patient, only: [:show, :destroy]
  layout :resolve_layout
  load_and_authorize_resource

  def index
    @q = Patient.ransack(params[:q])
    @patients = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @patient = Patient.new
  end

  def create
    @patient = Patient.new(patient_params.merge(
      patient_id: "LUK-"+generate_patient_id(),
      doctor: current_doctor.username
    ))
    if @patient.save
      flash[:notice] = "Patient records successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  def show
    @patient = Patient.find(params[:id])

    respond_to do |format|
      format.html
      format.pdf do
          render pdf: "Report No. #{@patient.patient_id}",
          page_size: 'A4',
          template: "patients/show.html.erb",
          layout: "pdf.html",
          orientation: "Portrait",
          lowquality: true,
          zoom: 1,
          dpi: 90
      end
  end
  end

  # def edit
  # end
  #
  # def update
  #   if @patient.update(patient_params)
  #     flash[:notice] = "Patient info updated successfully"
  #     redirect_to action: "index"
  #   else
  #     render action: "edit"
  #   end
  # end

  def destroy
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
    params.require(:patient).permit(:first_name, :middle_name, :last_name, :sex, :address, :patient_medical_history, :age, :height, :weight, :phone_number)
  end

end
