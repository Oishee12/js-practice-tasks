/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const studentMarks = 97;

if(studentMarks >= 90 && studentMarks <= 100){
    console.log('You got A');
}
else if(studentMarks >= 80 && studentMarks <= 89){
    console.log('You got B');
}
else if(studentMarks >= 70 && studentMarks <= 79){
    console.log('You got C');
}
else if(studentMarks >= 60 && studentMarks <= 69){
    console.log('You got D');
}
else if(studentMarks >= 0 && studentMarks <= 59){
    console.log('You got F');
}
