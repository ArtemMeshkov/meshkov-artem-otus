import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {
  createStyles, 
  Theme, 
  makeStyles,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Drawer
} from '@material-ui/core';

import { Menu, MenuLinkProps } from './components/menu'
import { HomePage } from './pages/home-page';
import { CityPage } from './pages/city-page';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: 64
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: 64
    },
  }),
);

const menu: MenuLinkProps[] = [
  {
    title: 'Home',
    link: '/home'
  },
];

const App = () => {
  const classes = useStyles();

  return <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
    
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <Menu links={menu} />
    </Drawer> 

    <Container className={classes.content} maxWidth={'md'}>
      <Routes> 
        <Route path='/' element={<Navigate to="/home" replace />}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/city/:id' element={<CityPage/>}/>
      </Routes>
    </Container>
  </div>
}

export default App;