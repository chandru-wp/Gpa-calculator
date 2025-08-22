   const Courses = [
      {id:1, Course:"Tamil", credits:1},
      {id:2, Course:"English", credits:2},
      {id:3, Course:"Maths", credits:3},
      {id:4, Course:"Java", credits:4},
      {id:5, Course:"Visual Basic", credits:5},
      {id:6, Course:"Python", credits:6},
      {id:7, Course:"Micro processer", credits:7},
      {id:8, Course:"Dot net", credits:8},
      {id:9, Course:"Animation", credits:9},
      {id:10, Course:"Reletional database management system", credits:10}
    ];

    // Save current state to localStorage
    function saveToLocalStorage() {
      const rows = document.querySelectorAll("#course-container .row");
      const data = Array.from(rows).map(row => ({
        course: row.querySelector("input[list]").value,
        credits: row.querySelector("input[type='number']").value,
        grade: row.querySelector("select").value
      }));
      localStorage.setItem("coursesData", JSON.stringify(data));
    }

    // Add a new row
    function addCourse(courseName = "", credits = "", grade = "10") {
      const row = document.createElement("div");
      row.className = "row";

      // Input for course name
      const input = document.createElement("input");
      input.setAttribute("list", "courseList");
      input.placeholder = "Course name";
      input.value = courseName;

      // Input for credits
      const creditInput = document.createElement("input");
      creditInput.type = "number";
      creditInput.placeholder = "Credits";
      creditInput.readOnly = !!credits;
      creditInput.value = credits;

      // Select for grade
      const gradeSelect = document.createElement("select");
      gradeSelect.innerHTML = `
        <option value="10">A+</option>
        <option value="9">A</option>
        <option value="8">B+</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="0">F</option>
      `;
      gradeSelect.value = grade;

      // Delete button
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

      // Event listeners
      input.addEventListener("change", () => {
        const selected = Courses.find(c => c.Course.toLowerCase() === input.value.toLowerCase());
        creditInput.value = selected ? selected.credits : "";
        creditInput.readOnly = !!selected;
        saveToLocalStorage();
      });

      creditInput.addEventListener("input", saveToLocalStorage);
      gradeSelect.addEventListener("change", saveToLocalStorage);

      // Append elements
      row.append(input, creditInput, gradeSelect, delBtn);
      document.getElementById("course-container").appendChild(row);

      saveToLocalStorage();
    }

    // Calculate GPA
    function calculateGPA() {
      const rows = document.querySelectorAll("#course-container .row");
      let totalCredits = 0, weightedSum = 0;

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

      rows.forEach(row => {
        const courseName = row.querySelector("input[list]").value || "Unknown";
        const credits = parseInt(row.querySelector("input[type='number']").value) || 0;
        const grade = parseInt(row.querySelector("select").value) || 0;
        const gradePoints = credits * grade;

        if (grade !== 0) totalCredits += credits;
        weightedSum += gradePoints;

        table += `
          <tr>
            <td>${courseName}</td>
            <td>${credits}</td>
            <td>${grade}</td>
            <td>${credits} × ${grade} = ${gradePoints}</td>
          </tr>`;
      });

      const gpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : "0.00";

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

    // Create datalist
    const datalist = document.createElement("datalist");
    datalist.id = "courseList";
    Courses.forEach(c => {
      const option = document.createElement("option");
      option.value = c.Course;
      datalist.appendChild(option);
    });
    document.body.appendChild(datalist);

    // Load saved data
    window.onload = () => {
      const savedData = JSON.parse(localStorage.getItem("coursesData") || "[]");
      savedData.forEach(item => addCourse(item.course, item.credits, item.grade));
    };