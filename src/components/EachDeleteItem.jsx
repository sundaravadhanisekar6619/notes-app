import { useContext } from "react";
import { PostContext } from "../App";
function EachDeleteItem({ eachItem, index }) {
  const { deleteNote, setDeleteNOte } = useContext(PostContext);

  function handlePermanetDelete() {
    const confirm = window.confirm(
      " Do you want to delete this note permanently?"
    );
    if (confirm) {
      setDeleteNOte((deleteNote) => deleteNote.filter((ce, i) => i !== index));
    }
  }

  return (
    <li className="text-black text-base font-normal mx-2 my-2 px-3 py-1  bg-gray-200 rounded-sm ">
      <p className="flex justify-between gap-[3px] w-full break-words whitespace-normal">
        {eachItem.delTitle}{" "}
        <span className="cursor-pointer" onClick={handlePermanetDelete}>
          ❌
        </span>
      </p>
    </li>
  );
}

export default EachDeleteItem;
