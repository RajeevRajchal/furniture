import React from 'react'

const KnowWood = () => {
    return (
        <>
            <div className="section-title">
                Know Woods
        </div>
            <div className="section-subtitle">
                There are many types of woods existing.
        </div>
            <div className="knowwood-body d-flex justify-between">
                <div className="knowwood-image">
                    <img src="https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678_1280.jpg" alt=""/>
                </div>
                <div className="knowwood-text-area">
                    <div className="section-tile">
                        Sal Wood
                        <div className="origial-name">
                            (Shorea robusta)
                        </div>
                    </div>
                    <div className="knowwood-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quidem totam aliquam 
                        ipsam natus officia voluptatibus, rem, corporis dicta eum, perspiciatis sequi
                    </div>
                    <button className="btn light"> Explore More </button>
                </div>
            </div>
        </>
    )
}

export default KnowWood
