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
    if payment_params[:medical_report_id].present?
      reference = generate_payment_reference()
      patient_name = MedicalReport.find(payment_params[:medical_report_id]).patient.full_name
      @payment = Payment.new(payment_params.merge(
      patient_name: patient_name,
      doctor_name: current_doctor.username,
      payment_reference: reference
      ))

      if @payment.save
        @payment.medical_report.update(amount_paid: @payment.amount, paid: true)
        render json: @payment
      else
        render json: @payment.errors, status: :unprocessable_entity
      end
    else
      render json: "Error", status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: {error: "Something went wrong"}
  end


  def show
    @payment = Payment.find(params[:id])

    if @payment
      filename = "Payment ##{@payment.payment_reference}"

      pdf = render pdf: "filename", template: "payments/show.html.erb", page_size: 'A4', lowquality: true, zoom: 1, dpi: 90
    else
      flash[:notice] = "Medical Report can not be Access..."
      redirect_to action: "index"
    end
  end

  def destroy
  end

  private

  def generate_payment_reference
    begin
        reference = rand(36**8).to_s(36).upcase
    end while Payment.where(payment_reference: reference).exists?
    return reference
  end

  def set_payment
    @payment = Payment.find(params[:id])
  end

  def payment_params
    params.require(:payment).permit(:amount, :medical_report_id, :reason, :payment_method)
  end

end
