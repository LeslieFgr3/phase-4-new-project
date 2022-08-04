class FixColumnNameOfFeeling < ActiveRecord::Migration[6.1]
  def change
    rename_column :feelings, :filling, :feeling
  end
end
