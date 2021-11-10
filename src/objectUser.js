export function objectUser() {
	const user = {
		name: "John",
	};
	const age = +prompt("Enter user age");
	user.old = age;
	const admin = {...user, role: "admin"};
	const {name, old, role} = admin;
	return `${name} ${old} ${role}`;
}