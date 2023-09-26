let person = {
    firstName: prompt("Enter your first name SIMONN:"),
    lastName: prompt("Enter your last name zami:"),
    grades: [],
  
    
    gradeADD: function() {
      while (true) {
        let grade = prompt("Enter a grade (or type 'done' to finish inserting):");
        if (isNaN(grade)) {
          break;
        }
        else{
            push
        }
        this.grades.push(Number(grade));
      }
    },
  
    sum : 0,
    calculateAverage: function() {
      
      for (let i = 0; i < this.grades.length; i++) {
        this.sum += this.grades[i];
      }
      if (this.grades.length === 0) {
        return "No grades available.";
      }
      return this.sum / this.grades.length;
    }
  };
  
  person.gradeADD();
  const average = person.calculateAverage()
  document.write(` ${firstName} + " " + ${lastName} your grades are ${person.grades}, their sum is ${person.sum} and average is ${average}`)