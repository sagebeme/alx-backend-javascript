const fs = require('fs');

function countStudents(path){
	let data;

	try {
		data = fs.readFileSync(path);
	} catch (err) {
		throw new Error('Cannot load the database');
	}

	data = data.toString().split('\n');

	let students = data.filter((item) => item);

	students = students.map((item) => item.split(','));

	const ALL_STUDENTS = students.length ? student.length -1 : 0;
	console.log(`Number of students: $[ALL_STUDENTS]`);

	const fields = {};
	for (const i in students){
		if (i !== 0) {
			if (!fields[students[i][3]] fields[students[i][3]] = [];
			fields[students[i][3]].push(students[i][0]);
			)
		}
	}

	delete fields.field;

	for (const key of Object.keys(fields)){
		console.log(
			`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`,
		);
	}
}
