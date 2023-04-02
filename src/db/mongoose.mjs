import mongoose from 'mongoose'

export function start() {
  return mongoose.connect('mongodb://localhost:27017/admin');
}

export function disconnect() {
  return mongoose.disconnect();
}