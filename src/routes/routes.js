const router = require('express').Router();
const TodoController = require('../controllers/Todo.controller')


router.post('/new-todo', TodoController.createTodo)
router.get('/', TodoController.getTodos)

router.get('/todo/:id', TodoController.getOneTodo)
router.put('/update-todo/:id', TodoController.udpadteTodo)

router.delete('/delete-todo/:id', TodoController.deleteTodo)


module.exports = router;