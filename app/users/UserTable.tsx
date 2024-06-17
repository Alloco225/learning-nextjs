import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
	name: string;
	email: string;
}

interface Props {
	orderBy: string;
}

const UserTable = async ({ orderBy }: Props) => {
	// const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
	interface User {
		id: number;
		name: string;
		email: string;
		[key: string]: any; // Add index signature
	}

	const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 } });
	let users: User[] = await res.json();
    console.log("orderBy", orderBy);
	if (orderBy) {
		users = sort(users).asc((u) => u[orderBy]);
	}

	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>Id</th>
					<th>
						<Link href="/users?orderBy=name">Name</Link>
					</th>
					<th>
						<Link href="/users?orderBy=email">Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
