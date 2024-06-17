import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
	params: { slug: string[] };
	searchParams: { orderBy: string };
}

const UserPage = async ({ params, searchParams }: Props) => {
	return (
		<div>
			<h1>Users</h1>
			<Link href="/users/new" className="btn">
				New
			</Link>
			<Suspense fallback={<p>Loading...</p>}>
				<UserTable orderBy={searchParams.orderBy}></UserTable>
			</Suspense>
		</div>
	);
};

export default UserPage;
