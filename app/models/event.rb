class Event
	include Mongoid::Document

	field :description
	field :feelings, default: []
end