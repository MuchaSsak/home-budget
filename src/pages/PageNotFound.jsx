import NavBar from "../components/NavBar";

function PageNotFound() {
  return (
    <div className="relative min-h-screen">
      <NavBar hasDeleteUser={false} />

      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-5xl font-semibold">Page not found! 😢</h1>
      </div>
    </div>
  );
}

export default PageNotFound;
