import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Demo from './components/demo/Demo';
import Footer from './components/footer/Footer';

const data = [
  {
    name: 'Matko',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit deleniti perferendis exercitationem maxime in placeat vero illo similique provident quo, tempore quia ullam voluptatem eaque numquam fuga dicta perspiciatis.',
    title: 'Director of "Financial Times"'
  },
  {
    name: 'Karmen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit deleniti perferendis exercitationem maxime in placeat vero illo similique provident quo, tempore quia ullam voluptatem eaque numquam fuga dicta perspiciatis.',
    title: 'Director at Risktec Solutions Ltd'
  },
  {
    name: 'Karlo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit deleniti perferendis exercitationem maxime in placeat vero illo similique provident quo, tempore quia ullam voluptatem eaque numquam fuga dicta perspiciatis.',
    title: 'Managing Director of BPW Global'
  }
]

const lorem = {
  dummydata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis dolorem sit deleniti harum voluptatibus nihil voluptas quae deserunt fuga omnis numquam exercitationem totam temporibus neque sed qui, tempora vel rem.',
  dummydata2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt possimus ad nobis commodi voluptatum fugiat ipsa, qui, quibusdam id, voluptates debitis eveniet quisquam provident accusantium dolorem et illo aut.',
  ytlink: 'https://www.youtube.com/embed/oeqP5JtihMA',
}



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About lorem={lorem} />
      <Testimonials data={data} />
      <Demo lorem={lorem} />
      <Footer />
    </div>
  );
}

export default App;
