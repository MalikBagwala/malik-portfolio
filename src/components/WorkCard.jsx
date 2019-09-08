import React from "react"
import LightsOut from "./lights-out.jpeg"
import ProfileImage from "./ProfileImage"
const WorkCard = () => {
  return (
    <div className="work-card">
      <ProfileImage fill={true} src={LightsOut} />
      {/* <img src={LightsOut} alt="" className="card-img" /> */}
      {/* </div> */}
      <div className="content">
        <h3 className="heading">Lights Out</h3>

        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil
          earum officiis, saepe ipsam esse facere alias et odio illo nesciunt
          laboriosam illum magni inventore modi aspernatur, mollitia voluptas!
          Explicabo, corrupti quia eos error esse, omnis officiis suscipit
          excepturi atque ipsa, veniam ab! Necessitatibus ipsum totam suscipit
          eum nam mollitia.
        </p>
      </div>
    </div>
  )
}

export default WorkCard
