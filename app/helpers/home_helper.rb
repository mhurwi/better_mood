module HomeHelper

	def anonymous_events
		Event.where(anonymous: true)
	end

	def current_user_event_count
		current_user.events.count
	end

	def current_user_most_recent_event
		current_user.events.asc(:created_at).first
	end
end
