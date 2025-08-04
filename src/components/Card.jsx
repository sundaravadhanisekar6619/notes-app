import { useContext, useState } from "react";
import { PostContext } from "../App";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { RiInboxArchiveFill } from "react-icons/ri";

function Card({ eachcard, index }) {
  const [isPop, setIspop] = useState(false);
  function handleSeemore() {
    setIspop(!isPop);
  }
  console.log(index);
  const mes = useContext(PostContext);
  console.log("message in each card", mes);
  //   const { title, description } = mes;
  //   console.log("eachcard", eachcard);
  const { onHandleDelte, onHandlePin, onArchive } = mes;

  const { title, description, tag, pin } = eachcard;
  console.log("tag", tag);
  function handleDelte() {
    const deletItem = { delTitle: title, delDes: description };
    onHandleDelte(deletItem, index);
  }

  function handlePin() {
    onHandlePin(index);
  }

  function handleArchive() {
    // const newArchive = { title, description, index };
    onArchive(index);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className=" h-[160px] rounded-xl p-3 relative bg-[#FFAB91]"
      >
        <h5 className="font-medium text-white text-base">{title}</h5>
        <p className="w-full break-words whitespace-normal text-gray-900 text-sm mt-1">
          {description}
        </p>
        {description.length > 30 && (
          <button onClick={handleSeemore} className="text-xs text-white mt-1">
            see more...
          </button>
        )}
        <div className="absolute bottom-2 left-0 rigth-0 w-full mx-auto">
          <div className="flex justify-between items-center px-3">
            <span className="inline-block bg-black text-white font-medium text-sm text-center rounded-sm px-2 py-1">
              🎖{tag}
            </span>
            <div className="flex">
              <p
                onClick={handleArchive}
                className="cursor-pointer text-gray-800 pr-2"
              >
                <RiInboxArchiveFill size={25} className="cursor-pointer" />
              </p>
              <p className=" inline" onClick={handleDelte}>
                <RiDeleteBin5Fill size={25} className="cursor-pointer" />
              </p>
            </div>
          </div>
        </div>
        <span
          className="cursor-pointer text-yellow-500 absolute top-1 right-3"
          onClick={handlePin}
        >
          {pin ? "📌" : "📍"}
        </span>
      </motion.div>

      {/* popup */}
      {isPop && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-sm rounded-lg shadow-md p-4 relative">
            <button
              onClick={() => setIspop(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
            >
              ×
            </button>
            <h4 className="text-lg font-semibold mb-2 text-[#A26769]">
              {title}
            </h4>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;

// absolute bottom-2 right-5
