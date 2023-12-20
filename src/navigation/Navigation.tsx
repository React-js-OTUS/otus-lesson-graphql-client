import React, { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StoreProvider } from 'src/client/StoreProvider';
import { ProtectedRoute } from './ProtectedRoute';
import { useLoginNavigate } from './useLoginNavigate';
import { SpinLoading } from './SpinLoading';
import { getWithSuspense } from './getWithSuspense';
import { PageSkeleton } from './PageSkeleton';

const getWithPageSuspense = getWithSuspense(<PageSkeleton />);
const getWithSpinSuspense = getWithSuspense(<SpinLoading />);

const homeScreen = getWithPageSuspense(lazy(() => import('../screens/Home')));
const settingsScreen = getWithPageSuspense(lazy(() => import('../screens/Settings')));
const cabinetScreen = getWithPageSuspense(lazy(() => import('../screens/Cabinet')));
const profileScreen = getWithPageSuspense(lazy(() => import('../screens/ProfileScreen')));
const authScreen = getWithSpinSuspense(lazy(() => import('../screens/AuthScreen')));
const notFoundScreen = getWithSpinSuspense(lazy(() => import('../screens/NotFound')));

const Main: FC = () => (
  <StoreProvider>
    <Routes>
      <Route index element={homeScreen} />
      <Route path="profile" element={profileScreen} />
      <Route path="settings" element={settingsScreen} />
      <Route path="cabinet" element={cabinetScreen} />
      <Route path="*" element={notFoundScreen} />
    </Routes>
  </StoreProvider>
);

export const Navigation: FC = () => {
  useLoginNavigate();

  return (
    <Routes>
      <Route path="auth/*" element={authScreen}>
        <Route path=":mode" element={authScreen} />
      </Route>
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
