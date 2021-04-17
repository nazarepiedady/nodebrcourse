/*
  1 - Get an user
  2 - Get user's number phone from his id
  3 - Get user's address by id
 */

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Marcos',
      birthDate: new Date()
    })
  }, 1000);
}

function getUserPhone(id, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: '1199003',
      ddd: 22
    });
  }, 2000);
}

function getUserAddress(id) {

}

function resolveUser(error, user) {
  console.log('user', user);
}

getUser(function resolveUser(error, user) {
  if (error) {
    console.log('there is a error in user', error);
    return;
  }

  getUserPhone(user.id, function resolvePhone(error, phone) {
    if (error) {
      console.log('there is a error in phone', error);
      return;
    }
  });
});

//const phone = getUserPhone(user.id);
//console.log('phone', phone);