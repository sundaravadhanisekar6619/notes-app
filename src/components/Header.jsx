import DisplayName from "../components/DisplayName";
import Logo from "../components/Logo";
// import Switch from "../components/Switch";
import SearchNotes from "./SearchNotes";
function Header() {
  return (
    <header className="flex justify-between max-w-[95%] mx-auto py-5 items-center">
      <Logo />
      {/* <Switch /> */}
      <DisplayName />
      <SearchNotes />
    </header>
  );
}

export default Header;
