import { lazy, Suspense } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import UserProvider from "./context/UserProvider";
import AccountProvider from "./context/AccountProvider";

import Loader from "./components/loader/Loader";

const Messenger = lazy(() => import("./components/Messenger"));

function App() {
  const clientID =
    "175748503868-bfa7hkbjrcn5nakdritsptbf6f7dtajq.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger />
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
