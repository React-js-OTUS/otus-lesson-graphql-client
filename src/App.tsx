import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './localization';
import { ClientProvider } from 'src/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import { StoreProvider } from 'src/client/StoreProvider';
import { isTouchDevice } from 'src/utils/isTouchDevice';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { Navigation } from './navigation/Navigation';
import { store } from './store';
import { Layout } from './layout';
import { ThemeProvider } from './theming';
import { Head } from './Head';

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>
        <StoreProvider>
          <Provider store={store}>
            <Head />
            <LocalizationInitiator />
            <ThemeProvider>
              <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
                <Layout>
                  <Navigation />
                </Layout>
              </DndProvider>
            </ThemeProvider>
          </Provider>
        </StoreProvider>
      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;
