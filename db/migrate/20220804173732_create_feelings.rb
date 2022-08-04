class CreateFeelings < ActiveRecord::Migration[6.1]
  def change
    create_table :feelings do |t|
      t.string :filling
      t.integer :user_id
      t.timestamps
    end
  end
end
