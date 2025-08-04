import { useContext } from "react";
import { PostContext } from "../App";
import Trash from "./Trash";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SearchNotes() {
  const { searchnote, setSearchNote, trash, onTrash, deleteNote, archive } =
    useContext(PostContext);
  const totalNotes = deleteNote.length;
  console.log(totalNotes);

  function handleTrash() {
    console.log("trash", trash);

    onTrash(trash);
  }
  const NavArchive = useNavigate();
  function sendArchive() {
    NavArchive("/archive");
  }
  const archiveCount = archive.length;
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <input
          value={searchnote}
          onChange={(e) => setSearchNote(e.target.value)}
          type="search"
          placeholder="Search Notes..."
          className="inline-block placeholder-black
           px-3 py-1 border-2 rounded-sm border-white text-sm"
        ></input>
        <div className="relative">
          <button
            className="px-4 py-1 bg-red-500 rounded-xl text-white text-sm md:text-base lg:text-base flex items-center gap-[3px] cursor-pointer"
            onClick={handleTrash}
          >
            Trash{" "}
            <span>
              <RiDeleteBin2Fill />
            </span>
          </button>
          {totalNotes <= 0 ? (
            ""
          ) : (
            <span className="absolute -top-4 -right-3 w-[25px] h-[25px] rounded-full bg-white text-black text-center inline-block text-sm  ">
              {totalNotes}
            </span>
          )}

          {trash ? <Trash /> : ""}
        </div>

        {/* button archive */}
        {archiveCount <= 0 ? (
          ""
        ) : (
          <div onClick={sendArchive} className="relative">
            <button className="px-4 py-1 bg-yellow-500 rounded-xl text-white text-sm flex items-center gap-[3px] cursor-pointer md:text-base lg:text-base">
              View Archive
            </button>
            <span className="absolute -top-4 -right-3 w-[25px] h-[25px] rounded-full bg-white text-black text-base text-center inline-block">
              {archiveCount}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchNotes;
