class PaymentsController < ApplicationController
  before_action :authenticate_doctor!
  before_action :set_payment, only: [:show]
  load_and_authorize_resource

  def index

  end

  def get_data
    @payments = Payment.all.order("created_at DESC")

    respond_to do |format|
      # format.html
      format.json { render json: @payments }
    end
  end


  def new
    @payment = Payment.new()
  end

  def create
    patient_name = MedicalReport.find(payment_params[:medical_report_id]).patient.full_name
    @payment = Payment.new(payment_params.merge(
      patient_name: patient_name,
      doctor_name: current_doctor.username
      ))

      if @payment.save
        @payment.medical_report.update(amount_paid: @payment.amount, paid: true)
        render json: @payment
      else
        render json: @payment.errors
      end
  end


  def show

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

  # def generate_patient_id
  #   begin
  #       patient_id = rand(36**8).to_s(36).upcase
  #   end while Patient.where(patient_id: patient_id).exists?
  #   return patient_id
  # end

  def set_payment
    @payment = Payment.find(params[:id])
  end

  def payment_params
    params.require(:payment).permit(:amount, :medical_report_id, :reason)
  end

end
