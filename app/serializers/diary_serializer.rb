class DiarySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :quote_id
end
