import { Schema, model } from 'mongoose';

export interface ImageInterface extends Document {
  id?: string;
}

const imageSchema = new Schema(
  {
    id: { type: String },
  },
  {
    timestamps: true,
  }
);

export const ImageModel = model<ImageInterface>('ImageModel', imageSchema);
