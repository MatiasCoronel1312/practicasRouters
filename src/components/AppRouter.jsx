import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuRouter } from './MenuRouter';

const AppRouter = () => {
  return (
    <Routes>
        {
            MenuRouter.map((route) => {
                return(
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.Element/>}
                    />
                )
            })
        }
    </Routes>
  )
}

export default AppRouter