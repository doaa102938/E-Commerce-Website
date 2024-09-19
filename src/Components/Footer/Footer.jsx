import './Footer.css'
import Pic1 from '/Group.png'
import Pic2 from '/Group2.png'
import Pic3 from '/shipping.png'
import Pic4 from '/customer-support.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div id='Footer'>
            <div className='FeatureSection'>
                <div className='Feature'>
                    <img src={Pic1} />
                    <div className='FeatureSectionText'>
                        <label className='FeatureText1'>High Quality</label>
                        <label className='FeatureText2'>crafted from top materials</label>
                    </div>
                </div>
                <div className='Feature'>
                    <img src={Pic2} />
                    <div className='FeatureSectionText'>
                        <label className='FeatureText1'>Warranty Protection</label>
                        <label className='FeatureText2'>Over 2 years</label>
                    </div>
                </div>
                <div className='Feature'>
                    <img src={Pic3} />
                    <div className='FeatureSectionText'>
                        <label className='FeatureText1'>Free Shipping</label>
                        <label className='FeatureText2'>Order over 150 $</label>
                    </div>
                </div>
                <div className='Feature'>
                    <img src={Pic4} />
                    <div className='FeatureSectionText'>
                        <label className='FeatureText1'>24 / 7 Support</label>
                        <label className='FeatureText2'>Dedicated support</label>
                    </div>
                </div>

            </div>

            <div className='FooterDown'>
                <div className='Furnirodiv'>
                    <h4 id='TitleLogo'>Furniro.</h4>
                    <label className='Address'>400 University Drive Suite 200 Coral Gables,{<br />}
                        FL 33134 USA</label>
                </div>
                <div className='LinkSection'>
                    <h4 className='FooterTitle'>Links</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/#">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='HelpSection'>
                    <h4 className='FooterTitle'>Help</h4>
                    <label >Payment Options</label>
                    <label >Returns</label>
                    <label >Privacy Policies</label>

                </div>
                <div className='NewsletterSection'>
                    <h4 className='FooterTitle' >Newsletter</h4>
                    <div>
                        <input className='EnterEmail' placeholder='Enter Your Email Address' />
                        <button className='btnSubscribe'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className='CopyRight'>
                <hr />
                <label>2023 furino. All rights reverved</label>
            </div>
        </div>

    )
}
export default Footer