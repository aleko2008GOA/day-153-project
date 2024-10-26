import { Routes, Route } from "react-router-dom";
import AdminForm from "./pages/form";
import NavBar from "./Navbar";
import AdminsPage from "./pages/adminsPage";

function App(){
    if(!localStorage.admin) localStorage.admin = JSON.stringify({email: 'alexmelikjanian@gmail.com', password: 'M$1aleksan', logedIn: false});

    return (
      <>
        <NavBar />
        <Routes>
            <Route path = '/' element = {<AdminForm />} />
            <Route path = '/forAdmins' element = {<AdminsPage />} />
        </Routes>
      </>
    )
}

export default App;
