import NavContent from "./NavContent.jsx";
const Navbar = () => {
  const content = {
    text: ["Home", "Skills", "Projects", "About me"],
    link: ["google.com"],
  };
  console.log("content nav" + JSON.stringify(content));
  return (
    <header className="w-full h-12 bg-primary-950 mb-9">
      <nav className="flex items-center justify-evenly">
        <NavContent content={content}></NavContent>
      </nav>
    </header>
  );
};

export default Navbar;
