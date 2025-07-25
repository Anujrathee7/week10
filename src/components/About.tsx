import React from "react";
import { useState,useEffect } from "react";
import "../styles/About.css"

interface user{
    userID: number,
    id: number,
    title: string,
    body: string
}

const About: React.FC = () =>{

    const [users,setUsers] = useState<user[]>([])
    const [visibleCount, setVisibleCount] = useState<number>(12)

    useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data: []= await response.json()

        setUsers(data)
        
    }
    fetchData()
    },[])

    const showMore = ()=>{
        setVisibleCount((prev)=> prev+12)
    }

    return(
        <div>
            <div className="grid-container">
            {users.slice(0,visibleCount).map((user)=>(
                <div key={user.id} className="grid-item">
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                </div>
                
            ))}
            </div>
            {visibleCount < users.length && (
                <div className="show-button">
                <button onClick={showMore}>Show more</button>
                </div>
            )}
        </div>
    )
}

export default About