new Vue({
  el: '#students',

  data: {
    student: { name: '', startDate: '', endDate: '' },
    students: []
  },

  ready: function () {
    this.fetchStudents();
  },

  methods: {

    fetchStudents: function () {
      var students = [];
      this.$http.get('/api/students')
        .success(function (students) {
          this.$set('students', students);
          console.log(students);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    addStudent: function () {
      if (this.student.name.trim()) {
        this.$http.post('/api/students', this.student)
          .success(function (res) {
            this.students.push(this.student);
            console.log('Student added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteStudent: function (id) {
      if (confirm('Are you sure you want to delete this student?')) {        
        this.$http.delete('api/students/' + id)
          .success(function (res) {
            console.log(res);
            var index = this.students.find(x => x.id === id)
            this.students.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
});
