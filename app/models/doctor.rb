class Doctor < ApplicationRecord
  attr_writer :login
  devise :database_authenticatable, :rememberable, :validatable, :lockable, :timeoutable, authentication_keys: [:username]

  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true

  def login
    @login || self.username
  end
end