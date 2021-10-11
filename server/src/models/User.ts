import { Schema, model } from 'mongoose';

export interface IUser extends Document {
  id?: string;
  name?: string;
  email: string;
  password: string;
  entries?: number;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    entries: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>('User', userSchema);
