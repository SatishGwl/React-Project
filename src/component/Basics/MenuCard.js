import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log('==menuData==', menuData);
    return (
        <>
        <section className="main-card--cointainer">
        {
                menuData.map((currentElem, index) => {
                    return (
                        <>
                            <div className="card-container" key={currentElem.id}>
                                <div className="card">
                                    <div className="card-body">
                    <span className="card-number card-circle subtle">{currentElem.id}</span>
                    <span className="card-author subtle">{currentElem.name}</span>
                                        <h2 className="card-title">{currentElem.name}</h2>
                                        <span className="card-description subtle">I Love Maggie,  Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    {/* <img src={image} alt="images" className="card-media" /> */}
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>
        </>
    )
}

export default MenuCard
