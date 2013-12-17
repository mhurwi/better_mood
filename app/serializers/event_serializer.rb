class EventSerializer < ActiveModel::Serializer
	delegate :current_user, :to => :scope
	attributes	:id,
							:description,
							:feelings,
							:thoughts,
							:user_id,
							:current_user_id

	def id
		object.id.to_s
	end

	def current_user_id
		current_user.id.to_s if current_user.present?
	end
end