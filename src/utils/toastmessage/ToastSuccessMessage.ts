import { toast } from "sonner";

export const ToastSuccessMessage = (message: string) => {
  toast.success(message, {
    duration: 2000,
    position: "top-center",
  });
};
