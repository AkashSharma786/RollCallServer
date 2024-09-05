
function isValidEmail(email) {

    return (typeof(email) === 'string' && email.includes('@') &&
                             email.includes('mail.com') && email.length > 5 &&
                              email.length < 30 );
}

function isValidContact(contact) {
    return (typeof(contact) === "number" &&
                          contact >= 1000000000 && contact <= 9999999999 &&
                           contact.toString().length == 10);
}

function isValidLocation(longitude, latitude) {
    return (typeof(longitude) === 'number' &&
                             typeof(latitude) === 'number' &&
                             latitude > 0 && latitude < 90 &&
                             longitude > 0 && longitude < 180);
}

module.exports = {isValidEmail, isValidContact, isValidLocation};