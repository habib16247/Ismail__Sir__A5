import React, { useState } from 'react'
import "./Comment.css"
import like from "../../assets/image/like.png"
import comment from "../../assets/image/comment.png"
import share from "../../assets/image/share.png"
import habib from "../../assets/image/IMG_794410.jpeg"
import profile from "../../assets/image/profile.png"
import submit from "../../assets/image/submit.png"
import Comments from './Comments'

const CommentSection = () => {
  const [Like, setLike] = useState(0)
  const [Share, setShare] = useState(0)
  const [Comment, setComment] = useState(0)
  const [input, setInput] = useState("")
  const [input1, setInput1] = useState("")
  const [comments, setComments] = useState([])

  const commentHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }


  const addHandler = () => {
    setComments([...comments, {input, input1, timestamp: Date.now()}])
    setInput("")
    setInput1("")
    commentCount()
  }
    console.log(input)
    console.log(input1)

    const likeCount = (e) => {
      e.preventDefault();
      setLike((prev)=> prev + 1)
    }

    const shareCount = (e) => {
      e.preventDefault();
      setShare((prev)=> prev + 1)
    }

    const commentCount = () => {
      setComment((prev) => prev + 1)
    }


  return (
    <>
    <div className="root-container">
        <div className="C-container">
          
            <div className="content">
        <h1>Posts Comment</h1>
            <div className="post-owner">
            <img src={habib} alt="profile-image" />
            <a href="https://www.facebook.com/profile.php?id=100087430404639">MD Habibullah </a>
          </div>
          <p className='arabic-para'>يا إله الكون || علي محمد زاهر إدريس⚘</p>
            <iframe src="https://www.youtube.com/embed/EopCvsDRMUI?si=csnWLIRXbJUIfhBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="react-content">
                  <div className="react-amount">
                  <p>{Like} like</p>
                  <p>{Comment} comment | {Share} share</p>
                  </div>
                  <hr />
                  <div className="react-icons">
                      <span onClick={likeCount}>
                        <img src={like} alt="like-image"/>
                        <a href='#'>Like</a>
                      </span>
                      <label htmlFor="name">
                      <span>
                        <img src={comment} alt="comment-image"/>
                        <a>Comment</a>
                      </span>
                      </label>
                      <span onClick={shareCount}>
                        <img src={share} alt="share-image"/>
                        <a href='#'>Share</a>
                      </span>
                  </div>
                </div>
                <form onSubmit={e => commentHandler(e)} className="comment-container">
                  <div className="commenter">
                    <img src={profile} alt="profile-img" />
                    <input onChange={(e) => setInput(e.target.value)} value={input} id='name' type="text" placeholder='Enter your name....' required />
                  </div>
                  <div className="comment-text">
                    <input onChange={(e) => setInput1(e.target.value)} value={input1} id='input-comment' type="text" placeholder='Enter your comment here....' />
                    <button type='submit' onClick={addHandler} id='submit'><img src={submit} alt="submit" /></button>
                  </div>
                  
                </form>
                {
                  comments.map((comment, i) => <Comments key={i} comment={comment} />)
                }
            </div>
            
           
        </div>
    </div>
    </>
  )
}

export default CommentSection
