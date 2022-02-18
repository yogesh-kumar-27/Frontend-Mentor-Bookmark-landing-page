import React from 'react'

const Heading = ({title,text}) => {
    return (
        <section className="heading">
        <div className="content">
          <h1>{title}</h1>
         <div className="para">
         <p>
           {text}
          </p>
         </div>
        </div>
      </section>
    )
}

export default Heading