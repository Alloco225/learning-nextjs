import React from "react";

interface Props {
	error: Error;
	reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
	console.log("ErrorPage", error);
	return <>
		<div>An unexpected error has happend</div>
        <button  onClick={reset} className="btn">Retry</button>
	</>;
};

export default ErrorPage;
