

User

|Colum|Type|Options|
|-----|----|-------|
|id   | integer| null: false
|name |string  | null: false
|address|string| null: false

###Association
 has_many :messages
 has_many :groups
