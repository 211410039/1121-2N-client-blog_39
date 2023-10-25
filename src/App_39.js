import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogStaticPage_39 from './pages/BlogStaticPage_39';
import BlogNodeServer_39 from './pages/BlogNodeServer_39';
import HomePage_39 from './pages/HomePage_39';
import BlogSupabase_39 from './pages/Blog_Supabase_39';
import BlogLocalJson_39 from './pages/BlogLocalJson_39';

const App_39 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_39 />} />
        <Route path='/static_39/' element={<BlogStaticPage_39 />} />
        <Route path='/node_39/' element={<BlogNodeServer_39 />} />
        <Route path='/supa_39/' element={<BlogSupabase_39 />} />
        <Route path='/local_39/' element={<BlogLocalJson_39 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_39;
