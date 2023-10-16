import axios from 'axios';
import { NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: any) {
  const version = process.env.VERSION || 'v1';
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';
  const authToken = req.headers.cookie?.split('%22')[1];

  const formData = new FormData();
  formData.append('name', 'test');
  formData.append('category', 'test');
  formData.append('description', 'test');
  formData.append('cost', 'test');
  formData.append('licenseID', 'test');

  if (req.body.file) {
    formData.append('file', req.body.file);
  }
  try {
    const response = await axios.post(`${baseURL}${version}/asset/uploadAsset`, formData, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + authToken,
      },
    });
    const data = response.data;
    res.status(200).json(data);
  } catch (error: any) {
    console.log('error', error.response.data);
    res.status(500).json(error.response.data);
  }
}
