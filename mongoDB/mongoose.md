## mongoose

mongoose是MongoDB的Node.js框架，在处理MongoDB表管理、验证方面有方便之处

**hello world**

```
const mongoose = require('mongoose');

mongoose.Promise = Promise;

const uri = `mongodb://localhost:27017/what_i_love`;
mongoose.connect(uri, { useMongoClient: true });
const db = mongoose.connection;

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true, index: 1 },
  age: { type: Number, max: 188, min: 0 },
});

const UserModel = mongoose.model('user', UserSchema);

(async (params) => {

  const filter = {};
  if (params.name) filter.name = params.name;

  const flow = UserModel.find(filter);

  if(params.projection) flow.select(params.projection);

  if(params.sort) flow.sort(params.sort);

  const users = await flow.exec();

  return users;

})({
  name:"xiaoli",
  projection: {age:1},
  // sort:{age:-1},
  sort:'-age'
})
  .then(r => {
    console.log(r);
  })
  .catch(e => {
    console.log(e);
  });

db.on('open', () => {
  console.log('db connected!');
});

db.on('error', (e) => {
  console.log(e);
});

```
[mongoose文档](http://www.nodeclass.com/api/mongoose.html)
