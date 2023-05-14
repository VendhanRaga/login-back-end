import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './componenet/login'
import Dashboard from './componenet/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
export const url ="http://localhost:5500"//"https://login-back-end-p1a1.onrender.com"





function App() {
  return <>
   <BrowserRouter>
   <Routes>
    
           <Route path='/login' element={<Login/>}/>
           <Route path='/dashboard' element={<Dashboard/>}/>
           <Route path='/*' element={<Navigate to='/login'/>}/>
    
   </Routes>
   </BrowserRouter>
  </>
}

export default App;
