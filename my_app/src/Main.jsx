import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Main.css"
import Data from "./data.json"
import AllRoute from './AllRoute'

const Main = () => {
  const [initialData,setinitialData]=useState(Data)
 
const Addstudent=(new_student)=>{
  setinitialData([...initialData,new_student])
}
  return (
    <>
        <nav>
      <NavLink to="/"  className={({isActive})=>isActive?  "active":"unactive"
  }>Student List</NavLink>
      <NavLink to="/Edit_student"  className={({isActive})=>isActive? "active":"unactive"
  }>Edit Student</NavLink>
    </nav>
   

     <AllRoute data={initialData} Addstudent={Addstudent} />
    </>
  )
}

export default Main