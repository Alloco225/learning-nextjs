import React from 'react'

interface Props {
    params: {id: any, photoId: any}
}

const PhotosPage = ({params: {id, photoId}} : Props) => {
  return (
    <div>User {id} photo {photoId}</div>
  )
}

export default PhotosPage