require('dotenv').config();
import mongoose, { ConnectOptions } from 'mongoose';
import config from './config/config';

const { DB } = config;

const dbOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`, dbOptions);
    console.log('Connected to DB');
  } catch (err) {
    console.log('Error connecting to DB', err);
  }
};

export default connect;
