// import { error } from 'util';

const mongoose = require('mongoose');

mongoose.Promise = Promise;

const uri = `mongodb://localhost:27017/what_i_love`;
const connection = mongoose.connect(uri, { useMongoClient: true });
const db = mongoose.connection;



const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true, index: 1 },
  age: { type: Number, max: 140, min: 0 },
});

const UserModel = mongoose.model('user', UserSchema);


(async (params) => {

  let filter = {}
  if(params.name){
    filter.name = params.name
  }
  const flow = UserModel.find(filter)

  if(params.projection){
    flow.select(params.projection)
  }

  if(params.sort){
    flow.sort(params.sort)
  }

  const users = await flow.exec()

  return users




})({
  name:"xiaohong",
  projection:{age:1},
  // sort:{age:-1}
  sort:'-age'
})
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.log(e)
  })

db.on('open', () => {
  console.log('db connect  已经连接了')
})

db.on('error', (e) => {
  console.log(e)
})

