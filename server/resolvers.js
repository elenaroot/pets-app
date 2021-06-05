const db = require('./db');

const Query = {
    user: (root, { id }) => db.users.get(id),
    users: () => db.users.list(),
    petOwners: () => db.pets

};

const Mutation = {
    addUser: (root, { input, petInput }) => {

        if (db.users.get(input.id)) {
            throw new Error(`User with ${input.id} id already exists.`);
        }
        const newUserId = db.users.create(input);

        if (petInput) {
            var petUser = {}
            petUser.userId = newUserId;
            petUser.pets = petInput
            db.pets.push(petUser)
        };
        return db.users.get(newUserId);
    },

    deleteUser: (root, { id }) => {
        const userToDelete = db.users.get(id);
        if (userToDelete === undefined) {
            throw new Error(`User with ${id} id is not found.`);
        };
        db.users.delete(id)
        petOwnertoDeleteIdx = db.pets.findIndex(({ userId }) => userId === id);
        if (petOwnertoDeleteIdx) {
            db.pets.splice(petOwnertoDeleteIdx, 1);
        };
        return userToDelete;
    },

    updateUser: (root, { id, data, petData, toReplace = true }) => {
        const userToUpdate = db.users.get(id);
        if (!userToUpdate) {
            throw new Error(`User with ${id} id is not found.`);
        }
        if (typeof data.name === 'string') {
            db.users.update(userToUpdate, userToUpdate.name = data.name);
        }
        if (typeof data.lastName === 'string') {
            db.users.update(userToUpdate, userToUpdate.lastName = data.lastName);
        }
        console.log(petData)
        if (petData) {

            var petUser = db.pets.find(({ userId }) => userId === id);
            if (!petUser) {

                var petUser = {}
                petUser.userId = id;
                petUser.pets = petData
                db.pets.push(petUser)

            }
            else {
                var pets = {};
                pets = petUser.pets;

                if (toReplace) { pets = petData }
                else {
                    pets = pets.concat(petData)
                    db.pets.find(({ userId }) => userId === id).pets = pets;

                }

            }
        }

        return userToUpdate;
    }
};
const User = {
    pets: (user) => (db.pets.find(({ userId }) => userId === user.id) && "pets" in db.pets.find(({ userId }) => userId === user.id)) ? (db.pets.find(({ userId }) => userId === user.id).pets) : null
};

module.exports = { Query, Mutation, User };
