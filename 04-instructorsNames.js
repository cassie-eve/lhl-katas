// Return the name of the instructor with the longest name
const instructorWithLongestName = instructors => {
  let longestName = instructors[1];
  for (let instructor of instructors) {
    if (instructor.name.length > longestName.name.length) {
      longestName = instructor;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));