import { Login } from '../src/pages/Login';
import { ChatRoom } from '../src/pages/ChatRoom';

import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import { AuthProvider } from './context/AuthContext.jsx'
function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
