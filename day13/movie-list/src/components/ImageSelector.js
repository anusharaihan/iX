import React, { useRef, useState } from "react";

export default function ImageSelector({
    title,
    onFileChange
}) {

  const [fileContent, setFileContent] = useState('');
  const inputRef = useRef(null);


  function onFileSelected(e) {
    let file = null;
    if (e.target.files.length) {
      file =e.target.files[0];

      const reader = new FileReader();

      reader.onLoad = (res) => {
        //the file has been read successfuly
        setFileContent(res.target.result);
      };
      reader.readAsDataURL(file);
    } 
      onFileChange(file);
    }


  return (
    <div className="mb-3">
      <label className="form-label">
        {title}
      </label>
      <input
        ref={inputRef}
        onChange={onFileSelected}
        type="file"
        className="form-control"
        style = {{display: 'none'}}
      />

        {
            fileContent ? 
            <div classname='text-center mb-3'>
              <img style={{
                width: '200px',
                height: '300px',
                'objectFit': 'cover',
              }} src={fileContent} alt='file content' />
            </div>
            :
            <></>
        }

        <div className='text-center'>
            <button onClick={() => {inputRef.current.click()}} className='btn btn-success'>
                Select Image
            </button>
        </div>
    </div>
  )
}
