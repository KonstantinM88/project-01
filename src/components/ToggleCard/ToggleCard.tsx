import { useState } from "react";
import { cn } from "clsx-for-tailwind";

export default function ToggleCard() {
  const [isBlue, setIsBlue] = useState(false);

  function handleToggle() {
    setIsBlue((prev) => !prev);
  }

  return (
    <div>
      <div
        className={cn(
          "h-24 w-48 rounded-xl shadow-lg flex items-center justify-center",
          {
            "bg-blue-400": isBlue,
            "bg-yellow-300": !isBlue,
          }
        )}
      >
        Card
      </div>
      <button type="button" onClick={handleToggle}>
        Toggle card color
      </button>
    </div>
  );
}