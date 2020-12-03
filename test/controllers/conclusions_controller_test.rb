require 'test_helper'

class ConclusionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get conclusions_index_url
    assert_response :success
  end

  test "should get new" do
    get conclusions_new_url
    assert_response :success
  end

  test "should get create" do
    get conclusions_create_url
    assert_response :success
  end

end
