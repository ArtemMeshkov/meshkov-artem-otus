import { Schema } from "mongoose"

export function model(mongoose) {
  const RssLink = new Schema({
    rssDocs: { type: String, required: true },
    link: { type: String, required: true },
  }, { autoIndex: true });

  return mongoose.model('RssLink', RssLink)
}