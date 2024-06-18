import React, { CSSProperties } from "react";

import { Body, Container, Html, Link, Preview, Text, Tailwind } from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Tailwind>
				<Body style={body}>
					<Container className="">
						<Text>Hello {name}</Text>
						<Link href="https://amane.dev">Find our link</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

const body: CSSProperties = {};

export default WelcomeTemplate;
