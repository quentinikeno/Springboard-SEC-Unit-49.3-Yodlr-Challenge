// const axios = require("axios");

async function getUsers() {
	try {
		const response = await axios.get("http://localhost:3000/users");
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

function addDataToTable(data) {
	for (let user of data) {
		const { id, email, firstName, lastName, state } = user;
		const userRow = `
        <tr>
            <td>${id}</td>
            <td>${email}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${state}</td>
        </tr>
    `;
		$("#data").append(userRow);
	}
}

$(document).ready(async function () {
	const data = await getUsers();
	addDataToTable(data);
});
