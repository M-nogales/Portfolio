const NavContent = ({content}) => {
  // nombre del data no del object
  console.log(content);
  return (
      content.text.map((text, index) => (
      <a key={index} href='{content.link[index]}' className='text-textForeground font-bold'>
        {text}
      </a>
    ))
  )
}

export default NavContent