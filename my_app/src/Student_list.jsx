import React, { useState , useEffect } from 'react'
import "./Student_list.css"

const Student_list = ({data}) => {
  const [count,setcount]=useState(1)
  const [studentdata,setstudentdata]=useState(data)
  const [page,setpage]=useState({startingpage:0,endingpage:5})

  const student_limit=()=>{
      const new_data=data.slice(page.startingpage,page.endingpage)
      console.log(new_data)
      setstudentdata(new_data)
  } 

  const incre_pagination=(counter)=>{
      setcount(counter+count)
    setpage({startingpage:page.startingpage+5,endingpage:page.endingpage+5})
  }
  const decre_pagination=(counter)=>{
    setcount(counter+count)
    setpage({startingpage:page.startingpage-5,endingpage:page.endingpage-5})
  }
console.log(Math.ceil(data.length/5)  ,"current data length",data.length)
  useEffect(()=>{
       student_limit()
  },[count])
  return (
    <>
     <div className="next_prev">
   <button onClick={()=>decre_pagination(-1)} disabled={count===1}>prev</button>
     <p>{count}</p>
   <button onClick={()=>incre_pagination(+1)} disabled={count===Math.ceil(data.length/5)}>next</button>  
   </div>

    {
       studentdata.map(({student_name,Email,Phone,Marks})=> 
           <ul>
              <li>{student_name}</li>
              <li>{Email}</li>
              <li>{Phone}</li>
              <li>{Marks}</li>
               <li>{(+Marks>32)?<span className='pass'>Pass</span>:<span className="fail">Fail</span>}</li> 
              </ul> 
       )
    }
    </>
  )
}

export default Student_list