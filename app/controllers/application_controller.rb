class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :user_signed_in?, :current_user

  before_action :current_user

  protected

  def authenticate_user
    cookies.delete(:datcom_user_id) && redirect_to(root_url) if current_user.blank?
  end

  def current_user
    @current_user ||= User.find_by(id: cookies.signed[:datcom_user_id])
  end

  def user_signed_in?
    current_user.present?
  end
end
