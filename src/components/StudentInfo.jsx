export default  function StudentInfo({ student }) {
    return (
        <div>
            <h3>Student Info</h3>
            <p>FirstName: {student.firstName}</p>
            <p>LastName: {student.lastName}</p>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
            </div>
    )
}