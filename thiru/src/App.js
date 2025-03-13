import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ sname: "", age: "", grade: "" });

  useEffect(() => {
    axios.get("http://localhost:4000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const addStudent = async () => {
    try {
      await axios.post("http://localhost:4000/addStudent", newStudent);
      setStudents([...students, newStudent]);
      setNewStudent({ sname: "", age: "", grade: "" });
    } catch (error) {
      console.error("Error adding student", error);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.sname} - {student.age} - {student.grade}</li>
        ))}
      </ul>
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={newStudent.sname}
        
        onChange={(e) => setNewStudent({ ...newStudent, sname: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={newStudent.age}
        onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Grade"
        value={newStudent.grade}
        onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default App;
