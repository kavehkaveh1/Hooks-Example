import React, { useState } from 'react';

const PersonComponent = () => {
  
    const [person, setPerson] = useState({
        firstName: '',
        lastName: ''
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
            ...prevPerson,
            [name]: value  
        }));
    };

    return (
        <div>
            <form>
                <div>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={person.firstName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={person.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </form>
            <div>
                <h2>Person Details:</h2>
                <p>First Name: {person.firstName}</p>
                <p>Last Name: {person.lastName}</p>
            </div>
        </div>
    );
};

export default PersonComponent;
