/*
  1 - Get an user
  2 - Get user's number phone from his id
  3 - Get user's address by id
 */

// import a node.js modulo to convert a use callback function to promise
const util = require('util');
const getUserAddressAsync = util.promisify(getUserAddress);

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

function getUserPhone(id) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone: '1199003',
        ddd: 22
      });
    }, 2000);
  });
}

function getUserAddress(id, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'dummies',
      number: 0
    });
  });
}

// 1 - add async word -> automatically it return a promise
main();
async function main() {
  try {
    console.time('measure-promise');
    const user = await getUser();
    //const phone = await getUserPhone(user.id);
    //const address = await getUserAddressAsync(user.id);
    
    const result = await Promise.all([
      getUserPhone(user.id),
      getUserAddressAsync(user.id)
    ]);

    const phone = result[0];
    const address = result[1];

    console.log(`
      Name: ${user.name}
      Address: ${address.street}, ${address.number}
      Phone: (${phone.ddd}) ${phone.phone}
    `);
    console.timeEnd('measure-promise');
  } catch (error) {
    console.error('Not good', error);
  }
}

// to handle success use .then function
// to handle errors use .catch function
/* const userPromise = getUser();
userPromise
  .then(function (user) {
    return getUserPhone(user.id)
      .then(function resolvePhone(result) {
        return {
          user: {
            name: user.name,
            id: user.id
          },
          phone: result
        }
      });
  })
  .then(function (result) {
    const address = getUserAddressAsync(result.user.id);
    return address.then(function resolveAddress(address) {
      return {
        user: result.user,
        phone: result.phone,
        address: address
      }
    });
  })
  .then(function (result) {
    console.log(`
      Name: ${result.user.name}
      Address: ${result.address.street}, ${result.address.number}
      Phone: (${result.phone.ddd}) ${result.phone.phone}
    `);
  })
  .catch(function (error) {
    console.error('Not good', error);
  }) */

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