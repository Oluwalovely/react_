
import React, { useState } from 'react'

const AddUser = ({ submitUser }) => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [profilePicture, setprofilePicture] = useState("")
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <div className='d-flex flex-column gap-2 mt-2'>
                        <input className='form-control' type="text" placeholder='first name' onChange={(e) => setfirstName(e.target.value)} />
                        <input className='form-control' type="text" placeholder='last name' onChange={(e) => setlastName(e.target.value)} />
                        <input className='form-control' type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} />
                        <input className='form-control' type="text" placeholder='Profile picture' onChange={(e) => setprofilePicture(e.target.value)} />
                        <button className='btn btn-primary' onClick={() => submitUser({ firstName, lastName, email, profilePicture })}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
