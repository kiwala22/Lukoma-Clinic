require 'test_helper'

class LabPatientsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lab_patients_index_url
    assert_response :success
  end

  test "should get new" do
    get lab_patients_new_url
    assert_response :success
  end

  test "should get create" do
    get lab_patients_create_url
    assert_response :success
  end

end
