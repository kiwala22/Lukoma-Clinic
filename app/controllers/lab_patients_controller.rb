class LabPatientsController < ApplicationController
  before_action :authenticate_doctor!
  before_action :set_lab_patient, only: [:show, :destroy]
  layout :resolve_layout
  load_and_authorize_resource

  def index
    @q = LabPatient.ransack(params[:q])
    @lab_patients = @q.result.order("created_at DESC").page params[:page]
  end

  def new
    @lab_patient = LabPatient.new
  end

  def create
    @lab_patient = LabPatient.new(lab_patient_params.merge(
      lab_patient_id: "LAB-"+generate_patient_id(),
      doctor: current_doctor.username
    ))
    if @lab_patient.save
      flash[:notice] = "Patient records successfully saved."
      redirect_to action: "index"
    else
      render action: "new"
    end
  end

  def show
    @lab_patient = LabPatient.find(params[:id])

    respond_to do |format|
      format.html
      format.pdf do
          render pdf: "Report No. #{@lab_patient.lab_patient_id}",
          page_size: 'A4',
          template: "lab_patients/show.html.erb",
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
      "lab_patient_show.html"
    else
      "application"
    end
  end

  def generate_patient_id
    begin
        patient_id = rand(36**8).to_s(36).upcase
    end while LabPatient.where(lab_patient_id: patient_id).exists?
    return patient_id
  end

  def set_lab_patient
    @lab_patient = LabPatient.find(params[:id])
  end

  def lab_patient_params
    params.require(:lab_patient).permit(:first_name, :middle_name, :last_name, :sex, :address, :age, :height, :weight, :phone_number)
  end

end
