const { Router } = require("express");
const router = Router();
const { getTodo, saveTodo, updateTodo, deleteTodo, getTodoById } = require("../controllers/ToDoController");

router.get("/todo", getTodo);
router.get("/todo/:id", getTodoById);
router.post("/todo/save", saveTodo);
router.patch("/todo/update", updateTodo);
router.delete("/todo/delete", deleteTodo);

module.exports = router;