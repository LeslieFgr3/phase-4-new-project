class UserSerializer < ActiveModel::Serializer
  attributes :id, :feeling, :username, :password
end
