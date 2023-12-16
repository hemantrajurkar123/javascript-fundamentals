//sometime objects can be complex such as

const hemant = {
  firstName: "Hemant",
  lastName: "R",
  job: "Software developer",
  experince: "7 Years",
  skills: ["NextJS", "ReactJS", "Javascript"],
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
