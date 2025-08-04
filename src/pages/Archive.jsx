import Logo from "../components/Logo";
// import DisplayName from "../components/DisplayName";
import ArchiveContent from "../components/ArchiveContent";
import { useNavigate } from "react-router-dom";

function Archive() {
  const navigate = useNavigate();

  const goBackToNotes = () => navigate("/note");
  return (
    <>
      <div className="min-h-screen bg-[#FAF3E0]  ">
        <header className="flex justify-between max-w-[95%] mx-auto py-5 items-center">
          <button
            onClick={goBackToNotes}
            className="mb-4 bg-[#A26769] text-white px-4 py-2 rounded-lg hover:bg-[#8e4d52] transition cursor-pointer"
          >
            ← Back to Notes
          </button>
          {/* <DisplayName /> */}

          <Logo />
        </header>
        <ArchiveContent />
      </div>
    </>
  );
}

export default Archive;
