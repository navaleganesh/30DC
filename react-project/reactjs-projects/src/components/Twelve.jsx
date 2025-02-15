import React, { useState } from 'react'

const Twelve = () => {

    const [file, setFile] = useState(null)

    const handleFile = (e) => {

        const fileAccept = e.target.files[0]
        setFile(fileAccept)

    }
    return (
        <div>
            <input type="file" accept='image/*' onChange={handleFile} />
            {file && <img src={URL.createObjectURL(file)} alt='Uploaded' />}
        </div>
      )
    }

export default Twelve