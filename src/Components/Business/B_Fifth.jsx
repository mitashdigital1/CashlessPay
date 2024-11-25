import React from 'react'
import '../../Css/Business/B_Fifth.css'
import { Link } from 'react-router-dom';

const B_Fifth = () => {
    return (
    <div class="container">
        <div class="left-section">
            <h1>Grow Your Business Today</h1>
            <p>
                Join Blaze to experience instant and secure payments. Signing up is free and simple,
                opening doors to a whole new market of potential customers.
            </p>
        </div>
        <div class="right-section">
            <div class="step blckline">
                <div className='points'>01</div>
                <h4>Provide Information About Your Business</h4>
                <p>
                    Be among the first to benefit by signing a letter of intent. We'll make it easy for
                    you to integrate Blaze into your business as soon as possible.
                </p>
            </div>
            <div class="step blckline">
                <div className='points'>02</div>
                <h4>We'll Create Your Business Profile</h4>
                <p>
                    When you join Blaze, your business will be featured in our app to help travellers and
                    locals discover you.
                </p>
            </div>
            <div class="step">
                <div className='points'>03</div>
                <h4>Charge Your Customers With Blaze</h4>
                <p>
                    Expand your customer base, receive payments from foreigners and locals. Accept tips
                    directly on the app and grow your business.
                </p>
            </div>
            <Link to="/contact">
                <button>Contact Us to Get Started</button>
            </Link>
        </div>
    </div>
    )
}

export default B_Fifth