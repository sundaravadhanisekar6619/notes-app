// import { useState } from "react";
// import { usePostContext } from "../";
import Logo from "../components/Logo";
import Welcome from "../components/Welcome";
import UserName from "../components/UserName";
import Archive from "./Archive";

function Login() {
  //login name
  // function handleName(e) {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // }

  return (
    <>
      <section className="max-w-screen min-h-screen bg-[#e9d69c] relative px-5 py-5">
        <Logo />
        <Welcome>
          <UserName />
        </Welcome>
        {/* <Archive /> */}
      </section>
    </>
  );
}
export default Login;
