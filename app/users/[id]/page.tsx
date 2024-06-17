import React from 'react'


interface UserDetailsPageProps {
    params: {id: any}
}

const UserDetailsPage = ({ params: {id} }: UserDetailsPageProps) => {
  return (
    <div>UserDetailsPage {id}</div>
  )
}

export default UserDetailsPage