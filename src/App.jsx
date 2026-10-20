import { useState } from 'react'
import Education from './components/Education';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import CVpreview from './components/CVPreview';
import './App.css'

function App() {
  const [introduction, setIntroduction] = useState({
    name : "",
    email: "",
    phone: "",
    intro: ""
  });

  const [education, setEducation] = useState ({
    institute: "",
    degreeType: "",
    fieldOfStudy: "",
    educationStart: "",
    educationEnd: ""
  });

  const [experience, setExperience] = useState({
    companyName :"",
    position: "",
    yearsOfExperience: "",
    brief: ""
  })


  return(
    <div className="app">
      <header className='appHeader'>
        <h1>CV Application</h1>
        <p>Build your CV</p>
      </header>

      <main className='appContent'>
        <section className='formsContainer'>
          <Introduction
          data = {introduction}
          setData={setIntroduction}
          />
          <Education
          data = {education}
          setData={setEducation}
          />
          <Experience
          data = {experience}
          setData={setExperience}
          />
        </section>
        <CVpreview
        introduction={introduction}
        education={education}
        experience={experience}
        />
      </main>

    </div>
  );
}

export default App
