const toDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
	const toDo = await toDoModel.find();
	res.send(toDo);
};

module.exports.getTodoById = async (req, res) => {
    const toDo = await toDoModel.findById(req.params.id);
    res.send(toDo);
};

module.exports.saveTodo = async (req, res) => {
	const { title, description } = req.body;
	toDoModel
		.create({ title, description })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		});
};

module.exports.updateTodo = async (req, res) => {
	const { id, title, description } = req.body;
	toDoModel
		.findByIdAndUpdate(id, { title, description })
		.then(() => {
			res.send("Updated successfully");
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		});
};

module.exports.deleteTodo = async (req, res) => {
	const { id } = req.body;
	toDoModel
		.findByIdAndDelete(id)
		.then(() => {
			res.send("Deleted successfully");
		})
		.catch((err) => {
			console.log(err);
		});
};