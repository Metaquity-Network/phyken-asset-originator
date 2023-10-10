import { serializeCookie } from '@/src/lib';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const version = process.env.VERSION || 'v1';
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';

  try {
    const response = await axios.post(`${baseURL}${version}/auth/login`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    const cookie = serializeCookie('auth', JSON.stringify(data), { path: '/' });
    res.status(200).setHeader('Set-Cookie', cookie).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
}
