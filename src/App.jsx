import { Routes, Route } from 'react-router';

import NavBar from './components/NavBar/NavBar';

import Dashboard from './components/Dashboard/Dashboard.jsx';
import SignUpForm from './components/SignUpForm/SignUpForm';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;