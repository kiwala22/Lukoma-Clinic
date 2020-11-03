ActiveAdmin.register Doctor do

  permit_params :email, :password, :password_confirmation, :username, :role

    index do
      selectable_column
      id_column
      column :email
      column :username
      column :created_at
      column :role
      actions
    end

    filter :email
    filter :username
    filter :current_sign_in_at
    filter :sign_in_count
    filter :created_at

    form do |f|
      f.inputs "Doctor Details" do
          f.input :email
          f.input :username
          f.input :password
          f.input :password_confirmation, label: 'Password Confirmation'
          f.input :role
      end
      f.actions
    end
end
