import React from 'react'
import { Banner } from '../Banner'
import { Skills } from '../Skills'
import { Projects } from '../Projects'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Home = () => {
  return (
    <div className='home'>
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}
