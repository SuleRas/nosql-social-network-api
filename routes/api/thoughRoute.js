const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
  getThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/reaction").post(addReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
