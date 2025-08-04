import UserName from "../components/UserName";
function Welcome({ children }) {
  return (
    <>
      <main className="text-center absolute top-[30%] left-1/2 -translate-x-1/2 translate-y-0 w-full ">
        <h1 className="text-4xl/18  md:text-5xl/18 lg:text-6xl/21 font-normal text-stone-950 font-Allerta ">
          <em>Take beautiful notes,</em>
          <br />
          <em>effortlessly</em>
        </h1>

        {children}
      </main>
    </>
  );
}
export default Welcome;
