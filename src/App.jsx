import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Primary from './component/Primary'
import EnrollmentForm from './component/EnrollmentForm/EnrollmentForm'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
        <Route path='/' element={<Primary />} /> 
        <Route path='/enrollment-form' element={<EnrollmentForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
