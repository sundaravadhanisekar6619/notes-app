import { useContext } from "react";
import { PostContext } from "../App";
import EachArchivecard from "./EachArchivecard";
import Card from "./Card";
function ArchiveContent() {
  const { archive } = useContext(PostContext);

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-4 ">
      <div className="max-w-[80%] mx-auto">
        {archive.length === 0 ? (
          <p className="text-center text-base md:text-xl lg:text-3xl xl:text-3xl font-medium text-[#558B2F]">
            " 🚮 No Notes in Archive"
          </p>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">
              📂 Archived Notes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {archive.map((note, index) => (
                <EachArchivecard key={index} eachcard={note} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArchiveContent;
