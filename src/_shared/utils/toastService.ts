// src/utils/toastService.js

import { toast, ToastPosition } from "react-toastify";

const toastOptions = {
  position: "top-right" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showSuccessToast = (message: string) => {
  toast.success(message, toastOptions);
};

export const showErrorToast = (message: string) => {
  toast.error(message, toastOptions);
};

export const showInfoToast = (message: string) => {
  toast.info(message, toastOptions);
};

export const showWarningToast = (message: string) => {
  toast.warn(message, toastOptions);
};
