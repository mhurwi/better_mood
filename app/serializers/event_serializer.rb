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
		if current_user.present?
			current_user.id.to_s 
		else
			"null"
		end
	end
end