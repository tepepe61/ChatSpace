#### usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name |string  | null: false
|email|string| null: false


## Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members


#### messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|image|string|
|body |text|
|user|references| null: false, foreign_key: true|
|group|references| null: false, foreign_key: true|

## Association
- belongs_to :group
- belongs_to :user


#### groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|name| string| null: false|

## Association
- has_many :users, through: :members
- has_many :messages
- has_many :members


#### membersテーブル
|Colum|Type|Options|
|-----|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group





