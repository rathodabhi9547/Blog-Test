import React from "react";
import {Card,Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Userprofile() {

  //get userObj from redux
  let {userObj}=useSelector(state=>state.user);

  const navigate=useNavigate()

  return (
    <Card style={{ width: "18rem" }} className='mx-auto mt-5'>
      <Card.Img variant="top" src={userObj.profileImg} />
      <Card.Body>
        <Card.Title>{userObj.username}</Card.Title>
        <Card.Text>
         {userObj.email}
        </Card.Text>
        <Card.Text>
         {userObj.address}
        </Card.Text>
        <Button className="btn" onClick={()=>navigate('/History')}>Search</Button>
      </Card.Body>
    </Card>
  );
}

export default Userprofile;