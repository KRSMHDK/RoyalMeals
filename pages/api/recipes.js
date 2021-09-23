import clientPromise from '../../libs/mongodb';
const cloudinary = require('cloudinary');
import { IncomingForm } from 'formidable';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getPosts(req, res);
    }
    case 'POST': {
      return addPost(req, res);
    }
  }
}

async function getPosts(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const data = await db.collection('recipes').find({}).limit(20).toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(data)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function addPost(req, res) {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();
    console.log(form);
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const file = data?.files?.inputFile.path;

  const response = await cloudinary.v2.uploader.upload(file, {
    resource_type: 'image',
    public_id: 'recipeimages',
  });
  return res.json(response);

  // try {

  //   const client = await clientPromise;
  //   const db = client.db(process.env.MONGODB_DB);
  //   await db.collection('recipes').insertOne(JSON.parse(req.body));

  //   const response = await cloudinary.v2.uploader.upload(req.imagefile, {
  //     resource_type: 'image',
  //     public_id: 'recipeimages',
  //   });
  //   return res.json({
  //     message: 'Post added successfully',
  //     success: true,
  //   });
  // } catch (error) {
  //   return res.json({
  //     message: new Error(error).message,
  //     success: false,
  //   });
  // }
}
