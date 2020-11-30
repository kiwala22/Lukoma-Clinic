class EditPatientsTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :patients, :diagnosis
    remove_column :patients, :results
    remove_column :patients, :conclusion
    remove_column :patients, :prescription
    add_column :patients, :middle_name, :string
  end
end
