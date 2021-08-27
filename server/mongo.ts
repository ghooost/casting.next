import { MongoClient } from 'mongodb'

export enum MongoCollections {
  users = 'users',
};

let database = null;
let client = null;
export const getDb = async () => {
  if (database) {
    return database;
  }
  const { MONGODB, MONGOUSER, MONGOPASS, MONGOSRV} = process.env;
  const url = `mongodb+srv://${MONGOUSER}:${MONGOPASS}@${MONGOSRV}?retryWrites=true&writeConcern=majority`;
  client = new MongoClient(url);
  try {
    await client.connect();
    database = client.db(MONGODB);
    return database;
  } catch {
    await client.close();
    return null;
  }
}

export const findOne = async (name: MongoCollections, query: any) => {
  const db = await getDb();
  return await db.collection(name).findOne(query);
}

export const find = async (name: MongoCollections, query: any) => {
  const db = await getDb();
  return await db.collection(name).find(query);
}

export const insert = async (name: MongoCollections, query: any) => {
  const db = await getDb();
  return await db.collection(name).insertOne(query);
}

export const update = async (name: MongoCollections, query: any, set: any) => {
  const db = await getDb();
  return await db.collection(name).update(query, {$set: set});
}

export const closeDb = async () => {
  if (database) {
    database = null;
    await client.close();
  }
}