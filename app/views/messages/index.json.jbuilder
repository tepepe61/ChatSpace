json.array! @auto_messages do |message|
  json.content         message.content
  json.image           message.image.url
  json.name            message.user.name
  json.created_at      message.created_at
  json.id              message.id
end
