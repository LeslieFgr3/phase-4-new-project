class User < ApplicationRecord
    has_many :diaries
    has_many :quotes, through: :diaries
    has_many :feelings

    has_secure_password
end
