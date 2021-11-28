// write your CatList component here
import React from 'react'

export default function CatList(props) {
    console.log(props)
    return (
        <div>
            {props.catPics.map(catImg =>{
                
                return(<img src={catImg.url}></img>)
            })}
        </div>
    )
}
