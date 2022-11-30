const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

//set GET-POST api/users

router.route("/").get(getUsers).post(createUser);

// set GET by one id, update , and remove /api/users/:id

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// Add and delete a friend

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
