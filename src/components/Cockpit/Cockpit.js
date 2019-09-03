import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] usesEffect');
        toggleButtonRef.current.click();
        // setTimeout(() => {
        //     alert('Save data to cloud!');
        // }, 1000)
        return () => {
            console.log('[Cockpit.js] cleanup workd in useEffect');
        }
    }, []);

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
            <button ref={toggleButtonRef} className={btnClass} style={style}
                onClick={props.click}>Switch Name</button>
            <button className={btnClass} style={style} onClick={authContext.login}>Login</button>
        </div>
    )
};

export default Cockpit;