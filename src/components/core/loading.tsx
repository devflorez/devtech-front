const Loading = ({ mode = "light" }: { mode?: "light" | "dark" }) => {
  const modeClasses = mode === "light" ? "bg-white" : "bg-primaryColor-500";

  return (
    <div className="flex items-center justify-center">
      <span
        className={`animate-blink mx-1 inline-block h-2 w-2 rounded-full ${modeClasses}`}
      ></span>
      <span
        className={`animate-blink mx-1 inline-block h-2 w-2 rounded-full ${modeClasses} delay-200`}
      ></span>
      <span
        className={`animate-blink mx-1 inline-block h-2 w-2 rounded-full ${modeClasses} delay-400`}
      ></span>
      <span
        className={`animate-blink mx-1 inline-block h-2 w-2 rounded-full ${modeClasses} delay-600`}
      ></span>
    </div>
  );
};

export default Loading;
