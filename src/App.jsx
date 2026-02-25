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

//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>

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

// import React, { useState } from 'react'
// import Button from './components/Button'
// import AddUser from './components/AddUser'
// import DisplayUser from './components/DisplayUser'

// const App = () => {

//   const [allUsers, setallUsers] = useState([])

//   // const seeValue=(event)=>{
//   //   console.log(event.target.value);
//   //   setfirstName(event.target.value)
//   // }

//   const submitUser=(user)=>{
//     // console.log('heelo');
//     // let user = {
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   profilePicture
//     // }
//     console.log(user);

//     let fruits = ['mango', 'agbalumo', 'orange']
//     let newFruits = [...fruits, 'Grape']
//     let newAllUsers= [...allUsers,user ]
//     setallUsers(newAllUsers)
//   }

//   const deleteUser=(index)=>{
//     let newAllUsers= [...allUsers]
//     newAllUsers.splice(index, 1)
//     setallUsers(newAllUsers)
//   }

//   const editUser=(index, user)=>{
//     // let user = {
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   profilePicture
//     // }
//     let newAllUsers= [...allUsers]
//     newAllUsers.splice(index, 1, user)
//     setallUsers(newAllUsers)
//   }

//   const shout=(name)=>{
//     alert(`shoutinggggggggggggggg ${name}`)
//   }
//   return (
//     <>

//     <Button title="Stop" color="btn-danger" func={shout}/>
//     <Button title="Go" color="btn-success"/>
//     <Button title="Get ready" color="btn-warning"/>

//     <br />

//   <AddUser submitUser={submitUser}/>

//    <hr />

//       <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>

//     </>
//   )
// }

// export default App

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Fetch from "./pages/Fetch";
import Formikk from "./pages/Formikk";
import LoginPage from "./pages/Login";
import AuthGuard from "./auth/AuthGuard";
import Cookies from "universal-cookie";
import AddProductPage from "./pages/AddProduct";

const App = () => {
  const cookies = new Cookies();
  // console.log(cookies.get("token"));

  const isAuth = cookies.get("token");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route index element={<Home />} />

        <Route element={<AuthGuard isAuth={isAuth} />}>
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/formikk" element={<Formikk />} />
          <Route path="/addproduct" element={<AddProductPage />} />

          {/* programmatic redirection */}
          <Route path="/sp-contact" element={<Navigate to={"/contact"} />} />

          {/* dynamic routes */}
          <Route path="/profile/:username" element={<Profile />} />
        </Route>

        {/* nested/children routes */}

        {/* wildcard routing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;