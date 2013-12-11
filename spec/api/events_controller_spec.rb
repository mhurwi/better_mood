describe Api::EventsController do
  it "should be able to create a new record" do
    post :create, event_id: event.id,
      event: {description: "New event"}, format: :json
    response.should be_success
    JSON.parse(response.body).should == {'id' => 123, ...}
  end
end