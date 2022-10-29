db.nombres_collections.insert({
    name:"Ecuador",
    code:"EC"
})
db.nombres_collections.insert({
    name:"Colombia",
    code:"CO"
})
db.nombres_collections.insert([
    {
        name:"Peru",
        code:"PE"
    },
    {
        name:"México",
        code:"MX"
    },
    {
        name:"Chile",
        code:"CH"
    }
])

db.nombres_collections.find()
db.nombres_collections.find().pretty();
db.nombres_collections.find().pretty().explain("executionStats");

db.nombre_collection.find({code:"CO"})
db.nombre_collection.find({code:{$eq:"EC"}})
//no coincida
db.nombre_collection.find({code:{$ne:"EC"}})

db.nombre_collection.find({code:"CO", name:"Colombia"})
db.nombre_collection.find({$and:[{code:"EC", name:{$ne:"Ecuador"}}]})
db.nombre_collection.find({$and:[{code:"CO"}, {name:{$ne:"Ecuador"}}]})


db.products.insert([
    {
        name:'Flutter',
        price: 19.99
    },{
        name:'React',
        price: 29.99,
    },{
        name:'Android',
        price: 99.99,
        note: 'Great'
    },{
        name:'NodeJS',
        price: 9.99,
        note: 'Great'
    }
]);
//mayor que ($gt)
db.products.find({price:{$gt:9.99}})
//mayor o igual ($gte)
db.products.find({price:{$gte:9.99}})
db.products.find({$or:[{name:'Flutter'}, {price:{$gt:9.99}}]})

/*url documentation
https://www.mongodb.com/docs/manual/reference/operator/query/
*/