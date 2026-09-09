const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to Student API 🚀");
});

app.use(express.json()); // middleware

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Student API 🚀");
});

// Sample data (in-memory)
let students = [
    { id: 1, name: "Arun", age: 20 },
    { id: 2, name: "Priya", age: 21 }
];

// GET all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET single student
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
});

// POST - add student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT - update student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).send("Student not found");

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;

    res.json(student);
});

// DELETE student
app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send("Student deleted successfully");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});