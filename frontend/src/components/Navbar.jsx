import NavContent from "./NavContent.jsx"
const Navbar = () => {
  const content = {
    text: ["Home","Skills","Projects","About me"],
    link: ["google.com"]
  }
  console.log("content nav"+JSON.stringify(content));
  return (
    <head className='w-full h-12 bg-primary-950 flex items-center justify-around'>
      <NavContent content = {content}></NavContent>
    </head>

  )
}

export default Navbar