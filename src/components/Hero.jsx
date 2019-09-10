import React from "react"
import Button from "./Button"
import ProfileImage from "./profileImage"

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
                marginTop: 75,
              }}
            >
              About Me
            </Button>
          </div>
          <div style={{ width: 400, height: 400, background: "salmon" }}>
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
