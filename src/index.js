import { StrictMode } from 'react';
import { ScrollToTop } from 'components/misc/ScrollToTop/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from './styles';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <BrowserRouter basename="/car-rentals">
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ThemeProvider>

      <ToastContainer
        autoClose={2000}
        position="top-center"
        progressStyle={{ height: '1px' }}
        hideProgressBar={true}
        toastStyle={{
          backgroundColor: `whitesmoke`,
        }}
      />
    </>
  </StrictMode>
);
