import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { lazy } from "react";

/****Layouts*****/
const AdminLayout = lazy(() => import("../layouts/AdminLayout.tsx"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout.tsx"));
const SiteLayout = lazy(() => import("../layouts/SiteLayout.tsx"));
const StoreLayout = lazy(() => import("../layouts/StoreLayout.tsx"));
const ErrorLayout = lazy(() => import("../layouts/ErrorLayout.tsx"));

/***** Admin Pages ****/
const AdminDashboardPage = lazy(
  () => import("../pages/admin/dashboard/DashboardPage.tsx")
);
const AdminOrdersPage = lazy(
  () => import("../pages/admin/orders/OrdersPage.tsx")
);

/** Auth pages */
const SigninPage = lazy(() => import("../pages/auth/signin/SigninPage.tsx"));
const SignupPage = lazy(() => import("../pages/auth/signup/SignupPage.tsx"));
const RecoveryPage = lazy(
  () => import("../pages/auth/recovery/RecoveryPage.tsx")
);

/** Site pages */
const LandingPage = lazy(() => import("../pages/site/landing/LandingPage.tsx"));
const AboutPage = lazy(() => import("../pages/site/about/AboutPage.tsx"));

/** Store pages */
const StorePage = lazy(() => import("../pages/catalog/store/StorePage.tsx"));
const OrderFormPage = lazy(
  () => import("../pages/catalog/form/OrderFormPage.tsx")
);
const OrderDetailPage = lazy(
  () => import("../pages/catalog/order/OrderDetailPage.tsx")
);

/*****Routes******/
const ThemeRoutes = [
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
    exact: true,
  },
  {
    element: <AuthOutlet fallbackPath="/signin" />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "/admin", element: <AdminDashboardPage /> },
          { path: "/admin/orders", element: <AdminOrdersPage /> },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/signin", element: <SigninPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/recovery", element: <RecoveryPage /> },
    ],
    exact: true,
  },

  {
    element: <StoreLayout />,
    children: [
      { path: "/:storeId", element: <StorePage /> },
      { path: "/:storeId/form", element: <OrderFormPage /> },
      { path: "/:storeId/orders/:orderId", element: <OrderDetailPage /> },
    ],
    exact: true,
  },

  {
    path: "*",
    element: <ErrorLayout />,
  },
];

export default ThemeRoutes;
