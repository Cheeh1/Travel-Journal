import React from 'react'
import location from '../assets/location.png'
function MainContent (props) {

    return (
        <section>
            <div className="main-flex">
                <img src={props.item.img} alt="tourist-img" />
                <div className="sub-main">
                    <div className="location-flex">
                        <img className="main-logo" src={location} alt="logo" />
                        <p className="country">{props.item.country}</p>
                        <a className="main-link" href="http://google.com">View on GoogleMaps</a>
                    </div>
                    <div className="details-flex">
                        <h2 className="main=header">{props.item.name}</h2>
                        <p className="main-txt">{props.item.date}</p>
                        <p className="main-details">{props.item.desc}</p>
                        </div>
                    </div>
                </div>
                <hr className="line"/>
        </section>
    )
}
export default MainContent