class SessionsController < ApplicationController
  before_action :verify_access, only: [:new]

  def new
    # render the login form
  end

  def create
    @user = User.find_by("nickname = ?", user_params[:nickname])

    if @user.present? && @user.authenticate(user_params[:password])
      cookies.permanent.signed[:datcom_user_id] = @user.id
      redirect_to root_url
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :password)
  end

  def verify_access
    redirect_to root_url if @current_user
  end
end