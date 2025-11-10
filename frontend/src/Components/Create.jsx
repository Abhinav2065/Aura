import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/Create.css'

const Create = () => {

    const [create, setCreate] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [captions, setCaptions] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');


    const toggleCreate = () => {
        setCreate(!create);

        if (!create) {
            setSelectedFiles(null);
            setCaptions(null);
            // Add other stuff like captions and other shits later
        }
    }

    const closeCreate = () => {
        setCreate(false);
        setSelectedFiles(null);
        setCaptions(null);

    }

    const handleFileSubmite = (e) => {
        const file = e.target.files[0];

        if (file) {
            
            const validImageTypes = ['image/jpeg','image/png','image/webp'];
            const maxsize = 10 * 1024 * 1024;
            
            if (!validImageTypes.includes(file.type)) {
                alert("Send a Valid Image Type (jpeg, png, webp");
                return;
            }


            if (file.size > maxsize) {
                alert("You file's size exceeds out 10 MB Limit, Please Upload a Smaller Image or Scale Down your Image");
                return;
            }

            setSelectedFiles(file);
        }
    }


    const handleCaptionChange = (e) => {
        setCaptions(e.target.value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!selectedFiles) {
            setUploadStatus("Please Select a File.");
            return;
        }


        setIsUploading(true);
        setUploadStatus("Uploading..")

        try {

        const formData = new FormData();
        formData.append('image', selectedFiles);
        formData.append('caption', captions);


        const tokens = localStorage.getItem('token');


        const response = await fetch("http://localhost:8800/api/posts/create", {
            method:'POST',
            headers: {
                'Authorization' : `${tokens}`

            },
            body: formData
        })





        let data;



        if (response.ok) {
            setUploadStatus("Sucess!");
            setTimeout(() => {
                closeCreate();
            }, 1500);
        }

        else {
            setUploadStatus(data.message || "Upload Failed");


        }
    }
    catch (error) {
        console.log('Upload Error', error);

        setUploadStatus("Check Console(Network Error)");


    }
    finally {
        setIsUploading(false);
    }
    }
    

  return (
    <div>
        <div className="create">
            <Link onClick={toggleCreate} ><span className="plus-icon">+</span>Create</Link>
        </div>

        {create && (
        <div className="create-overlay" >
            <div className="background-overlay"></div>
                <div className="create-modal">
                    <button onClick={closeCreate} className='close-btn'>x</button>
                    <div className="modal-content">
                        <h3>Create a new post</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="file" className='file-label'>

                                {selectedFiles?(
                                    <img 
                                        src={URL.createObjectURL(selectedFiles)} 
                                        alt="Preview"
                                        className='image-preview'
                                    />
                                ):(
                                    <div className="file-placeholder">
                                        <p>Click Me to Select An Image</p>
                                    </div>
                                )
                            }

                            </label>

                            <input type="file" name="file" id="file" className='file-input' accept='image/*' onChange={handleFileSubmite}/>
                        


                        <div className="caption-section">
                            <textarea placeholder='Enter Your Caption.' value={captions} onChange={handleCaptionChange} className='caption-input' rows="5" ></textarea>
                        </div>

                        {uploadStatus && <p>{uploadStatus}</p>}

                        


                        <button type="submit" className='upload-btn' disabled={!selectedFiles || isUploading}   >

                            {isUploading? 'Uploading...': "Share Post"}

                        </button>

                        </form>


                    </div>
                </div>
        </div>
        
        )}

    </div>
  )
}

export default Create