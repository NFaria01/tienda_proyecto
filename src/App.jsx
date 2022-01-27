import React from 'react';


import { ThemeProvider } from '@material-ui/core/styles';
import theme from './temaConfig'
import Navbar from './components/Navbar';





function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar></Navbar> 
        </ThemeProvider>
    );
}

export default App;