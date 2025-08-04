import OfficeInput from "../components/OfficeInput";
import Card from "../components/CardOverlay";
function Office() {
  return (
    <div className=" max-w-[90%] mx-auto rounded-xl py-1">
      {/* <p className="text-center text-white text-3xl tracking-wider">
        <em>Office Notes</em>
      </p> */}

      <OfficeInput />
      <Card />
    </div>
  );
}

export default Office;

// bg-[#fcc5b8]
