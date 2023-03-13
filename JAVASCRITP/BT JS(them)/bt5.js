var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` is the function you'll define
function checkUsersValid(goodUsers){
    return function alludervald(submituser){
        return submituser.every(function(submituser){
            return goodUsers.some(function(goodUsers){
                return submituser.id === submituser.id;
            });
        });
    };
}
var testAllValid = checkUsersValid(goodUsers);
// => true

testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]);
// => false
console.log(testAllValid([{ id: 2 }, { id: 1 }]))

