class AddPaymentMethodAndPaymentReferenceToPayments < ActiveRecord::Migration[6.0]
  def change
    add_column :payments, :payment_method, :string
    add_column :payments, :payment_reference, :string
  end
end
