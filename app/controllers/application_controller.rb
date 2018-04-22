class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :register_session
  helper_method :current_user

  def current_user
    User.find_by(session[:dat_come][:user])
  end

  def authorize
    redirect_to login_path, alert: 'You must be logged in to access this page.' if current_user.nil?
  end
end
