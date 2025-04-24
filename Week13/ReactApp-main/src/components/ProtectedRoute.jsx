import NoPage from "../pages/NoPage";

export default function ProtectedRoute({ role, children }) {
  if (role == "admin") {
    return <NoPage />;
  } else {
    return <>{children}</>;
  }
}
