import React from "react";
import ReactDOM from "react-dom";
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import queryClient from './components/QueryClient';
import { QueryClientProvider } from 'react-query';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);