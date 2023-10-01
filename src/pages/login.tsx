'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect, useState } from 'react';
import { getCookieParser } from 'next/dist/server/api-utils';
import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';

const Login: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const getRedirect = () => {
    const redirect = getCookie('redirect');
    if (redirect) {
      deleteCookie('redirect');
      return redirect.toString();
    }

    return '/';
  };
  const login = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setSubmitting(true);

    const res = await axios.post('api/mock/login');
    if (res.status === 200) {
      router.push(getRedirect());
    }
    setSubmitting(false);
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <div className="justify-content-center align-items-center px-3">
        <div className="bg-white border p-5">
          <div className="">
            <h1>Login</h1>
            <p className="text-black-50" onClick={login}>
              Sign In to your account
            </p>
            teste
          </div>
        </div>
        <div className="bg-primary text-white d-flex align-items-center justify-content-center p-5">
          <div className="text-center">
            <h2>Sign up</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link href="/register">
              <button className="btn btn-lg btn-outline-light mt-3" type="button">
                Register Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
