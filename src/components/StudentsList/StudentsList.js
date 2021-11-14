import React, { useState } from 'react';

import studentsListData from '../../data/students-list-data.js';
import Student from '../Student/Student';
import ToggleColorButton from '../ToggleColorButton/ToggleColorButton.js';

const StudentsList = () => {
    const [blackText, setBlackText] = useState(false);

    const toggleColor = () => {
        setBlackText(!blackText);
    }

    return (
        <>  
            <ToggleColorButton click={toggleColor} />

            {studentsListData.map((student) => (
                <Student 
                    key={student.id}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    course={student.course}
                    email={student.email}
                    color={!blackText ? student.color : 'black'} 
                    toggleColorClick={toggleColor} />
            ))}
        </>
    )
}

export default StudentsList;