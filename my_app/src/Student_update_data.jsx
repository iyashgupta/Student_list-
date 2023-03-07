import React, { useState } from 'react'
import "./Student_update_data.css"

const obj={
  student_name:"",
  Email:"",
  Phone:"",
  Marks:"",
  Result:""
}
const Student_update_data = ({Addstudent}) => {
  const [studentDetails,setstudentDetails]=useState(obj)

  
  const student_data_submitted=(e)=>{
    e.preventDefault()
     
    if(studentDetails.student_name === "" || studentDetails.Email === "" ||  studentDetails.Marks === "" || studentDetails.Phone === ""){
      return alert("All Input Must Be filled") 
    }    
    
    if(studentDetails.Phone !== ""){
    let string=studentDetails.Phone.toString();
           if(string.length !== 10){
            return alert("Mobile Number Must Be Of 10 Number")
           } 
    }
    if(studentDetails.student_name !== ""){
      const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
      console.log(pattern.test(studentDetails.student_name))

    if(pattern.test(studentDetails.student_name) !== true){
      return alert("Enter your Full Name")
    }
    }

    Addstudent(studentDetails) 
    setstudentDetails(obj) 
    alert("data submit") 
  }
 
    const handle_form=(e)=>{
      const {name,value}=e.target
       setstudentDetails({...studentDetails,[name]:value})
      }
  return (
      <> 
      <div>
      <form onSubmit={student_data_submitted}>
            <input type="text" value={studentDetails.student_name} onChange={handle_form} name="student_name" placeholder="Enter Name"/>

            <input type="email" value={studentDetails.Email} name="Email" onChange={handle_form}placeholder="Enter Email"/>

            <input type="number" value={studentDetails.Phone}  name="Phone" onChange={handle_form} placeholder="Enter Number" />

            <input type="number" value={studentDetails.Marks} min="0" max="100" name="Marks" onChange={handle_form}placeholder="Enter Marks"/>

            <input type="text" hidden value={studentDetails.Result} name="Result" onChange={handle_form} placeholder="Enter Result" />
            
            <center><input type="submit" value="Add Student"/></center>
                   
      </form>
      </div>
      </>
  )
}

export default Student_update_data