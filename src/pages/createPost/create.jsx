import React from 'react'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import "./create.scss";
import { Link } from 'react-router-dom';

const create = () => {
  return (
    <div className='create'>
       <div className="container">
        <div className="top">
         <AddPhotoAlternateOutlinedIcon fontSize='large' className='add'/>
        <h1>Create post</h1>
        </div>
        <div className="caption">
            <h2>Caption</h2>
            <textarea className='area'/>
        </div>
        <div className="photos">
            <h2>Add photos</h2>
            <div className="pics">
                {/* <input type='file' id='file' accept='image/*'/> */}
            </div>
            
        </div>
        <div className="btns">
          <Link to={'/page'} >
            <button style={{backgroundColor:"lightgray",color:'black'}}>Cancel</button>
          </Link>
            <button>CreatePost</button>
        </div>
       </div>
        
    </div>
  )
}

export default create