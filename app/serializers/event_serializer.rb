class EventSerializer < ActiveModel::Serializer
	attributes	:id,
							:description

	def id
		object.id.to_s
	end
end