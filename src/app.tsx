import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import ProjectDetail from './routes/ProjectDetail';
import Blog from './routes/Blog';
import Post from './routes/Post';
import Contact from './routes/Contact';
import { Helmet } from 'react-helmet-async';
import { defaultMeta } from './lib/seo';

const App = () => (
  <>
    <Helmet>
      <title>{defaultMeta.title}</title>
      <meta name="description" content={defaultMeta.description} />
    </Helmet>
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </>
);

export default App;
