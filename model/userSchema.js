import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  phone: Number
})

autoIncrement.initialize(mongoose.connection); // mongoose autoincrement used for auto incrementing id
userSchema.plugin(autoIncrement.plugin, 'User');
const user = mongoose.model('user', userSchema);

export default user