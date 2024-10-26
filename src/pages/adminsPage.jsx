import { useState } from "react";

function AdminsPage(){
    const [users, setUsers] = useState(localStorage.users ? JSON.parse(localStorage.users) : []);

    function removeUser(index){
        const arr = users.slice();
        arr.splice(index, 1);
        setUsers(arr);
        localStorage.users = JSON.stringify(arr);
    }

    function editUser(e, index, type){
        const arr = users.slice();
        const change = prompt('Change?');
        if(change) arr[index][type] = change;
        setUsers(arr);
        localStorage.users = JSON.stringify(arr);
    }

    function addUser(e){
        e.preventDefault();

        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            color: e.target.color.value
        }
        localStorage.users = JSON.stringify([...users, newUser]);
        setUsers(prev => [...prev, newUser]);
    }

    return (
        <>
            <form onSubmit={addUser}>
                <h1>Add User</h1>
                <input type = 'text' placeholder="Name" name = 'name' />
                <input type = 'email' placeholder="Email" name = 'email' />
                <input type = 'tel' placeholder="Phone" name = 'phone' />
                <input type = 'color' placeholder="Favorite Color" name = 'color' />
                <input type = 'submit' value = 'Add' />
            </form>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Favorite Color</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? users.map((user, index) => (
                        <tr key = {index}>
                            <td onClick = {e => editUser(e, index, 'name')}>{user.name}</td>
                            <td onClick = {e => editUser(e, index, 'email')}>{user.email}</td>
                            <td onClick = {e => editUser(e, index, 'phone')}>{user.phone}</td>
                            <td onClick = {e => editUser(e, index, 'color')}>{user.color}</td>
                            <td onClick = {() => removeUser(index)}>Remove</td>
                        </tr>
                    )) : <></>}
                </tbody>
            </table>
        </>
    )
}

export default AdminsPage;