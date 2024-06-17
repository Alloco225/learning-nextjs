import Link from "next/link";
import React from "react";

const NavBar = () => {
	return <nav className="flex justify-between p-5 bg-slate-200">
		<Link href="/">Nextjs app</Link>
		<ul>
			<Link href="/users">Users</Link>
		</ul>
	</nav>;
};

export default NavBar;
