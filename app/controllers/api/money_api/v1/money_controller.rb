module Api
  module MoneyApi
    module V1
      class MoneyController < ActionController::API
        def create
          money = Money.create!(params.permit(:amount, :description))
          render json: { amount: money.amount, description: money.description, time: money.created_at.strftime("%Y%m%d") }
        end

        def index
          render json: Money.all.map { |money| { amount: money.amount, description: money.description, time: money.created_at.strftime("%Y%m%d") } }
        end
      end
    end
  end
end