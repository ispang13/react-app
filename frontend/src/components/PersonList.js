import { useState, useEffect } from 'react'
import axios from "axios";

 
const PersonList = () => {
    const [persons, setPerson] = useState([]);
 
    useEffect(() => {
        getPersons();
    }, []);
 
    const getPersons = async () => {
        const response =  await axios.get('http://192.168.188.167:4000/persons');
        setPerson(response.data.data);
    }
 
    return (
        <div>
           <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    { persons.map((person, index) => (
                        <tr key={ person.PersonID }>
                            <td>{ index + 1 }</td>
                            <td>{ person.LastName + person.FirstName }</td>
                            <td>{ person.Address }</td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default PersonList