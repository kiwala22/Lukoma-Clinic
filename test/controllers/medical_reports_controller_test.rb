require 'test_helper'

class MedicalReportsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get medical_reports_index_url
    assert_response :success
  end

  test "should get create" do
    get medical_reports_create_url
    assert_response :success
  end

  test "should get new" do
    get medical_reports_new_url
    assert_response :success
  end

  test "should get fetch_reports_data" do
    get medical_reports_fetch_reports_data_url
    assert_response :success
  end

end
