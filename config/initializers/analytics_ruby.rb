Analytics = AnalyticsRuby       # Alias for convenience
Analytics.init({
    secret: 'lkntcnlzpd',          # The write key for mhurwitzus/mhurwi
    on_error: Proc.new { |status, msg| print msg }  # Optional error handler
})