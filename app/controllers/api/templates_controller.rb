module  Api
  class TemplatesController < ApiController

  	# caches_page :page

		def page
		  @path = params[:path]
		  render template: 'templates/' + @path +'.html', :layout => nil
		end

  end
end