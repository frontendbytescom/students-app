import studentsListData from './students-list-data.js';
import Student from '../Student/Student';

const StudentsList = () => {
    return (
        <>  
            {studentsListData.map((student) => (
                <Student 
                    key={student.id}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    course={student.course}
                    email={student.email}
                    color={student.color} />
            ))}
        </>
    )
}

export default StudentsList;