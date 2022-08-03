class Quote < ApplicationRecord
    has_many :diaries
    has_many :users, through: :diaries
end
