'use client';
import React, { useState } from 'react'
import {CldUploadWidget, CldImage} from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
  return (
		<>
        {publicId && <CldImage src={publicId} width={270} height={180} alt='Image'/>}
			<CldUploadWidget uploadPreset="rp6qncz3"
            options={{
                sources: ['local'],
                multiple: false,
            }}
                onSuccess={(result, widget) => {
                    console.log("onSuccess", result);
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}
                onError={(error, widget) => {
                    
                    console.log("onSuccess", error);
                }}
            >
				{({ open }) => {
					return <button onClick={() => open()} className='btn btn-primary'>Upload</button>;
				}}
			</CldUploadWidget>
		</>
	);
}

export default UploadPage