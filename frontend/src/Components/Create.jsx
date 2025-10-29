import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/Create.css'

const Create = () => {

    const [create, setCreate] = useState(false);


    const toggleCreate = () => {
        setCreate(!create);
    }

    const closeCreate = () => {
        setCreate(false);
    }

  return (
    <div>
        <div className="create">
            <Link onClick={toggleCreate} ><span className="plus-icon">+</span>Create</Link>
        </div>

        {create && (
        <div className="create-overlay">
            <div className="background-overlay"></div>
                <div className="create-modal">
                    <button onClick={closeCreate} className='close-btn'>x</button>
                    <div className="modal-content">
                        <h3>Create a new post</h3>
                        <form action="">
                            <input type="file" name="file" id="file" className='file'/>
                        </form>
                    </div>
                </div>
        </div>
        
        )}

    </div>
  )
}

export default Create