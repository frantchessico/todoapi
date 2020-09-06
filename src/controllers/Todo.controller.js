const TodoModel = require('../models/Todo.model');


module.exports  = {
    async createTodo(req, res) {
        const { title, description, author } = req.body;
        const todo = new TodoModel({
            title,
            description,
            author
        })
        await todo.save()
        .then(data => {
            return res.json(data)
        }).catch(err => {
            return res.json(err)
        })
    },
  async getTodos(_, res) {
     await TodoModel.find()
     .then(todos => {
         return res.json(todos) 
     }).catch(err => {
         return res.json(err)
     })
  },
async getOneTodo(req, res) {
  const { id } = req.params;
  await TodoModel.findById(id)
  .then(todo => {
     return res.json(todo)
  }).catch(err => {
      return res.json(err)
  })
}, 

async  udpadteTodo(req, res) {
    const { id } = req.params;
    const { title, description, author } = req.body;
    await TodoModel.findById(id)
    .updateOne({
       title,
       description,
       author 
    }).then(data => {
        return res.json(data)
    }).catch(err => {
        return res.json(err)
    })
  },

  async deleteTodo(req, res) {
     const { id } = req.params;

     await TodoModel.findById(id)
     .deleteOne()

     return res.json({success: 'Todo has been deleted successfully'})
  
  }
}