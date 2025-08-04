import { useContext } from "react";
import { PostContext } from "../App";
import EachDeleteItem from "./EachDeleteItem";
import { motion } from "framer-motion";

function Trash() {
  const { deleteNote } = useContext(PostContext);
  const { delTitle } = deleteNote;
  console.log(delTitle);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white max-h-64 h-[400px]  w-[250px] rounded-lg  absolute top-10 -right-2 overflow-y-auto overflow-x-hidden  shadow-md  transition-all duration-500 ease-in-out transform animate-fadeIn"
    >
      {deleteNote.length === 0 ? (
        <p className="text-xl text-black-500 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          Empty Trash 🚮
        </p>
      ) : (
        <ul>
          {deleteNote.map((eachItem, index) => (
            <EachDeleteItem eachItem={eachItem} index={index} />
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default Trash;
