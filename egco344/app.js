const express = require('express');

const app = express();

app.use(express.json());

// Mock student data
const students = [
    { id: 'S001', name: 'Alice Johnson', department: 'Computer Engineering', gpa: 3.85 },
    { id: 'S002', name: 'Bob Smith', department: 'Computer Engineering', gpa: 3.72 },
    { id: 'S003', name: 'Carol White', department: 'Civil Engineering', gpa: 3.91 },
    { id: 'S004', name: 'David Brown', department: 'Mechanical Engineering', gpa: 3.65 },
    { id: 'S005', name: 'Emma Davis', department: 'Electrical Engineering', gpa: 3.88 },
    { id: 'S006', name: 'Frank Miller', department: 'Civil Engineering', gpa: 3.78 },
    { id: 'S007', name: 'Grace Lee', department: 'Mechanical Engineering', gpa: 3.92 },
    { id: 'S008', name: 'Henry Wilson', department: 'Electrical Engineering', gpa: 3.81 },
];

// API to get all students with their GPAs
app.get('/api/students/gpa', (req, res) => {
    res.json({
        success: true,
        count: students.length,
        data: students,
    });
});

// API to get individual student GPA by student ID
// /api/students/S003/gpa
app.get('/api/students/:studentId/gpa', (req, res) => {
    const student = students.find((s) => s.id === req.params.studentId);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: `Student with ID ${req.params.studentId} not found`,
        });
    }

    res.json({
        success: true,
        data: student,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});