import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * Define User Schema.
 */

const UserSchema = Schema({
  /**
   * Data recieve from google-auth.
   */
});

const UserSchemaObject = mongoose.model('user_master', UserSchema);
export default UserSchemaObject;
