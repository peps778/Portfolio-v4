import { useRef } from "react";

function Button() {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const spinnerRef = useRef<SVGSVGElement>(null);
    const btnTextRef = useRef<HTMLSpanElement>(null);

  const handleDownload = () => {
    if (spinnerRef.current && btnTextRef.current && buttonRef.current) {
      spinnerRef.current.classList.remove("hidden");
      btnTextRef.current.textContent = "Downloading...";

      const link = document.createElement("a");
      link.href = "/Paul Jhon Magbanua - CV.pdf"; 
      link.download = "Paul Jhon Magbanua - CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        spinnerRef.current?.classList.add("hidden");
        btnTextRef.current!.textContent = "Download My CV!";
      }, 2000);
    }
  };

    return (
        <button
          ref={buttonRef}
          onClick={handleDownload}
          className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-all duration-300"
        >
          <svg
            ref={spinnerRef}
            className="hidden animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span ref={btnTextRef}>Download My CV!</span>
        </button>
    )

}

export default Button;