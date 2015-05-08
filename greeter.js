function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Jack", lastname: "Bower" };
document.body.innerHTML = greeter(user);
