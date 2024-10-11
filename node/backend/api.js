var students = require('./students.js');

exports.students = function (req, res) {
  res.json(students);
};

exports.student = function (req, res) {
  res.json(students[req.params.studentId]);
};
