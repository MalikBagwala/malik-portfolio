import React from "react"
import ProfileImage from "./ProfileImage"
import Button from "./Button"

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="container">
        <div className="hero-wrapper">
          <div className="text-content">
            <h1 className="heading">
              Hey ✌,<br></br>I'm <span className="highlight">Malik</span>
            </h1>
            <p className="description">
              A <span className="highlight">Designgineer</span>
            </p>
            <Button
              style={{
                marginTop: 100,
              }}
            >
              About Me
            </Button>
          </div>
          <ProfileImage />
        </div>
      </div>
    </div>
  )
}

export default Hero
