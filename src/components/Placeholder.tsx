import React from "react";
import { Toast, useToast } from "../hooks/useToast";

const Placeholder = () => {
  const { toast, items } = useToast();

  return (
    <div>
      <div>Hello</div>
      <button
        onClick={() =>
          toast({
            bg: "blue.700",
            color: "white",
            duration: 3000,
            info: "Request successfully processed",
          })
        }
      >
        Add toast
      </button>
      <Toast items={items} />
    </div>
  );
};

export default Placeholder;
