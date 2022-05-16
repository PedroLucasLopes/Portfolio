import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';
import Utilities from './Components/Utilities/Utilities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
        <Route path='utilities' element={<Utilities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
