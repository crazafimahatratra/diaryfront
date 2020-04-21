import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import CDrawer from './Components/CDrawer';
import clsx from 'clsx';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
}));

export default function Home() {
    const classes = styles();
    const [openDrawer, setOpenDrawer] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    }
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    }
    return (
        <>
            <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: openDrawer, })}>
                <Toolbar>
                    <IconButton onClick={handleDrawerOpen} className={clsx(classes.menuButton, openDrawer && classes.hide)}>
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <CDrawer open={openDrawer} onClose={handleDrawerClose} />
            <main>

            </main>
        </>
    );
}