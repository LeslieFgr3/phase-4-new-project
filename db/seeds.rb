# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Quote.destroy_all
Diary.destroy_all
u1 = User.create(username: "kevin", password: "kevin")
u2 = User.create(username: "leslie", password: "leslie")
q1 = Quote.create(text: "nice", author: "Han")
q2 = Quote.create(text: "well", author: "Gene")
d1 = Diary.create(user_id: u1.id, quote_id: q2.id)
d2 = Diary.create(user_id: u2.id, quote_id: q1.id)
f1 = Feeling.create(feeling: "good", user_id: u1.id)
f2 = Feeling.create(feeling: "awesome", user_id: u2.id)