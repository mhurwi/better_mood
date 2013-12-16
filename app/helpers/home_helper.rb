module HomeHelper

	def anonymous_events
		Event.where(anonymous: true)
	end
end
