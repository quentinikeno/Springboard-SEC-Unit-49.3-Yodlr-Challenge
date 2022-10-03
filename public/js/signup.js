async function postData(data) {
	const response = await axios.post("http://localhost:3000/users", data);
	if (response) {
		window.location = "../admin.html";
	}
}
async function handleSubmit(event) {
	event.preventDefault();
	const values = {};
	$("#signUp")
		.serializeArray()
		.forEach(({ name, value }) => {
			values[name] = value;
		});
	await postData(values);
}

$("#signUp").submit(handleSubmit);
