
function BooksAPI() {
	let json = 	[
		{title:"Huck Finn", author: "Mark Twain"}
		,
		{title:"Jane Eyre", author: "Charlotte Bronte"}
	];
	return (JSON.stringify(json));
}

export default BooksAPI;
