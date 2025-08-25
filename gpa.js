
    /*
      DATA: Predefined course list with default credit values.
      - Used to auto-fill credits when a course name matches exactly.
      - Users may still enter custom courses/credits.
    */
    const Courses = [
      {id:1,  Course:"Animation Techniques",credits:3},
      {id:2,  Course:"Visual Basic (VB)",credits:3},
      {id:3,  Course: "VB.NET",credits:4},
      {id:4,  Course:"RDBMS (Relational Database Management System)",credits:4},
      {id:5,  Course:"Tamil (Language Paper)",credits:2},
      {id:6,  Course:"English (Language Paper)",credits:2},
      {id:7,  Course:"Mathematics",credits:4},
      {id:8,  Course:"Java Programming",credits:4},
      {id:9,  Course:"Microprocessor (MP)",credits:3},
      {id:10, Course:"Web Design",credits:3},
      {id:11,  Course:"Linux (Operating System)",credits:3},
      {id:12,  Course:"Data Structures ",credits:4},
      {id:13,  Course:" C++ Programming",credits:3},
      {id:14,  Course:"C Programming ",credits:3},
      {id:15, Course:"Digital Fundamentals and Computer Architecture",credits:4},
       {id:16, Course:"SSOS (System Software & Operating System)",credits:4},
    ];

    /*
      saveToLocalStorage()
      --------------------------------------
      PURPOSE: Persist the current rows to localStorage so they survive reloads.
      HOW:
        - Read each .row in #course-container
        - For each row, capture: course name, credits, selected grade value
        - Store as JSON string under key 'coursesData'
    */
    function saveToLocalStorage() {
      const rows = document.querySelectorAll("#course-container .row");
      const data = Array.from(rows).map(row => ({
        course: row.querySelector("input[list]").value,
        credits: row.querySelector("input[type='number']").value,
        grade: row.querySelector("select").value
      }));
      localStorage.setItem("coursesData", JSON.stringify(data));
    }

    /*
      addCourse(courseName = "", credits = "", grade = "10")
      ----------------------------------------------------------------
      PURPOSE: Append a new input row to the form.
      PARAMS:
        - courseName: initial text for the course input (optional)
        - credits:    initial number of credits (optional)
        - grade:      initial grade value (defaults to '10' for A+)
      STEPS:
        1) Create the row wrapper
        2) Build inputs: course (with datalist), credits (number), grade (select)
        3) Wire up events: change/input handlers to auto-fill credits and save
        4) Add a delete button that removes the row with a short fade
        5) Insert the row into #course-container and persist state
    */
    function addCourse(courseName = "", credits = "", grade = "10") {
      // 1) Row wrapper
      const row = document.createElement("div");
      row.className = "row";

      // 2a) Course name input (connected to a datalist for suggestions)
      const input = document.createElement("input");
      input.setAttribute("list", "courseList");
      input.placeholder = "Course name";
      input.value = courseName;
    

 // 2b) Credits input (number). If credits provided, make it read-only.
const creditInput = document.createElement("input");
creditInput.type = "number";
creditInput.placeholder = "Credits";
creditInput.min = "0.000001"; // Small positive number
creditInput.step = "any";

// Convert 'credits' to number safely
const creditValue = parseFloat(credits);

// Lock input if a valid credit value exists
creditInput.readOnly = !isNaN(creditValue) && creditValue > 0;

// Set initial value or leave blank
if (!isNaN(creditValue) && creditValue > 0) {
    creditInput.value = creditValue;
} else {
    creditInput.value = '';
}

// ✅ Prevent user from entering 0 or negative numbers
 creditInput.addEventListener("input",() => {
  let val=parseFloat(creditInput.value);
  if(isNaN(val) || val<= 0 ){
    // creditInput.value='';
    alert("Credits must be a positive number greater than zero.");
    creditInput.value='';
  }
 });

         

      // 2c) Grade dropdown (10=A+, 9=A, 8=B+, 7=B, 6=C, 5=D, 0=F)
      const gradeSelect = document.createElement("select");
      gradeSelect.innerHTML = `
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="5">C</option>
        <option value="0">U/F</option>
      `;
      gradeSelect.value = grade;

      // 2d) Delete button: removes the row after a short fade-out
      const delBtn = document.createElement("button");
      delBtn.className = "del";
      delBtn.textContent = "X";
      delBtn.onclick = () => {
        row.style.opacity = "0";
        setTimeout(() => {
          row.remove();
          saveToLocalStorage();
        }, 300);
      };
      2.

      // 3) Event: when the course name changes, try to auto-fill credits
      input.addEventListener("change", () => {
        const selected = Courses.find(c => c.Course.toLowerCase() === input.value.toLowerCase());
        // If the course exists in our list, use its credits and lock the field
        creditInput.value = selected ? selected.credits : "";
        creditInput.readOnly = !!selected;
        saveToLocalStorage();
      });

      // Persist changes on credits or grade adjustments
      creditInput.addEventListener("input", saveToLocalStorage);
      gradeSelect.addEventListener("change", saveToLocalStorage);

      // 4) Assemble the row
      row.append(input, creditInput, gradeSelect, delBtn);

      // 5) Insert into the container and save current state
      document.getElementById("course-container").appendChild(row);
      saveToLocalStorage();
    }

    /*
      calculateGPA()
      --------------------------------------
      PURPOSE: Compute and display the GPA summary table.
      GPA RULE HERE:
        - Total credits used in the denominator EXCLUDES courses graded 'F' (0).
        - Weighted sum still adds (credits * grade) for every row (including F=0, which adds 0).
      STEPS:
        1) Iterate over each row and extract course, credits, grade
        2) Build table rows showing the math per course
        3) Sum credits (non-F only) and weighted grade points
        4) Compute GPA = weightedSum / totalCredits (if totalCredits > 0)
        5) Inject an HTML table into #result
    */
   function clearall(){
    localStorage.clear();
    document.getElementById("course-container").innerHTML="";
    document.getElementById("result").innerHTML=""; 

   }
    function calculateGPA() {
      const rows = document.querySelectorAll("#course-container .row");
      let totalCredits = 0, weightedSum = 0;

      // Table header
      let table = `<table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Grade Points (Credits × Grade)</th>
          </tr>
        </thead>
        <tbody>`;

      // 1) & 2) Process each row
       rows.forEach((row, index) => {
  const courseName = row.querySelector("input[list]").value.trim();
  const credits = parseFloat(row.querySelector("input[type='number']").value) || 0;
  const grade = parseInt(row.querySelector("select").value) || 0;

  // Check for missing course name or invalid credits
  if (!courseName || credits <= 0) {
    alert(`Please enter valid details in row ${index + 1}`);
    return; // Skip this iteration without breaking the script
  }

  const gradePoints = credits * grade;

  // Accumulate total credits (ignoring F grade)
  if (grade !== 0) totalCredits += credits;
  weightedSum += gradePoints;

  // Build table row
  table += `
    <tr>
      <td>${courseName}</td>
      <td>${credits}</td>
      <td>${grade}</td>
      <td>${credits} × ${grade} = ${gradePoints}</td>
    </tr>`;
});


      // 4) Compute final GPA (two decimals). If no passing credits, show 0.00
      const gpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : "0.00";

      // 5) Close table + show totals
      table += `</tbody>
        <tfoot>
          <tr>
            <td colspan="3">Total Credits</td>
            <td>${totalCredits}</td>
          </tr>
          <tr>
            <td colspan="3">Final GPA</td>
            <td>${gpa}</td>
          </tr>
        </tfoot>
      </table>`;

      document.getElementById("result").innerHTML = table;
    }

    /*
      SETUP: Build the <datalist> used for course name suggestions.
      - The <input list="courseList"> references this datalist.
    */
    const datalist = document.createElement("datalist");
    datalist.id = "courseList";
    Courses.forEach(c => {
      const option = document.createElement("option");
      option.value = c.Course; // visible suggestion values
      datalist.appendChild(option);
    });
    document.body.appendChild(datalist);

    /*
      ON LOAD: Rehydrate from localStorage
      - Read any previously saved rows and recreate them, preserving values
    */
    window.onload = () => {
      const savedData = JSON.parse(localStorage.getItem("coursesData") || "[]");
      savedData.forEach(item => addCourse(item.course, item.credits, item.grade));
    };
 