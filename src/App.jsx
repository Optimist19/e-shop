import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
import ProductsDetails from "./components/ProductsDetails";

import Signup from "./components/Signup";
import AppLayout from "./ui/AppLayout";
import PublicPage from "./components/PublicPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SelectedItemCart from "./components/SelectedItemCart";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";


function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 100
      }
    }
  });



  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<ProtectedRoutes />}>
          {/* <Route index replace element={<Navigate to="products" />} /> */}
            <Route path="/" element={<Products />} />
            <Route path="product-details/:id" element={<ProductsDetails />} />
            <Route path="cartlist" element={<SelectedItemCart />} />
          </Route>
        </Route>
        <Route path="public" element={<PublicPage />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
