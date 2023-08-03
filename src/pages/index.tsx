"use client";

import Header from "../components/header/header";
import { ReduxProvider } from "../reducers/provider";

export default function Home() {
  return (
    <ReduxProvider>
      <div className="relative z-[1]">
        <Header />
      </div>
    </ReduxProvider>
  );
}
