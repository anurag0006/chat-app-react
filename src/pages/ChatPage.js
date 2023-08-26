import React, { useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("/api/users/");
            console.log(res.data);
        }
        getData();
    }, [])


    return (
        <div>chatPage</div>
    )
}

export default ChatPage