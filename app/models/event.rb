class Event
	include Mongoid::Document
	include Mongoid::Timestamps

	field :user_id
	field :anonymous, default: true
	field :description
	field :feelings, default: []
	field :thoughts, default: []
	field :publish, default: false
end