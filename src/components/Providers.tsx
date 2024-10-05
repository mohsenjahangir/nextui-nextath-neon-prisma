import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <ToastContainer position="bottom-center" hideProgressBar className='z-50' />
      {children}
    </NextUIProvider>

  )
}
