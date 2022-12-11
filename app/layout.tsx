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
        
        {/* <div className={styles.sidebar}>
          <button onClick={() => setDrawer(!open)}>Toggle Drawer</button>
        </div>

        <div className={`${styles.drawer} ${open ? styles.open : styles.closed}`}></div> */}
        
        <Sidebar />


        <div className={styles.content}>
          {children}
        </div>

        <div className={styles.bottomBar}>
          <p>Next.js 13</p>
        </div>

        </body>
    </html>
  )
}
