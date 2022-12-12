'use client'

import Sidebar from '@components/sidebar/sidebar';
import { useState } from 'react';
import './globals.css';
import styles from './root_layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [open, setDrawer] = useState(false);
  
  return (
    <html lang="en">
      <head />
      <body className="grid grid-cols-root_layout grid-rows-root_layout">
        
        <Sidebar />


        <div className={styles.content}>
          {children}
        </div>

        <div className="bg-blue col-span-3 text-[12px] text-[#fff] grid grid-cols-bottom_bar px-[12px] gap-x-[10px] content-center font-bold">
          <p>Next 13</p>
          <p>Vercel</p>
          <p>Typescript</p>
        </div>

        </body>
    </html>
  )
}
