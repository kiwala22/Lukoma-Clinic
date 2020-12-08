class AddDiagnosisToLabResults < ActiveRecord::Migration[6.0]
  def change
    add_column :lab_results, :diagnosis, :string
  end
end
