import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              fontWeight: "bold",
              defaultColor: "#495e57",
              defaultBg: "#f4ce14",
              defaultHoverBg: "#495e57",
              defaultHoverBorderColor: "#f4ce14",
              defaultHoverColor: "#ffffff",
              defaultActiveBg: "#495e57",
              defaultActiveBorderColor: "#f4ce14",
              defaultActiveColor: "#ffffff",
            },
          },
        }}
      >
        <Header />
        <Main>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </Main>
        <Footer />
      </ConfigProvider>
    </>
  );
}

export default App;
