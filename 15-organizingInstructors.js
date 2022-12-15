const organizeInstructors = function(instructors) {
  const courses = {};
  for (let instructor of instructors) {
    let course = instructor.course;
    if (courses[course]) {
      courses[course].push(instructor.name);
    } else {
      courses[course] = [instructor.name];
    }
  }
  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));