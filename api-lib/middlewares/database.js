import { MongoClient } from 'mongodb';

global.mongo = global.mongo || {};

export default async function database(req, res, next) {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  await global.mongo.client.connect();
  req.dbClient = global.mongo.client;
  req.db = global.mongo.client.db();
  return next();
}
