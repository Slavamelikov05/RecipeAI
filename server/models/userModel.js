const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://slava:mypassword11@cluster0.l4bdt36.mongodb.net/test';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Accounts',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  recipies: [
    { title: String, id: { type: Schema.Types.ObjectId, ref: 'recipe' } },
  ],
});

const User = mongoose.model('user', userSchema);

const recipeSchema = new Schema({
  name: String,
  ingredients: [String],
  instructions: [String],
  cookieId: String,
});

const Recipe = mongoose.model('recipe', recipeSchema);
module.exports = {
  User,
  Recipe,
};
