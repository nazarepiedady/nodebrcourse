/*
  1 - Get an user
  2 - Get user's number phone from his id
  3 - Get user's address by id
 */

function getUser() {
  setTimeout(function () {
    return {
      id: 1,
      name: 'Marcos',
      birthDate: new Date()
    }
  }, 1000);
}

function getUserPhone(id) {
  setTimeout(() => {
    return {
      phone: '1199003',
      ddd: 22
    }
  }, 2000);
}

function getUserAddress(id) {

}

const user = getUser();
const phone = getUserPhone(user.id);

console.log('user', user);
console.log('phone', phone);