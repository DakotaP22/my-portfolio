'use client'

import { useState } from "react";
import styles from './sidebar.module.css';

export default function Sidebar() {

    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(open => !open);
    

    return <div className="w-min h-full flex">
        
        {/* Sidebar */}
        <div className="h-full w-[50px] bg-background-light">
            <button onClick={toggleDrawer}>Toggle Drawer</button>
        </div>

        {/* Drawer */}
        <div className={`${styles.drawer} ${open ? styles.open : styles.closed} bg-background-medium`}>
            <p>Test</p>
        </div>

    </div>
}