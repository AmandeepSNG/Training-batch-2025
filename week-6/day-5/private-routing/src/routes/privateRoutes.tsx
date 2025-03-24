import { Navigate, Outlet } from "react-router-dom";

type PropTypes = {
  allowedRoles: string[]
}

const PrivateRoute: React.FC<PropTypes> = (props: PropTypes) => {
  const user = {
    id: 123,
    name: 'xyz',
    email: 'xyz@gmail.com',
    role: 'admin'
  }
  const { allowedRoles } = props 

  return user.id   ? allowedRoles.includes(user.role) ? <Outlet/> : <Navigate to={"/dashboard"} /> : <Navigate to={"/login"} />;
};

export default PrivateRoute