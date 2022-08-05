class FeelingSerializer < ActiveModel::Serializer
  attributes :id, :feeling, :user_id, :content, :writer, :created_at

  
end
