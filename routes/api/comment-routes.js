const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');
const commentRoutes = require('./commentRoutes');
const pizzaRoutes = require('./pizza-routes');
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

router.use('/comments', commentRoutes);
router.use('pizzas', pizzaRoutes);

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);
router.route(':pizzaId/:commentId/:replyId').delete(removeReply);
// /api/comments/<pizzaId>/<comments>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment)



module.exports = router;