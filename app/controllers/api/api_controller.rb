module Api
  class ApiController < ApplicationController
    serialization_scope :view_context

    def safe_params
		  params.require(:event).permit(:description, :feelings)
		end
  end
end