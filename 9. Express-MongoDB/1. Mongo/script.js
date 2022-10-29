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