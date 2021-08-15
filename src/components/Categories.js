import React from 'react'

const Categories = ({categories}) => {
    return (
        <section className="card-container">
            {categories.map((tag, index) =>{
                const [text, value] = tag;
                return(
                    <div key={index} className="category-card"><p>{text}</p><span>{value}</span></div>
                )
            })}
        </section>
    )
}

export default Categories
