import React, { useEffect, useState } from 'react'


const UserAction = () => {
  const [image, setImage] = useState(null);
  const [data,setData] = useState([])

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      await fetch('http://localhost:4000/api/users/upload', {
        method: 'POST',
        body: formData
      });
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

const fetchimg = async ()=>{
try {
  const data = await fetch('http://localhost:4000/api/users/imgs')
  const res = await data.json()
  console.log(res)
  setData(res)

} catch (error) {
  console.log(error)
}
 
  
}

useEffect(()=>{
fetchimg()
},[])



  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>
      {data.map((i)=>{
        return(
          <img key={i._id} src={`http://localhost:4000/${i.img}`} alt={i._id} />
          )
        
      })}
     
    </div>
    
  );
}

export default UserAction