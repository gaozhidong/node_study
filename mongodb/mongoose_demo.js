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

const UseModel = mongoose.model('user', UserSchema);


(async () => {

  // const user = await UseModel.create({
  //   name: 'gao',
  //   age: 20,
  // })

  // return user

  // const users = await UseModel.find({}) //find返回数组   findOne返回对象


  // return users

  const user = await UseModel.update({name:"gao"},{age:88})
  return user


})()
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

