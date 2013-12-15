class EventSerializer < ActiveModel::Serializer
	attributes	:id,
							:description,
							:feelings,
							:thoughts

	def id
		object.id.to_s
	end
end