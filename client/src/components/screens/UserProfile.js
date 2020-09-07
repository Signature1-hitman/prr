import React,{useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
const Profile =()=>{
    const [mypics,setPics] = useState([])
const{state,dispatch}=useContext(UserContext)
const {userid} = useParams()
    useEffect(()=>{
      console.log(userid)
        fetch(`/user/${userid}`,{

            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
         console.log(result)
        })
    },[])

     return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style ={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
<div>
    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
    src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    />
</div>
<div>
    <h4>
      {state?state.name:"loading"}
    </h4>
    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
        <h6> 6.7k post</h6>
        <h6> 2.3m followers</h6>
        <h6>568 following</h6>
    </div>

</div>

            </div>
            <div className="gallery">
{
    mypics.map(item=>{
        return(
<img key className="item" src={item.photo} alt={item.title} />
        )
    })
}




            </div>
        </div>
     )
}
export default Profile