//Old Style
// const square = function(number) {
//     return number * number;
// }

const square = number => number * number;

console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 1, isActive: true },
  { id: 1, isActive: false }
];

const activeJobs = jobs.filter(s => s.isActive);

console.log(activeJobs);
