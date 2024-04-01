import {observer} from "mobx-react-lite";
import {useState} from "react";

const Card = observer(({data, onBuy}) => {
    const [flag, setFlag] = useState(JSON.parse(localStorage.getItem('cart')) && data.id in JSON.parse(localStorage.getItem('cart')))
    return (
        <div className="card">
            <div style={{display: "flex"}}>
                <div style={{margin: "auto"}}>
                    <img src={process.env.PUBLIC_URL + data.img} alt={data.id}/>
                </div>
            </div>
            <div className="description">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>{data.name}</div>
                    <div>
                        <div className="yellow">{data.price + " ₽"}</div>
                        {data.discountedPrice &&
                            <div className="discounted-price">
                                {data.discountedPrice + " ₽"}
                            </div>}
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex"}}>
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z"
                                fill="#FFCE7F"/>
                        </svg>
                        <div style={{marginTop: 2, marginLeft: 5}}>{data.rate}</div>
                    </div>
                    <div className="linkScale" onClick={() => {
                        if (onBuy instanceof Function && !flag){
                            onBuy(data.id)
                            setFlag(true)
                        }
                    }}>{flag ? "В корзине" : "Купить"}</div>
                </div>
            </div>
        </div>
    );
})

export default Card;
