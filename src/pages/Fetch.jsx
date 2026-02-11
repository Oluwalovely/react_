import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {
    const [number, setnumber] = useState(0)
    const [name, setname] = useState('Emmie')
    const [allUsers, setallUsers] = useState([])

    //useEffect is a react hook that monitors components lifecycle, and it takes in a callback function and a dependency array. The callback function is executed when the component mounts, and the dependency array is used to specify when the callback function should be executed again. If the dependency array is empty, the callback function will only be executed once when the component mounts. If the dependency array has values, the callback function will be executed every time any of the values in the dependency array change. The useEffect hook also returns a cleanup function that is executed when the component unmounts or when the dependencies change.


    useEffect(() => {
        console.log("use effect ran");

        const makeRequest = async () => {
            try {
                let data = await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(data.data);
                setallUsers(data.data)

            } catch (error) {
                console.log(error);

            }
        }

        makeRequest()

    }, [name])

    //without dependency array, use effect runs onload and when any state changes in the component it runs again, with an empty dependency array it runs only onload, with a dependency array it runs onload and when any of the dependencies change.

    return (
        <>

            <button className='btn btn-dark' onClick={() => setnumber(number + 1)}>
                {number}
            </button>


            <button className='btn btn-success' onClick={() => setname("Pampam")}>
                {name}
            </button>

            <div className='container'>
                <div className='d-flex flex-wrap gap-3 mt-3 justify-content-start align-items-start'>
                    {
                        allUsers.map((user,index) =>
                            <div className="card" style={{width: "18rem", height: "25rem"}} key={index}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title"><strong>Name:</strong> {user.name}</h5>
                        <p className="card-text"><strong>Username:</strong> {user.username}</p>
                        <p className="card-text"><strong>Email:</strong> {user.email}</p>
                        <p className="card-text"><strong>Phone Number:</strong> {user.phone}</p>
                        <p className="card-text"><strong>Address:</strong> {user.address.street+' '+user.address.suite+' '+user.address.city}</p>
                        <p className="card-text"><strong>Website:</strong> {user.website}</p>
                        <p className="card-text"><strong>Company Name:</strong> {user.company.name}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                        )
                    }
                </div>
            </div>
            
            
        </>
    )
}

export default Fetch