# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(doctor)
    doctor ||= Doctor.new
    if doctor.role == "nurse"
      can [:read, :create], Patient
      cannot :update, Patient
    end
    can :manage, :all if doctor.role == "doctor"
  end
end
