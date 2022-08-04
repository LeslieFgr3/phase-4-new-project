class RemoveNameFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :feeling, :string
  end
end
