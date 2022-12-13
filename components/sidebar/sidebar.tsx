'use client'

import { useState } from "react";
import styles from './sidebar.module.css';
import { FaReact } from "react-icons/fa";
import { VscAccount, VscFiles, VscGithubInverted, VscHome } from "react-icons/vsc";
import NavIcon from "./nav-icon"; '@components/sidebar/nav-icon'
import ActionIcon from '@components/sidebar/action-icon'

export default function Sidebar() {

    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(open => !open);


    return <div className="w-min h-full flex">
        
        {/* Sidebar */}
        <div className="h-full w-[60px] bg-background-light grid grid-cols-1 auto-rows-min gap-y-7 py-7">
            <NavIcon icon={VscHome} href="/"></NavIcon>
            <ActionIcon icon={VscFiles} onClick={toggleDrawer} /> 
            <NavIcon icon={VscGithubInverted} href="https://github.com/DakotaP22"></NavIcon>
            <NavIcon icon={FaReact} href="/"></NavIcon>
            <NavIcon icon={VscAccount} href="/"></NavIcon>
        </div>

        {/* Drawer */}
        <div className={`${styles.drawer} ${open ? styles.open : styles.closed} bg-background-medium`}>
            
        </div>

    </div>
}