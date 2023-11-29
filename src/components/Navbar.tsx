import { motion } from 'framer-motion';
import { Menubar } from 'primereact/menubar';

export const Navbar = () =>{
    const navItems = [
        {
            label:'Home',
            icon:'pi pi-fw pi-home',
            url:'/#'
        },
        {
            label:'About',
            icon:'pi pi-fw pi-user',
            url:'/#about'
        },
        {
            label:'Frontend',
            icon:'pi pi-fw pi-table',
            url:'/#frontend'
        },
        {
            label:'Backend',
            icon:'pi pi-fw pi-server',
            url:'/#backend'
        }
    ]

    const Menu = <Menubar model={navItems} />

    return(
        <>
            <motion.div layout initial={{ position: 'fixed', top: '500px', right: '15px', zIndex: 1000, opacity: 0, scale: 0.3 }} animate={{ position: 'fixed', top: '15px', right: '15px', zIndex: 1000, opacity:1, scale: 1 }} transition={{ duration: 0.3 }}>
                {Menu}
            </motion.div>
        </>
    )
}