/*
  1 - Get an user
  2 - Get user's number phone from his id
  3 - Get user's address by id
 */

function getUser() {
  // when it has any problem -> reject(error)
  // when it has success -> resolve(success)
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        name: 'Marcos',
        birthDate: new Date()
      })
    }, 1000);
  });
}

function getUserPhone(id, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: '1199003',
      ddd: 22
    });
  }, 2000);
}

function getUserAddress(id, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'dummies',
      number: 0
    });
  });
}

// to handle success use .then function
// to handle errors use .catch function

const userPromise = getUser();

userPromise
  .then(function (result) {
    console.log('Result', result);
  })
  .catch(function (error) {
    console.error('Not good', error);
  })

// getUser(function resolveUser(error, user) {
//   if (error) {
//     console.log('there is an error in user', error);
//     return;
//   }

//   getUserPhone(user.id, function resolvePhone(error, phone) {
//     if (error) {
//       console.log('there is an error in phone', error);
//       return;
//     }

//     getUserAddress(user.id, function resolveAddress(error, address) {
//       if (error) {
//         console.log('there is an error in address', error);
//         return;
//       }

//       console.log(`
//         Name: ${user.name},
//         Address: ${address.street}, ${address.number},
//         Phone: (${phone.ddd})${phone.phone}
//       `);
//     });
//   });
// });

//const phone = getUserPhone(user.id);
//console.log('phone', phone);