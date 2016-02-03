var student = require('./student');
var teacher = require('./teacher');

function add(teacherName, studentName) {
	teacher.add(teacherName);
	studentName.forEach(function(item, index) {
		student.add(item);
	});
}

exports.add = add;