"use strict";
//Creates a function which can be called and returns an increasing ID, starting from 0
function createIdGenerator(startValue = 0) {
    let id = startValue;
    return (resetValue = undefined) => {
        if (resetValue)
            id = resetValue;
        return id++;
    };
}
//Binds an ID Generator to a function expecting a Generator as it's first argument.
function attachGenerator(fn, startValue = 0) {
    const generator = createIdGenerator(startValue);
    return function (args) {
        return fn(generator, args);
    };
}
//Produces a new Object with an added ID, created by the passed in generator based on the input Object
function createObjectWithId(generator, args) {
    return Object.assign({ id: generator() }, args);
}
//Provides a function that passes it's first argument to the first function and then calls after with the result of first() and possibly one more argument
function after(first, after) {
    return function (firstArgs, afterArgs) {
        after(first(firstArgs), afterArgs);
    };
}
const school = [];
/*
school data model:

 [
  {
    name: "FbW1",
    students: [
      {
        name: "Alex",
        email: "alex@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Max",
        email: "max@yahoo.com",
        city: "Hamburg",
      },
    ],
  },

  {
    name: "FbW2",
    students: [
      {
        name: "Jon",
        email: "jon@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
      },
    ],
  },
  {
    name: "FbW3",
    students: [],
  },
]
Tasks
App Functions
Functions arguments ==> Passing one single object as argument holds all the arguments.

createClass function which takes argument(object) holds class name
*/
const createClass = after(attachGenerator(createObjectWithId), (createClassArgumentWithId) => {
    const newClass = Object.assign(Object.assign({}, createClassArgumentWithId), { students: Array(0) });
    school.push(newClass);
});
/*

create student function which takes argument(object) holds class ID and the student data
  {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
  }

*/
const createStudent = after(attachGenerator(createObjectWithId), (studentWithId, classId) => {
    const classWithId = school.find((classInSchool) => classInSchool.id === classId);
    if (classWithId)
        classWithId.students.push(studentWithId);
    else
        throw new Error(`Class with id ${classId} does not exist`);
});
/*

create removeClass function which takes ID and remove class by ID
*/
function removeClass(classId) {
    const classIndex = school.findIndex((cl) => (cl.id === classId));
    if (classIndex) {
        school.splice(classIndex, 1);
        return true;
    }
    else
        return false;
}
/*

create removeStudent function which takes argument(object) holds class ID and the student ID

*/
function findClassOfStudent(id) {
    return school.find((cl) => cl.students.find((student) => student.id === id));
}
function findStudent(id) {
    return school.reduce((res, cur) => res ? res : cur.students.find((student) => student.id === id), undefined);
}
function removeStudent(id) {
    const classOfStudent = findClassOfStudent(id);
    if (classOfStudent) {
        const index = classOfStudent.students.findIndex((student) => student.id === id);
        classOfStudent.students.splice(index, 1);
        return true;
    }
    else
        return false;
}
/*

create editStudent function which takes argument(object) with holds class ID and the student ID

*/
function editStudent(id, studentParameters) {
    const student = findStudent(id);
    if (student) {
        Object.assign(student, studentParameters);
    }
}
/*

editStudent ==> info name, email and city.
create function call RenderSchoolTemplate
This function Format and render school data
Final Template
 School Classes:
------------------
 FbW1 - (class ID: 1):
  1- Alex, alex@yahoo.com, Berlin - (student ID: 1).
  2- Max, max@yahoo.com, Hamburg - (student ID: 2).
********************************************
 FbW2 - (class ID: 2):
  1- Jon, jon@yahoo.com, Berlin - (student ID: 1).
  2- Pilar, pilar@yahoo.com, Berlin - (student ID: 2).
********************************************
 FbW3 - (class ID: 3):
   The class is empty
********************************************
  Total Classes 3, total students 4 */
function renderSchoolTemplate(school) {
    // prettier-ignore
    return (` School Classes:
------------------
${accumulateRenders(school, renderClassTemplate)}
Total Classes ${school.length}, total students ${getNumberOfStudents(school)}`);
}
function getNumberOfStudents(school) {
    return school.reduce((acc, cur) => acc + cur.students.length, 0);
}
//Returns the String for one Class
function renderClassTemplate(cls) {
    // prettier-ignore
    return (` ${cls.name} - (class ID: ${cls.id}):
${cls.students.length ? accumulateRenders(cls.students, attachGenerator(renderStudentTemplate, 1)) : "  The class is empty"}
********************************************`);
}
//Returns the String for one Student
function renderStudentTemplate(generator, student) {
    // prettier-ignore
    return (`  ${generator()}- ${student.name}, ${student.email}, ${student.city} - (student ID: ${student.id}).`);
}
//Calls the provided renderFunction for each element in arr and returns a string in which each render is seperated by a newline
function accumulateRenders(arr, renderFunction) {
    return arr.reduce((acc, cur, index, array) => acc + renderFunction(cur) + (index === array.length - 1 ? "" : "\n"), "");
}
createClass({ name: "FbW1" });
createClass({ name: "FbW2" });
createClass({ name: "FbW3" });
createStudent({ name: "Alex", email: "alex@yahoo.com", city: "Berlin" }, 0);
createStudent({ name: "Max", email: "max@yahoo.com", city: "Hamburg" }, 0);
createStudent({ name: "Jon", email: "jon@yahoo.com", city: "Berlin" }, 1);
createStudent({ name: "Pilar", email: "pilar@yahoo.com", city: "Berlin" }, 1);
console.log(renderSchoolTemplate(school));
editStudent(2, { city: "Hannover" });
console.log(renderSchoolTemplate(school));
removeStudent(0);
console.log(renderSchoolTemplate(school));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0ZBQXNGO0FBQ3RGLFNBQVMsaUJBQWlCLENBQUMsYUFBcUIsQ0FBQztJQUMvQyxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFDcEIsT0FBTyxDQUFDLGFBQWlDLFNBQVMsRUFBRSxFQUFFO1FBQ3BELElBQUcsVUFBVTtZQUFFLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDL0IsT0FBTyxFQUFFLEVBQUUsQ0FBQTtJQUFBLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBRUQsbUZBQW1GO0FBQ25GLFNBQVMsZUFBZSxDQUN0QixFQUEwRCxFQUMxRCxhQUFxQixDQUFDO0lBRXRCLE1BQU0sU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sVUFBVSxJQUFhO1FBQzVCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsc0dBQXNHO0FBQ3RHLFNBQVMsa0JBQWtCLENBQWEsU0FBdUIsRUFBRSxJQUFPO0lBQ3RFLHVCQUNFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFDWixJQUFJLEVBQ1A7QUFDSixDQUFDO0FBRUQsMEpBQTBKO0FBQzFKLFNBQVMsS0FBSyxDQUNaLEtBQW9CLEVBQ3BCLEtBQXNDO0lBRXRDLE9BQU8sVUFBVSxTQUFZLEVBQUUsU0FBWTtRQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFTRCxNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7QUErQjFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE2Q0U7QUFDRixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQ3ZCLGVBQWUsQ0FBQyxr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