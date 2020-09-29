class AddDoctorUsernameToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :doctor, :string
  end
end
