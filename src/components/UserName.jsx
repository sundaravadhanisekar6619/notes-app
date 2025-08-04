import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../App";

function UserName() {
  const data = useContext(PostContext);
  console.log(data);
  const { name, handleName } = data;

  const Navigate = useNavigate();

  function handleSubmit(e) {
    if (!name) return;
    e.preventDefault();
    Navigate("note");
    // setName("");
  }

  return (
    <>
      <form className="mt-25 flex gap-0 justify-center" onSubmit={handleSubmit}>
        <div className="relative w-105">
          <div className="border-2 inline-block rounded-sm w-[80%]">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full py-2 px-2 outline-none text-lg font-medium"
              value={name}
              onChange={handleName}
            />
          </div>
        </div>

        <button className="inline-block bg-[#ffa94d] px-5 py-2 rounded-xl text-white text-lg font-bold cursor-pointer">
          Submit
        </button>
      </form>
    </>
  );
}
export default UserName;
