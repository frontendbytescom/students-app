import React, { useState } from 'react';

import studentsListData from '../../data/students-list-data.js';
import Student from '../Student/Student';
import Button from '../Button/Button.js';

const StudentsList = () => {
    const [blackText, setBlackText] = useState(false);
    const [showStudents, setShowStudents] = useState(false);
    let students = null;

    const toggleColor = () => {
        setBlackText(!blackText);
    }

    const handleClickToggleShowStundets = () => {
        setShowStudents(!showStudents);
    }

    if (showStudents) {
        students = studentsListData.map((student) => (
            <Student 
                key={student.id}
                firstName={student.firstName}
                lastName={student.lastName}
                course={student.course}
                email={student.email}
                color={!blackText ? student.color : 'black'} 
                toggleColorClick={toggleColor} />
        ));
    } 

    return (
        <>  
            <Button 
                click={toggleColor} 
                text="Toggle Color"/>

            <Button 
                click={handleClickToggleShowStundets} 
                text={showStudents ? 'Hide students' : 'Show students'} />

            {students}
        </>
    )
}

export default StudentsList;