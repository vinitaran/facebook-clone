import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideoIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue(); 

const [input, setInput] = useState('');
const [imageUrl, setImageUrl] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    //some clever db stuff

    db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,

    })

    setInput("");
    setImageUrl("");
};

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    className="MessageSender_input" placeholder={ `What's on your mind, ${user.displayName}? ` } type="text" />
                    <input 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Paste URL (Optional)" />
                    <button onClick= { handleSubmit } type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoIcon style = {{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style = {{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style = {{ color: "yellow"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>           
        </div>
    )
}

export default MessageSender;
