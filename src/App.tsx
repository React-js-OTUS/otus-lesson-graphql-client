import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Layout } from './layout';
import { Navigation } from './navigation/Navigation';
import { ThemeProvider } from './theming';
import { Head } from './Head';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { ClientProvider } from 'src/client';
import { DndProvider } from './dnd/DndProvider';

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>
        <Provider store={store}>
          <Head />
          <LocalizationInitiator />
          <ThemeProvider>
            <DndProvider>
              <Layout>
                <Navigation />
              </Layout>
            </DndProvider>
          </ThemeProvider>
        </Provider>
      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;
