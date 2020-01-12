import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Banner from './components/Banner';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Banner />
      <Pricing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
