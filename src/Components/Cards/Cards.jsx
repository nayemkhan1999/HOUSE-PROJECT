import { useEffect, useState } from "react";
import AllCard from "../AllCard/AllCard";

const Cards = () => {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("/public/fake-data.json")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        })
    },[])

  return (
   <div className="container mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {
        user.map((card)=><AllCard key={card.id} card={card}></AllCard>)
     }
    </div>
   </div>
  )
}

export default Cards
