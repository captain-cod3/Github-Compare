import React, { useState, useEffect } from 'react';
import Nodes from './Nodes';
import './App.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {


// const [name,setName] = useState('');
// const [userName, setUsername] = useState('');
// const [follower, setFollower] = useState('');
// const [following, setFollowing] = useState('');
// const [avatar, setAvatar] = useState('');
// const [bio, setBio] = useState('');
//const [error, setError] = useState('');
const dispatch = useDispatch();

const setState = ({
    name,login,followers,following,bio,avatar_url,public_repos,url
})=>{

  dispatch({type:"FETCH_DATA",payload:{name,login,followers,following,bio,avatar_url,public_repos}})
 
}

var url='';
const onSubmit=(text)=>{
    console.log(text);
   url = `https://api.github.com/users/${text}`;  
   console.log(url);
   getData();
}
 
 const getData = async()=>{
    console.log("in response")
    
    //  await fetch(url).then(res=>{res.json();
    await axios.get(url).then(res=>{
        // setState(res.data);
        dispatch({ type:"ADD_DATA", payload: res.data})

    })
    


 }

// useEffect(()=>{
// 	getData();
// }
// ,[])

    return (
        <div className="parent">	
            <div className="innerDiv">
                <Nodes input={onSubmit} />
            </div>
        </div>
    )
}

export default App;
