import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/login" />;
};


//якщо потрібно помістити кілька приватних підмаршрутів під один маршрут використовується Outlet
// import { Outlet } from "react-router-dom";

// export const PrivateOutlet=()=> {
// const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// }

//App.jsx
//<Route path="/private-outlet" element={<PrivateOutlet />}>
//<Route element={<Private />} />
//</Route>