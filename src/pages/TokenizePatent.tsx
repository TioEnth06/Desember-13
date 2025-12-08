import { Navbar } from "@/components/Navbar";
import { PatentVaultForm } from "@/components/patent-form/PatentVaultForm";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const TokenizePatent = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/vault");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activePage="vault" />
      <main className="p-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-6">
            <button
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Vault
            </button>
          </div>
          <PatentVaultForm onClose={handleClose} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TokenizePatent;

