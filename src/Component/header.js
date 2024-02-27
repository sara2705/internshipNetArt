import logo from '../Asserts/logo.png'
import trophy from '../Asserts/1.png'
import award from '../Asserts/2.png'
import motors from '../Asserts/3.png'
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div className="d-flex"> 
                <div className="trophy-img"><img src={trophy} alt="trophy" /></div>
                    <div className="align-content">
                        <h5 className="para-align">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                        <ul className="list-align">
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                        <div className="img-award">
                            <img src={award} alt="award" />
                        </div>
                        <p className="para-align">Government of India has awarded the <strong>"National Energy Conservation Award 2018".</strong> Mr. G.Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </div>
                <p className="para-align">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <div className="motor-img"><img src={motors} alt="motors" /></div>
                <p className="para-align">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </p>
                <hr></hr>
                <p className="para-align"><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong> 
</p>
                <p className="para-align">CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</p>
                <div className="footer-margin">
                <div className="footer">
                    <ul>
                        <li> Toll Free:1800 200 1234</li>
                        <li> facebook</li>
                        <li> www.grigroups.com</li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Header