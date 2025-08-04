import { useContext } from "react";
import { PostContext } from "../App";
function DisplayName() {
  const { name } = useContext(PostContext);
  //   console.log("data", data);
  //   const { name } = data;
  //   console.log(name);
  //   console.log("data", data);
  //   const { name } = data;
  return (
    <>
      <div className="hidden lg:block">
        <p className="text-sm  lg:text-lg xl:text-xl text-black-500 font-medium  text-gray-800">
          🤩 Welcome {name}
        </p>
      </div>
    </>
  );
}
export default DisplayName;
