const router = require("express").Router();
const {
  createThought,
  getSingleThought,
  getThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reaction").post(addReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
