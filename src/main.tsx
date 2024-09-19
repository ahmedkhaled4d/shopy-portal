import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Suspense } from "react";
import AuthProvider from "react-auth-kit";
import Loader from "./components/shared/Loader.tsx";
import authStore from "./utils/authStore.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loader />}>
    <AuthProvider store={authStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Suspense>
);
