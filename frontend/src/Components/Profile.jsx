import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import like from '/like.png'
import comment from '/comment.png'
import share from '/share.png'
import Sidebar from './Sidebar'
import '../style/Profile.css'


const Profile = () => {

    const { username } = useParams();
    const [thisUser, setThisUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        if (thisUser && thisUser.posts) {
            thisUser.posts.forEach((post) => {
                if (post.picture) {
                    const img = new Image();
                    img.src = `http://localhost:8800/uploads/${post.picture}`;
                    img.onload = () => {
                        setLoadedImages(prev => ({
                            ...prev,
                            [post.picture]: true
                        }));
                    };
                }
            })
        }
    }, [thisUser]);

    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8800/api/u/${username}`);

                if (!response.ok) {
                    throw new Error("User Not Found");
                }
                const userData = await response.json();
                setThisUser(userData);
                setError(null);

            }
            catch (err) {
                setError(err.message);
                setThisUser(null);
            }
            finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [username]);

    if (loading) {
        return (
            <div className="profile">
                <Sidebar/>
                <div className="loading">Loading profile...</div>
            </div>
        );
    }

     if (error) {
        return (
            <div className="profile">
                <Sidebar/>
                <div className="error">Error: {error}</div>
            </div>
        );
    }


    const generateMemories = () => {
        if (!thisUser || !thisUser.posts || thisUser.posts.length == 0) {
            return <div>No posts Yet</div>
        }

        const reversedPosts = [...thisUser.posts].reverse(); 


        return reversedPosts.map((post, index) =>(
                <div className="post" key={post._id || index}>
                    <div className="user">
                        <div className="post-pfp"></div>
                        <div className="username-post">{thisUser.username}</div>
                    </div>
                    <div className="time">{index+1} day ago</div>

                    <div className="content">
                        {post.picture && (
                            <img src={`http://localhost:8800/uploads/${post.picture}`}
                                alt = "post"
                                className='content-img'
                                crossOrigin='anonymous'
                                onLoad={()=> console.log(`Image Loaded ${post.picture}`)}
                                onError={(e) => console.log(`Image Failed to Load ${post.picture}`)}
                            />
                        )}
                        <div className="content-text">{post.texts || ""}</div>
                    </div> 

                    <div className="stats">
                        <div className="interactions">
                            <ul>
                                <li><img src={like} className='like-img' alt="" /></li>
                                <li><img src={comment} className='like-img' alt="" /></li>
                                <li><img src={share} className='like-img' alt="" /></li>
                            </ul>
                        </div>
                        <div className="post-stats">
                            <span>{post.likes || 0} likes</span>
                            <span>{post.comments?.length || 0} comments</span>
                        </div>

                    </div>
                </div>
        ));

    }


  return (
    <div>
        <div className="profile">
            
            <Sidebar/>
            
            <div className="profile-info">
                <div className="pfp"></div>
                <div className="user-info">
                    <h2 className="username-profile">{thisUser.username}</h2>
                    <div className="profile-stats">
                        <p className="posts">{thisUser.numOfPosts || 0} Posts</p>
                        <p className="followers">{thisUser.followers?.length || 0} Followers</p>
                        <p className="following">{thisUser.following?.length || 0} Following</p>
                    </div>

                    <div className="update-profile">
                        <button className='edit-btn'>Edit Profile</button>
                    </div>

                </div>
            </div>

            <div className="memories-profile">
                {generateMemories()}
            </div>

        </div>
    </div>
  )
}

export default Profile