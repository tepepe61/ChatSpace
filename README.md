


####userテーブル

|Colum|Type|Options|
|-----|----|-------|
|id   |integer| null: false
|name |string  | null: false
|address|string| null: false


##Association
 has_many :messages
 has_many :groups, throught: :members


####messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|image|string|
|body |text|
|user|reference| null: false, foreign_key: true|
|group|reference| null: false, foreign_key: true|

##Association
belongs_to :groups
belongs_to :user


####groupsテーブル
|Colum|Type|Options|
|-----|----|-------|
|name| string| null: false|

##Association
has_many :users, through: :members
has_many :messages


####membersテーブル
|Colum|Type|Options|
|-----|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

##Association
belongs_to :users
belongs_to :groups
