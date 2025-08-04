import { useContext } from "react";
import { PostContext } from "../App";
import Card from "./Card";
import { motion } from "framer-motion";

function CardOverlay() {
  const { searchResult } = useContext(PostContext);
  console.log("officeData", searchResult);

  // const searchResult =

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-5"
    >
      {searchResult?.length === 0 ? (
        <p className="text-center text-3xl font-medium text-[#558B2F]">
          😍 Start your Happy Notes 😍
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4  gap-x-5 gap-y-10">
          {searchResult.map((eachcard, i) => (
            <Card eachcard={eachcard} index={i} key={i} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
export default CardOverlay;
