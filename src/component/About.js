import React from 'react'

const About = () => {
  return (
    <div>
      <div className="card container" style={{width: 40+'rem'}}>
  <img src='/public/logo192.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Welcome</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>


    </div>
  )
}

export default About
