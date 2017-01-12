require 'test_helper'

class TalliesControllerTest < ActionController::TestCase
  setup do
    @tally = tallies(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tallies)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tally" do
    assert_difference('Tally.count') do
      post :create, tally: { body: @tally.body, head: @tally.head, kills: @tally.kills, name: @tally.name, total: @tally.total }
    end

    assert_redirected_to tally_path(assigns(:tally))
  end

  test "should show tally" do
    get :show, id: @tally
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tally
    assert_response :success
  end

  test "should update tally" do
    patch :update, id: @tally, tally: { body: @tally.body, head: @tally.head, kills: @tally.kills, name: @tally.name, total: @tally.total }
    assert_redirected_to tally_path(assigns(:tally))
  end

  test "should destroy tally" do
    assert_difference('Tally.count', -1) do
      delete :destroy, id: @tally
    end

    assert_redirected_to tallies_path
  end
end
