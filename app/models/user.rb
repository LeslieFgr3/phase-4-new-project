class User < ApplicationRecord
    has_many :diaries
    has_many :quotes, through: :diaries
end
