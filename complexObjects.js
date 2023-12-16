//sometime objects can be complex such as

const hemant = {
  firstName: "Hemant",
  lastName: "R",
  job: "Software developer",
  experince: "7 Years",
  skills: ["NextJS", "ReactJS", "Javascript"],
  softSkills: {
    communication: "Level9",
    ethics: "Level 8",
    thinking: "first principle",
  },
};

console.log(hemant);

//adding values to object

hemant.maritalStatus = "Married";
console.log(hemant);

//adding skills to array
hemant.skills.push("HTML");
console.log(hemant);

//accessing values from the object array
console.log(hemant.skills);

//adding property to softskills nested object
hemant.softSkills.values = "To be the best";
console.log(hemant);

//object destructuring
//desctructuring means assigning values of objects to varibles (here variables are fname and title)

const { firstName: fname, job: title } = hemant;
console.log("FirstName is :", fname);
console.log("Job is :", title);

//if the variable names are same as object propreties
const { firstName, job } = hemant;
console.log(firstName);
console.log(job);
