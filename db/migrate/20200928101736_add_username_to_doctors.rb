class AddUsernameToDoctors < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :username, :string
  end
end
