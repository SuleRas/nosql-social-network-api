const router = require("express").Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require("../../controller/userController");

//set GET-POST api/users

router.route("/").get(getAllUsers).post(createUser);

// set GET by one id, update , and remove /api/users/:id

router.route("/:id").get(getUserById).put(updateUser).delete(removeUser);

// Add and delete a friend

router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
