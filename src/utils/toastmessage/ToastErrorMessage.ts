import { toast } from "sonner";

export const ToastErrorMessage = (message: string) => {
  toast.success(message, {
    duration: 2000,
    position: "top-center",
  });
};
