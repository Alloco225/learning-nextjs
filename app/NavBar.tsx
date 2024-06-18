'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	const {status, data: session} = useSession();

	
	return <nav className="flex justify-between p-5 bg-slate-200">
		<Link href="/">Nextjs app</Link>
		<ul className="flex gap-3">
			<Link href="/users">Users</Link>
			{ status === 'loading' && <div className="">Loading...</div>}
			{ status === 'authenticated' && <div>{session.user!.name}</div>}
			{ status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
		</ul>
	</nav>;
};

export default NavBar;
