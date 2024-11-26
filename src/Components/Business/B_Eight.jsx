import people from "..//../assets/bussines/people.png"
import bank from "..//../assets/bussines/bank.png"
import telegram from "..//../assets/bussines/telegram.png"
import globe from "..//../assets/bussines/globe.png"
import '../../Css/Business/B_Eight.css'
const B_Eight = () => {
  return (
    <div className='Eight'>
        <div className="main-Eight">
            <div className="eight-first">
                <h1>&nbsp; Capabilities that provide security and performance</h1> </div>
                <div className="cardgroup">
                    <div className="card"><div className="img"><img src={people} alt="" /></div>
                    <p>Access 24/7
                    customer support</p></div>
                    <div className="card"><div className="img"><img src={bank} alt="" /></div>
                    <p>Bank-grade <br />
                    security</p></div>
                    <div className="card"><div className="img"><img src={telegram} alt="" /></div><p>
                    Instant pay-in and
                    pay-out</p></div>
                    <div className="card"><div className="img"><img src={globe} alt="" /></div>
                    <p>Accepted <br />
                    globally</p></div>
                </div>
            </div>
        </div>
  )
}

export default B_Eight