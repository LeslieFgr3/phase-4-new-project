class AddColumnToFeelings < ActiveRecord::Migration[6.1]
  def change
    add_column :feelings, :content, :string
    add_column :feelings, :writer, :string
  end
end
