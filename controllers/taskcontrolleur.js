const Task = require ("../models/task");




const AddTask = async (req, res, next) => {
    const id_task = req.body.id_task;
   
      const task = new Task({
        title: req.body.title,
        description: req.body.description,
        dateofcompletion: req.body.dateofcompletion,
        level:req.body.dateofcompletion

      }).save((err, task) => {
        if (err) {
          console.log(err);
        }
        res.json(task);
      });
    };

    
const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted " });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndUpdate(
      { _id: id_task },
      { title: req.body.title,
        description: req.body.description,
        dateofcompletion: req.body.dateofcompletion,
        level:req.body.dateofcompletion
         }
    );
    res.json("update successfully");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
module.exports={
  AddTask,deleteTask,updateTask
};