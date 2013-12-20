module EventsHelper

	def average_feeling_reduction(event)
		if event.feelings.count > 0
			total_feeling_before = 0
			total_feeling_after = 0
			number_of_feelings = event.feelings.count
			event.feelings.each do |feeling|
				total_feeling_before += feeling["amountBefore"]
				total_feeling_after += feeling["amountAfter"]
			end	
			return (total_feeling_before / number_of_feelings)  -  (total_feeling_after / number_of_feelings)
		end
	end

end