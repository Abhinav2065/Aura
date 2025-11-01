import React from 'react'
import like from '/like.png'
import comment from '/comment.png'
import share from '/share.png'
import Sidebar from './Sidebar'
import '../style/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {



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
        <div className="home">

            <Sidebar/>

            {/* Suggestion Section  */}
            <div className="suggestion">
                <div className="people">
                                    <div className="person">
                    <Link to="/u/test">
                    <div className="pfp"> </div>
                    <div className="username">Test</div>
                    </Link>
                </div>
                <div className="person">
                    <Link to='/u/abhinav'>
                    <div className="pfp"> </div>
                    <div className="username">Abhinav</div>
                    </Link>
                </div>
                <div className="person">
                    <Link to='/u/test123'>
                    <div className="pfp"> </div>
                    <div className="username">Test123</div>
                    </Link>
                </div>
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