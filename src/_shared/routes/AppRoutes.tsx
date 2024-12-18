import { createHashRouter } from "react-router-dom";
import { RootStyle } from "../components/Style/RootStyle";
import Consolidator from "@/Consolidator/Consolidator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const AppRoutes = createHashRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <RootStyle>
          <ToastContainer />
          <Consolidator />
        </RootStyle>
      </QueryClientProvider>
    ),
  },
]);
