const router = require('express').Router();
const {getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza} = require('../../controllers/pizza-controller');


//set up get all and and POST at api/pizzas
router 
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

    //set up GET one and PUT, and DELETE at api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

    module.exports = router;