import axios from 'axios';
import { NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: any) {
  const version = process.env.VERSION || 'v1';
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';
  const authToken = req.headers.cookie?.split('%22')[1];

  const formData = new FormData();
  console.log(req.body);
  formData.append('name', req.body.name);
  formData.append('category', req.body.category);
  formData.append('description', req.body.description);
  formData.append('cost', req.body.cost);
  formData.append('licenseID', req.body.licenseID);

  if (req.body.file) {
    formData.append('file', req.body.file);
  }
  try {
    const response = await axios.post(`${baseURL}${version}/asset/uploadAsset`, formData, {
      headers: {
        accept: 'application/json',
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
