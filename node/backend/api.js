var db = require('./db.js');

exports.students = function (req, res) {
  console.log('Loading DB students...');
  db.Students
    .findAll()
    .then(students => {
        console.log('Fetched students, count: ' + students.length);
        res.json(students);
    })
    .catch(err => {
        console.error('** Fetch failed: ', err);
    });
};

exports.student = function (req, res) {
  console.log('Handling student call, method: ' + req.method + ', student ID: ' + req.params.studentId);
  switch(req.method) {
    case "DELETE":
      db.Students
      .destroy({
        where: {
          id: req.params.studentId
        }
      }).then(function() {
        console.log('Deleted student with id: ' + req.params.studentId);
        res.status(200).end();
      });
      break;
    case "POST":
      db.Students
        .create({
          name: req.body.name,
          startDate: req.body.startDate,
          endDate: req.body.endDate
        })
        .then(function() {
          res.send('{}');
          res.status(201).end();
        });
      break;
  }
};
