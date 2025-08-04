import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { useEffect } from "react";

import Login from "./pages/Login";
import Note from "./pages/Note";
import "./style.css";
import Office from "./pages/Office";
import Archive from "./pages/Archive";
// import HomeList from "./pages/HomeList";

export const PostContext = createContext();
console.log("PostContext", PostContext); //object

function App() {
  const [name, setName] = useState();
  //office usestate
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [officeData, setOfficedata] = useState(() => {
    const stored = localStorage.getItem("officeData");
    return stored ? JSON.parse(stored) : [];
  });
  //search
  const [searchnote, setSearchNote] = useState("");
  //delete
  const [deleteNote, setDeleteNOte] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("deleteNote", JSON.stringify(deleteNote));
  // }, [deleteNote]);
  // //Trash
  const [trash, setTrash] = useState(false);

  //tag
  const [tag, setTag] = useState("");

  //pinned
  const [pin, setPin] = useState(false);

  //Archive
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    localStorage.setItem("officeData", JSON.stringify(officeData));
  }, [officeData]);

  //ONTRASH
  function onTrash(value) {
    setTrash(!value);
  }

  //on pin
  function onHandlePin(index) {
    setOfficedata((prev) => {
      const updated = prev.map((note, i) =>
        i === index ? { ...note, pin: !note.pin } : note
      );

      const sorted = [...updated].sort((a, b) => {
        if (a.pin === b.pin) return 0;
        return a.pin ? -1 : 1;
      });

      return sorted;
    });
  }

  //login name
  function handleName(e) {
    // console.log(e.target.value);
    setName(e.target.value);
  }

  //office inputs
  function handleOffice(message) {
    if (!title || !description || !tag) return;
    console.log("message", message);

    setOfficedata((officeData) => [message, ...officeData]);
  }

  //archive

  function onArchive(index) {
    const noteToArchive = officeData[index];

    // Move to archive
    setArchive((prev) => [noteToArchive, ...prev]);

    // Remove from main note list
    setOfficedata((prev) => prev.filter((_, i) => i !== index));
  }

  //search
  const searchResult =
    searchnote.length > 0
      ? officeData?.filter((currentData) =>
          `${currentData.title} ${currentData.description} ${currentData.tag}`
            .toLowerCase()
            .includes(searchnote.toLowerCase())
        )
      : officeData;
  console.log("searchResult", searchResult);

  function onHandleDelte(deletItem, index) {
    console.log("deleteItem", deletItem);
    setDeleteNOte((deleteNote) => [deletItem, ...deleteNote]);
    console.log(deleteNote, "deleteNote");
    setOfficedata((officeData) => officeData.filter((_, i) => i !== index));
  }

  return (
    <PostContext.Provider
      value={{
        name,
        setName,
        handleName,
        title,
        setTitle,
        description,
        setDescription,
        officeData,
        handleOffice,
        searchnote,
        setSearchNote,
        searchResult,
        onHandleDelte,
        deleteNote,
        setDeleteNOte,
        trash,
        setTrash,
        onTrash,
        tag,
        setTag,
        pin,
        setPin,
        onHandlePin,
        onArchive,
        archive,
        setArchive,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="note" element={<Note />}>
            <Route index path="office" element={<Office />}></Route>

            {/* <Route path="home" element={<HomeList />}></Route> */}
          </Route>
          <Route path="archive" element={<Archive />}></Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}
export default App;
