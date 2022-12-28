import {Container} from 'react-bootstrap';
import everycourses from './components/inflearn';
import Courses from "./components/courses.component";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Courses" element={<Courses/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
