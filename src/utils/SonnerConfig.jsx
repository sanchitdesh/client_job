// SonnerConfig.js (or in your main app file)
import { Toaster } from "sonner";

const SonnerConfig = () => (
  <Toaster
    position="top-right" // Position can be "top-right", "bottom-left", "top-left", "bottom-right"
    toastOptions={{
      duration: 5000, // Default duration for toasts
      style: {
        backgroundColor: "#333", // Default toast background color
        color: "#fff", // Default toast text color
        borderRadius: "8px", // Default rounded corners
        padding: "12px 20px", // Default padding
        fontSize: "14px", // Default font size
        fontWeight: "500", // Default font weight
      },
      success: {
        style: {
          backgroundColor: "#4caf50", // Customize success toast background color
          color: "#fff", // Customize success toast text color
        },
      },
      error: {
        style: {
          backgroundColor: "#f44336", // Customize error toast background color
          color: "#fff", // Customize error toast text color
        },
      },
    }}
  />
);

export default SonnerConfig;

/*

import { toast } from "sonner";

const handleSuccess = () => {
  toast.success("Operation successful!", {
    duration: 3000,
    style: {
      backgroundColor: "#4caf50",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px",
    },
  });
};

const handleError = () => {
  toast.error("Something went wrong!", {
    duration: 4000,
    style: {
      backgroundColor: "#f44336",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px",
    },
  });
};

*/

/*
 custom-toast.css 


.toast-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
  }
  
  .toast {
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 0.5rem;
  }
  
  .toast-success {
    background-color: #4caf50;
  }
  
  .toast-error {
    background-color: #f44336;
  }
  
*/
