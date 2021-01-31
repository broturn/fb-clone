import React, { useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                // key={id}
                profilePic= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I2CzIVQOTVeXvUrg2Ioq1GaYuVHGLTTnyg&usqp=CAU"
                message= "Wow this works"
                timestamp="Time is a timestamp"
                username="Brodie"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I2CzIVQOTVeXvUrg2Ioq1GaYuVHGLTTnyg&usqp=CAU"
            />
            <Post 
                // key={id}
                profilePic= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I2CzIVQOTVeXvUrg2Ioq1GaYuVHGLTTnyg&usqp=CAU"
                message= "Wow this works"
                timestamp="Time is a timestamp"
                username="Brodie"
                image=""
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
