require 'test_helper'

class LabResultsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lab_results_index_url
    assert_response :success
  end

  test "should get new" do
    get lab_results_new_url
    assert_response :success
  end

  test "should get create" do
    get lab_results_create_url
    assert_response :success
  end

end
