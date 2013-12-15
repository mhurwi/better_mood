class EventSerializer < ActiveModel::Serializer
	attributes	:id,
							:description,
							:feelings

	def id
		object.id.to_s
	end
end