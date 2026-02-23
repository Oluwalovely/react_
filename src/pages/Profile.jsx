import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { changeFirst, changeNameWithSome } from '../redux/appSlice';
import axios from 'axios';

const Profile = () => {
  const [name, setname] = useState('')
  const params = useParams()
  const {username} = params
  const firstName = useSelector((state)=>state.firstName);
  const friends = useSelector((state)=>state.friends)

  

  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/${username}`)
  })

  
  return (
    <div>
        <h1>Profile page of {firstName} with username {username}</h1>

        <h1>Friends: {friends.join(', ')}</h1>

        <input type="text" />
        <button onClick={()=>dispatch(changeNameWithSome())}>Change with some</button>

        <button onClick={()=>dispatch(changeFirst())}>Click to change name</button>

        
    </div>
  )
}

export default Profile