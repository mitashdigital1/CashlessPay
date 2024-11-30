import people from "..//../assets/bussines/people.png"
import bank from "..//../assets/bussines/bank.png"
import telegram from "..//../assets/bussines/telegram.png"
import globe from "..//../assets/bussines/globe.png"
import '../../Css/Business/B_Eight.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const B_Eight = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="contanier">
            <div className='Eight'>
                <div className="main-Eight">
                    <div className="eight-first">
                        <h1>&nbsp;{t("B-eight-ln1")} </h1> </div>
                    <div className="cardgroup">
                        <div className="card"><div className="img"><img src={people} alt="" /></div>
                            <p style={{ textAlign: 'left' }}>{t("B-eight-ln2")} <br />{t("B-eight-ln3")} </p></div>
                        <div className="card"><div className="img"><img src={bank} alt="" /></div>
                            <p style={{ textAlign: 'left' }}>{t("B-eight-ln4")} <br />{t("B-eight-ln5")} </p></div>
                        <div className="card"><div className="img"><img src={telegram} alt="" /></div>
                            <p style={{ textAlign: 'left' }}>{t("B-eight-ln6")}</p></div>
                        <div className="card"><div className="img"><img src={globe} alt="" /></div>
                            <p style={{ textAlign: 'left' }}>{t("B-eight-ln7")} <br />{t("B-eight-ln8")} </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B_Eight