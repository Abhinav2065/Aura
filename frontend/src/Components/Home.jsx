import React from 'react'
import aura from '/aura.png'
import home from '/home-logo.png'
import explore from '/explore.png'
import search from '/search.png'
import message from '/message.png'
import notification from '/notification.png'
import like from '/like.png'
import '../style/Home.css'

const Home = () => {

    const generateSuggestion = () => {
        const people = [];

        const personCount = 20;


        for(let i = 0; i < personCount; i++) {
            people.push(
                <div className="person">
                    <div className="pfp"> </div>
                    <div className="username">Username {i+1}</div>
                </div>
            );

        }

        return people;
    }

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
                                <li><img src={like} className='like-img' alt="" />Like</li>
                                <li>Comment</li>
                                <li>Share</li>
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
        <div className="home">

            {/* Side Bar Section  */}
            <div className="sidebar">
                
                <div className="logo">
                    <img src={aura} alt="Logo" className='logo-img'/>
                </div>

                <ul>
                    <li><img src={home} alt="" className='logo-img-bar'/> Home</li>
                    <li><img src={explore} alt="" className='logo-img-bar'/>Explore</li>
                    <li><img src={search} alt="" className='logo-img-bar'/>Search</li>
                    <li><img src={message} alt="" className='logo-img-bar'/>Messages</li>
                    <li><img src={notification} alt="" className='logo-img-bar' />Notifications</li>
                    <li><span className='plus-icon'>+ </span> Create</li>
                    <li>Profile</li>
                </ul>
            </div>

            {/* Suggestion Section  */}
            <div className="suggestion">
                <div className="people">
                    {generateSuggestion()}
                </div>
            </div>

            {/* Memories Section */}

            <div className="memories">
                {generateMemories()}
            </div>


        </div>
    </div>
  )
}

export default Home