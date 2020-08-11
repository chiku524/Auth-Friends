import React,{useState, useEffect} from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';

const FriendsList = props =>{
    const [data, setData] = useState([{name:''}]);
    useEffect(()=>{
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res=>{
                console.log(res)
                setData(res.data);
            })
            .catch(err=>{
                console.log(err);
            });
    },[])

 const checkData = () =>{
        console.log(data);
 }

    return(
        <div>
            {data.map(item=>{return(<div className="namer">{item.name}</div>)})}
            <button onClick={checkData}>Check Data</button>

        </div>
    )
}

export default FriendsList;