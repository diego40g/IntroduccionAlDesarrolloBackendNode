import mongoose from 'mongoose';

const connect = async (): Promise<boolean> => {
  try {
    await mongoose.connect('mongodb://root:example@mongo:27017/api_rest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default connect;
