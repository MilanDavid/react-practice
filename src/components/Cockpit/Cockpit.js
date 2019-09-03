import React from 'react';

const cockpit = (props) => {


    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = 'red';
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red')
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    return (
        <div>
            <h1>Hi, to my React proj</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} style={style}
                onClick={props.click}>Switch Name</button>
        </div>
    )
};

export default cockpit;