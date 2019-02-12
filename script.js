function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {    // anonymous function
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
    // So, this function here that we just wrote will not just return a simple value as we usually do with functions. 
    // It returns an entire function that we can then use later, and this is possible because functions are always First-class functions in JavaScript, because they are effectively objects.  
    // Actually we simply return an object here. It is simply an object that happens to be a function. 
    // Remember that this return a function so we have to store the result somewhere, and we create a variable for it. 
}

var teacherQuestion = interviewQuestion('teacher');
// This teacherQuestion variable here will be the function that is returned from the interviewQuestion when we pass teacher.
// This is just like when we store a function expression in a variable, this is the exact same thing.
teacherQuestion('Ivan');


var designerQuestion = interviewQuestion('designer');
designerQuestion('Ivan');
designerQuestion('Lily');
designerQuestion('Pesho');
designerQuestion('Gosho');

interviewQuestion('teacher')('Gosho');
