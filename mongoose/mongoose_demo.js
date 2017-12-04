const mongoose = require('mongoose');

mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const uri = `mongodb://localhost:27017/what_i_love`;
const connection = mongoose.connect(uri, { useMongoClient: true });

const db = mongoose.connection;

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true, index: 1 },
  age: { type: Number, max: 140, min: 0 },
});

const UseModel = mongoose.model('user', UserSchema);


db.on('open', () => {
  console.log('db connect')
})

db.on('error', (e) => {
  console.log(e)
})