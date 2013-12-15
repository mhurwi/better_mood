class Event
	include Mongoid::Document

	field :description
	field :feelings, default: []
	field :thoughts, default: []
end