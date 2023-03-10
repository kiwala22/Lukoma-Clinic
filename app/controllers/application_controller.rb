class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from CanCan::AccessDenied do |exception|
        respond_to do |format|
          format.json { head :forbidden, content_type: 'text/html' }
          format.html { redirect_to main_app.root_url, notice: exception.message }
          format.js   { head :forbidden, content_type: 'text/html' }
        end
    end

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
        devise_parameter_sanitizer.permit(:sign_in, keys: [:username])
    end

    private

    def current_ability
      @current_ability ||= Ability.new(current_doctor)
    end
end
