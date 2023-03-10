require "application_system_test_case"

class PatientsTest < ApplicationSystemTestCase
  setup do
    @patient = patients(:one)
  end

  test "visiting the index" do
    visit patients_url
    assert_selector "h1", text: "Patients"
  end

  test "creating a Patient" do
    visit patients_url
    click_on "New Patient"

    fill_in "Address", with: @patient.address
    fill_in "Conclusion", with: @patient.conclusion
    fill_in "Diagnosis", with: @patient.diagnosis
    fill_in "First name", with: @patient.first_name
    fill_in "Last name", with: @patient.last_name
    fill_in "Patient history", with: @patient.patient_history
    fill_in "Patient", with: @patient.patient_id
    fill_in "Results", with: @patient.results
    fill_in "Sex", with: @patient.sex
    click_on "Create Patient"

    assert_text "Patient was successfully created"
    click_on "Back"
  end

  test "updating a Patient" do
    visit patients_url
    click_on "Edit", match: :first

    fill_in "Address", with: @patient.address
    fill_in "Conclusion", with: @patient.conclusion
    fill_in "Diagnosis", with: @patient.diagnosis
    fill_in "First name", with: @patient.first_name
    fill_in "Last name", with: @patient.last_name
    fill_in "Patient history", with: @patient.patient_history
    fill_in "Patient", with: @patient.patient_id
    fill_in "Results", with: @patient.results
    fill_in "Sex", with: @patient.sex
    click_on "Update Patient"

    assert_text "Patient was successfully updated"
    click_on "Back"
  end

  test "destroying a Patient" do
    visit patients_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Patient was successfully destroyed"
  end
end
