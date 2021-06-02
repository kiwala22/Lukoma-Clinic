class ChangeReasonColumnPayments < ActiveRecord::Migration[6.0]
  def change
    change_column :payments, :reason, :string
  end
end
