import React from 'react'
import {Routes , Route} from "react-router-dom"
import Student_list from "./Student_list.jsx"
import Student_update_data from "./Student_update_data.jsx"

const AllRoute = ({data,Addstudent}) => {
  return (
       <>
        <Routes>
              <Route exact path="/" element={<Student_list data={data} />} />
              <Route exact path="/Edit_student" element={<Student_update_data Addstudent={Addstudent}/>} />
         </Routes>

       </>
    )
}

export default AllRoute