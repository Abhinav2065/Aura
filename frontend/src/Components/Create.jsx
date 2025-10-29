import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/Create.css'

const Create = () => {

    const [create, setCreate] = useState(false);


    const toggleCreate = () => {
        setCreate(!create);

    }

  return (
    <div>
        <div className="create">
            <Link onClick={toggleCreate} ><span className="plus-icon">+</span>Create</Link>
        </div>

        <div className="create-content">
            <p>This is a test text, please work!!</p>
        </div>

    </div>
  )
}

export default Create