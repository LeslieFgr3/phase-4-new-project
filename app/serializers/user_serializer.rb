class UserSerializer < ActiveModel::Serializer
  attributes :id, :filling, :username, :password
end
