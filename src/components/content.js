import React from "react"


const Content = ({ content }) => (
    <>
        {content.map((step,index)=><div className='step'>{`${index+1}. ${step}`}</div>)}
    </>
)

export default Content
 