const router = require('express').Router();
const {addComment, removeComment} = require('../../controllers/comment-controller');
const commentRoutes = require('./commentRoutes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('pizzas', pizzaRoutes);

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<comments>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;