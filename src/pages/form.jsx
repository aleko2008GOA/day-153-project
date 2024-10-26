import { Navigate, useNavigate } from "react-router-dom";

function AdminForm(){
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const user = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }

        if(user.email === JSON.parse(localStorage.admin).email && user.password === JSON.parse(localStorage.admin).password){
            navigate('/forAdmins');
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Welcome!</h1>
                <span>
                    <label htmlFor = "email">Email:</label>
                    <input type = 'email' name = 'email' id = 'email' required />
                </span>
                <span>
                    <label htmlFor = "password">Password:</label>
                    <input type = 'password' name = 'password' id = 'password' required />
                </span>
                <span>
                    <input type = 'submit' value = 'Registration' />
                    <input type = 'reset' value = 'Cancle' />
                </span>
            </form>
        </>
    )
}

export default AdminForm;