class CreateMoney < ActiveRecord::Migration[5.1]
  def change
    create_table :money do |t|
      t.float :amount
      t.string :description

      t.timestamps
    end
  end
end
