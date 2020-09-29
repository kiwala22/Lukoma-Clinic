class AddLockedAtOnDoctors < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :locked_at, :datetime
  end
end