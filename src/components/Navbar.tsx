import { Menubar } from 'primereact/menubar';

export const Navbar = () =>{
    const navItems = [
        {
            label:'Home',
            icon:'pi pi-fw pi-home',
            url:'/'
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

    return(
        <>
            <Menubar model={navItems} />
        </>
    )
}