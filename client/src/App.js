import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Navbar>
      </Container>
    </BrowserRouter>
  );
}
