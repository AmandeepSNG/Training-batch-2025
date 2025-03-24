import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PublicRoute: React.FC = () => {
  const user = {
    id: 123,
    name: 'xyz',
    email: 'xyz@gmail.com',
    role: 'admin'
  }

  return user.id  ? <Navigate to={"/dashboard"} /> : <Outlet/>

};

export default PublicRoute;