import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/redux.hooks";

export default function ProtectedRoute({
  children,
}: {
  children: ReactElement;
}) {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to={"/auth/login"}></Navigate>;
  }

  return children;
}
