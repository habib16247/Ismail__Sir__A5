import React from 'react'
import profile from "../../assets/image/profile.png"

const Comments = ({comment}) => {
    const {input, input1, timestamp} = comment

    let startTime = new Date(timestamp)
    let currentTime = new Date()
    
      const countTimeSec = Math.floor((currentTime - startTime) / 1000);
      const countTimeMin = Math.floor((currentTime - startTime) / (1000 * 60));
      const countTimeHour = Math.floor((currentTime - startTime) / ((1000 * 60) * 60));
  return (
    <>
     <div className="comment">
     <div className="post-owner">
            <img src={profile} alt="profile-image" />
            <div className="owner">
            <a href="https://www.facebook.com/profile.php?id=100087430404639">{input}</a>
            <i>{countTimeHour}Hour, {countTimeMin}Min, {countTimeSec}Sec </i>
            </div>
          </div>
          <div className="text">
            <p>{input1}</p>
          </div>
          <hr />
     </div>
    </>
  )
}

export default Comments