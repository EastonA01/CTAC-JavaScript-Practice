// Dataset
const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// Find user named 'Jose'
const userNameCheck = users.find(user => user.firstName == 'Jose');
// Array of all premium members
const premiumCheck = users.filter(user => user.isPremiumMember);
// Array of all last names
const nameArray = users.map(user => user.lastName);
// Array of full names who have logged in more than 10 times
const loginTen = users.filter(user => user.logins >= 10).map(user => user.firstName + " " + user.lastName);
// Total number of logins for entire users list
const totalLogins = users.reduce(function(initial, total){
    return initial + total.logins;
}, 0);