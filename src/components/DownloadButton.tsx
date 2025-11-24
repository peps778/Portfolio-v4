import { useRef, useState } from "react";
import Resume from "/public/MAGBANUA_PAUL_JHON_CV.pdf";

function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = Resume;
    link.download = "MAGBANUA_PAUL_JHON.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-600 disabled:bg-slate-500 text-white py-3 px-6 rounded-lg transition-all duration-300"
    >
      {isDownloading && (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      )}

      {isDownloading ? "Downloading..." : "Download My CV!"}
    </button>
  );
}

export default DownloadButton;
