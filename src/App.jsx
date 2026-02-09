
// import React, { useState } from 'react'
// import Button from './components/Button'
// import Navbar from './components/Navbar'

// const App = () => {

//   let designObj={color:"red", backgroundColor:"blue"}
//   let nameOfUser = "Pampam"

//   const pressMe=()=>{
//     // alert(`this button has been pressed by `)
//    setnum(num+1)
//   }

//   // const [first, setfirst] = useState(second)

//   const [num, setnum] = useState(0)
//   const [name, setname] = useState('Pampam')
//   return (
//     <>
//     <Navbar/>
//       <h1 style={designObj}>My first React app</h1>



//       <h1 className='bg-primary text-warning'>{nameOfUser}</h1>

//       <button  className='btn btn-dark' onClick={()=>setnum(num+1)}>
//        {num}
//       </button>


//       <h1>{name}</h1>


//       <button className='btn btn-dark' onClick={()=>setname("Josh")}>
//         click me to change name
//       </button>
//     </>
//   )
// }

// export default App

// 

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route index element={<Home/>}/>

      <Route path='/about' element={<About/>}/>

      <Route path='/contact' element={<Contact/>}/>

      {/* Programmatic redirection */}
      <Route path='/sp-contact' element={<Navigate to={'/contact'}/>}/> 

      {/* Dynamic routes */}
      <Route path='/profile/:username' element={<Profile/>}/>

      {/* nested/children routes */}

      {/* Wildcard routing for 404 page */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>


    </>
  )
}

export default App