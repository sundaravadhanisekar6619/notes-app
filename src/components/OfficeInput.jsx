import { useContext } from "react";
import { PostContext } from "../App";

function OfficeInput() {
  const res = useContext(PostContext);
  console.log(res);
  const {
    title,
    description,
    setTitle,
    setDescription,
    handleOffice,
    tag,
    setTag,
  } = res;

  //handle title
  function handleTitle(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  //handle description
  function handleDesc(e) {
    //console.log(e.target.value);
    setDescription(e.target.value);
  }

  //handle tag
  function handleTag(e) {
    setTag(e.target.value);
  }

  //handle office submit
  function handleOfficeSubmit(e) {
    e.preventDefault();

    const officeData = {
      title,
      description,
      tag,
      pin: false,
      archive: false,
    };
    handleOffice(officeData);
    setTitle("");
    setDescription("");
    setTag("");
  }
  //#FFCC80
  return (
    <div className="xl:max-w-[90%] lg:max-w-[90%] md:max-w-[95%] mx-auto  my-5 bg-[#946B28] rounded-md">
      <form
        className="flex justify-center items-center gap-5 xl:gap-10 lg:gap-5 md:gap-5  px-5 py-7 "
        onSubmit={handleOfficeSubmit}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitle}
          className="inline-block w-full px-3 py-3 border-2 rounded-sm border-white basis-1/3 h-[50px] outline-none placeholder-black text-sm md:text-base lg:text-base"
        ></input>

        <select
          value={tag}
          onChange={handleTag}
          className="inline-block w-full px-3 py-3 border-2 rounded-sm border-white basis-1/3 h-[50px] outline-none"
        >
          <option value="" disabled>
            --Select Tag--
          </option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Important">Important</option>
        </select>

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={handleDesc}
          className="inline-block w-full px-3 py-3 basis-1/2 border-2 rounded-sm border-white h-[50px] outline-none overflow-hidden resize-none placeholder-black"
        ></textarea>

        <button className="text-white bg-[#ffa94d] px-2 py-2 inline-block rounded-sm cursor-pointer w-40">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default OfficeInput;
