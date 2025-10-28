import React from 'react'
import like from '/like.png'
import comment from '/comment.png'
import share from '/share.png'
import Sidebar from './Sidebar'
import '../style/Profile.css'

const Profile = () => {
    const generateMemories = () => {
        const posts = [];

        const postsCount = 100;


        for (let i = 0; i < postsCount; i++) {
            posts.push(
                <div className="post">
                    <div className="user">
                        <div className="post-pfp"></div>
                        <div className="username-post">Username {i+1}</div>
                    </div>
                    <div className="time">{i+1} day ago</div>

                    <div className="content">
                        <div className="content-img"></div>
                        <div className="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis consectetur in ratione sit dolores debitis tempore reprehenderit, ipsa nesciunt voluptatem accusamus laborum hic laudantium doloremque tenetur minus quidem quo placeat fugiat?</div>
                    </div> 

                    <div className="stats">
                        <div className="interactions">
                            <ul>
                                <li><img src={like} className='like-img' alt="" /></li>
                                <li><img src={comment} className='like-img' alt="" /></li>
                                <li><img src={share} className='like-img' alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }

        return posts;
    }


  return (
    <div>
        <div className="profile">
            
            <Sidebar/>
            
            <div className="profile-info">
                <div className="pfp"></div>
                <div className="user-info">
                    <h2 className="username-profile">Username</h2>
                    <div className="profile-stats">
                        <p className="posts">5 Posts</p>
                        <p className="followers">100 Followers</p>
                        <p className="following">101 Following</p>
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