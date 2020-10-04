class AddRoleDoctors < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :role, :string, default: "nurse" 
  end
end
