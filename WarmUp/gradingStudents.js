grade = [4, 36, 33, 45, 67, 61, 77, 99, 94]

function gradingStudents(grades) {
    for( let i = 0; i < grades.length; i++){
        if(grades[i] < 38 || grades[i]%5==0|| grades[i]%5<3){
            grades[i] = grades[i];
        }
        else{
            grades[i] = grades[i] + (5 - grades[i]%5);
        }
    }
    
  console.log(grades);
}

gradingStudents(grade);