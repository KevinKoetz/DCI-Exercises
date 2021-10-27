//Creates a function which can be called and returns an increasing ID, starting from 0
function createIdGenerator(startValue: number = 0) {
  let id = startValue;
  return (resetValue: number | undefined = undefined) => {
    if(resetValue) id = resetValue;
    return id++};
}

//Binds an ID Generator to a function expecting a Generator as it's first argument.
function attachGenerator<ArgType, ReturnType>(
  fn: (generator: () => number, args: ArgType) => ReturnType,
  startValue: number = 0
) {
  const generator = createIdGenerator(startValue);
  return function (args: ArgType) {
    return fn(generator, args);
  };
}

//Produces a new Object with an added ID, created by the passed in generator based on the input Object
function createObjectWithId<T = Object>(generator: () => number, args: T) {
  return {
    id: generator(),
    ...args,
  };
}

//Provides a function that passes it's first argument to the first function and then calls after with the result of first() and possibly one more argument
function after<E, X, T = void>(
  first: (arg: E) => X,
  after: (arg: X, afterArgs?: T) => void
) {
  return function (firstArgs: E, afterArgs: T) {
    after(first(firstArgs), afterArgs);
  };
}

/* School app
create app to add, remove, read and edit Students and Classes in a School

the school model:
   School=[ classObject1,classObject2,....]
*/
type School = Class[];
const school: School = [];
/*
the class model:
 {
     name: "FbW3",
     students: [studentObject1, studentObject1,...],
 }
 */
interface Class {
  readonly id: number;
  name: string;
  students: Student[];
}

/*
the Student model:
{
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
}

*/

interface Student {
  readonly id: number;
  name: string;
  email: string;
  city: string;
}

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
const createClass = after<{ name: string }, Omit<Class, "students">>(
  attachGenerator(createObjectWithId),
  (createClassArgumentWithId) => {
    const newClass = {
      ...createClassArgumentWithId,
      students: Array<Student>(0),
    };
    school.push(newClass);
  }
);

/*

create student function which takes argument(object) holds class ID and the student data
  {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
  }

*/

const createStudent = after<Omit<Student, "id">, Student, number>(
  attachGenerator(createObjectWithId),
  (studentWithId, classId) => {
    const classWithId = school.find(
      (classInSchool) => classInSchool.id === classId
    );
    if (classWithId) classWithId.students.push(studentWithId);
    else throw new Error(`Class with id ${classId} does not exist`);
  }
);

/*

create removeClass function which takes ID and remove class by ID
*/

function removeClass(classId: number) {
  const classIndex = school.findIndex((cl) => (cl.id === classId));
  if (classIndex) {
    school.splice(classIndex, 1);
    return true;
  } else return false;
}

/*

create removeStudent function which takes argument(object) holds class ID and the student ID

*/

function findClassOfStudent(id: number) {
  return school.find((cl) => cl.students.find((student) => student.id === id));
}

function findStudent(id: number) {
  return school.reduce<Student | undefined>(
    (res, cur) =>
      res ? res : cur.students.find((student) => student.id === id),
    undefined
  );
}

function removeStudent(id: number) {
  const classOfStudent = findClassOfStudent(id);
  if (classOfStudent) {
    const index = classOfStudent.students.findIndex(
      (student) => student.id === id
    );
    classOfStudent.students.splice(index, 1);
    return true;
  } else return false;
}

/*

create editStudent function which takes argument(object) with holds class ID and the student ID

*/

function editStudent(
  id: number,
  studentParameters: Partial<Omit<Student, "id">>
) {
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

function renderSchoolTemplate(school: School) {
  // prettier-ignore
  return (
` School Classes:
------------------
${accumulateRenders(school,renderClassTemplate)}
Total Classes ${school.length}, total students ${getNumberOfStudents(school)}`);
}

function getNumberOfStudents(school: School) {
  return school.reduce((acc, cur) => acc + cur.students.length, 0);
}

//Returns the String for one Class
function renderClassTemplate(cls: Class) {
  // prettier-ignore
  return( 
` ${cls.name} - (class ID: ${cls.id}):
${cls.students.length ? accumulateRenders(cls.students, attachGenerator(renderStudentTemplate,1)) : "  The class is empty"}
********************************************`)
}

//Returns the String for one Student
function renderStudentTemplate(generator: () => number, student: Student) {
  // prettier-ignore
  return (
`  ${generator()}- ${student.name}, ${student.email}, ${student.city} - (student ID: ${student.id}).`);
}

//Calls the provided renderFunction for each element in arr and returns a string in which each render is seperated by a newline
function accumulateRenders<T>(arr: T[], renderFunction: (arg: T) => string) {
  return arr.reduce((acc, cur,index, array) => acc + renderFunction(cur) + (index === array.length - 1 ? "" : "\n"), "");
}

createClass({name: "FbW1"})
createClass({name: "FbW2"})
createClass({name: "FbW3"})

createStudent({name: "Alex", email:"alex@yahoo.com", city:"Berlin"}, 0)
createStudent({name: "Max", email:"max@yahoo.com", city:"Hamburg"}, 0)
createStudent({name: "Jon", email:"jon@yahoo.com", city:"Berlin"}, 1)
createStudent({name: "Pilar", email:"pilar@yahoo.com", city:"Berlin"}, 1)

console.log(renderSchoolTemplate(school))

editStudent(2, {city: "Hannover"})

console.log(renderSchoolTemplate(school))

removeStudent(0)

console.log(renderSchoolTemplate(school))