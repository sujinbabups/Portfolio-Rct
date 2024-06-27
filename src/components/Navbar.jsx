import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
    <nav className="">
        <ul className="flex flex-row float-right p-[20px] pt-[23px] ">
            <li><a className="hover:text-blue-800 transition ease-in-out delay-150" href="#home">Home</a></li>
            <li><a className="pl-[25px] hover:text-white-800 transition ease-in-out delay-150" href="#edu">Education</a></li>
            <li><a className="pl-[25px] hover:text-white-800 transition ease-in-out delay-150" href="#skill">Skills</a></li>
            <li><a className="pl-[25px] hover:text-white-800 transition ease-in-out delay-150" href="#pro">Projects</a></li>
            <li><a className="pl-[25px] hover:text-white-800 transition ease-in-out delay-150" href="#cnt">Contact</a></li>
        </ul>
    </nav>
</div>
    </>
  )
}

export default Navbar