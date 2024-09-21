import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Suspense } from "react";
import AuthProvider from "react-auth-kit";
import Loader from "./components/shared/Loader.tsx";
import authStore from "./utils/authStore.ts";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ThemeData } from "./types/ThemeData";

const theme: ThemeData = {
  token: {
    colorPrimary: "#000000",
  },
};

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loader />}>
    <AuthProvider store={authStore}>
      <BrowserRouter>
        <ConfigProvider direction="ltr" theme={theme}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </AuthProvider>
  </Suspense>
);
