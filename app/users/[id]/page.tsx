import { notFound } from "next/navigation";
import React from "react";

interface UserDetailsPageProps {
	params: { id: any };
}

const UserDetailsPage = ({ params: { id } }: UserDetailsPageProps) => {
	if (id > 10) notFound();
	return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
