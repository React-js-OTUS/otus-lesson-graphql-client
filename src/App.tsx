import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './localization';
import { ClientProvider, SubscriptionsListener } from 'src/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { Navigation } from './navigation/Navigation';
import { store } from './store';
import { Layout } from './layout';
import { ThemeProvider } from './theming';
import { Initializer } from './store/Initializer';
import { Head } from './Head';

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>
        <Provider store={store}>
          <Head />
          <Initializer />
          <SubscriptionsListener />
          <LocalizationInitiator />
          <ThemeProvider>
            <DndProvider backend={HTML5Backend}>
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
