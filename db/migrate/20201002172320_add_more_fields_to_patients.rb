class AddMoreFieldsToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :date_of_birth, :date
    add_column :patients, :prescription, :text
    add_column :patients, :phone_number, :string
    add_column :patients, :height, :decimal
    add_column :patients, :weight, :decimal
  end
end
