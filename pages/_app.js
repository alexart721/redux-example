import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../lib/redux';

const App = ({ Component, pageProps, tasks = [] }) => {
  const store = configureStore({
    tasks,
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default App;
