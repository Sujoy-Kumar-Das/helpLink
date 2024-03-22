/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

const toastMessage = async (data: any) => {
  if (data?.success) {
    toast.success(data?.message, {
      duration: 5000,
      position: "top-center",
    });
  } else {
    toast.error(data?.message, {
      duration: 5000,
      position: "top-center",
    });
  }
};

export default toastMessage;
