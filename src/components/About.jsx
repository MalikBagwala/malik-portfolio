import React from "react"

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="title-content">
          <h2 className="title">About</h2>
          <hr className="title-ruling" />
          <div className="about-content">
            <p>
              I'm Malik, a 21 year old self-taught developer specializing in
              <span className="highlight"> front-end</span> development. I have
              always been passionate about creating user-interfaces that speak,
              and are a pleasure to use, I like to tackle challenges and I am
              always open to collaboration. My love for web development exploded
              after my bachelor's degree in{" "}
              <span className="highlight">computer science</span>. I like
              exploring newer and better software engineering paradigms and to
              be completly honest, I do get excited about new frameworks{" "}
              <span role="img" aria-label="smile">
                😆
              </span>
              , So here are a few of my projects that are built using{" "}
              <span className="highlight">bleeding edge </span>
              frameworks and technologies. My skill stack includes but is not
              limited to,
            </p>
            <p className="skill-stack">
              react - redux - firebase - graphql - apollo - mongodb - nodejs -
              express -gatsby
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
