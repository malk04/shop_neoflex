import Header from "../components/Header";
import Footer from "../components/Footer";
import {useState} from "react";
import CardInCart from "../components/CardInCart";

const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || {})
    const [count, setCount] = useState(getCount(cart) || 0)

    const data = {
        headphones: [
            {
                id: "1",
                img: '../images/1.png',
                name: "Apple BYZ S852I",
                price: 3527,
                discountedPrice: 2927,
                rate: 4.7,
            },
            {
                id: "2",
                img: '../images/2.png',
                name: "Apple EarPods",
                price: 2327,
                rate: 4.5,
            },
            {
                id: "3",
                img: '../images/3.png',
                name: "Apple EarPods",
                price: 2327,
                rate: 4.5,
            },
            {
                id: "4",
                img: '../images/4.png',
                name: "Apple BYZ S852I",
                price: 2927,
                rate: 4.7,
            },
            {
                id: "5",
                img: '../images/5.png',
                name: "Apple EarPods",
                price: 2327,
                rate: 4.5,
            },
            {
                id: "6",
                img: '../images/6.png',
                name: "Apple EarPods",
                price: 2327,
                rate: 4.5,
            }
        ],
        wireless: [
            {
                id: "7",
                img: '../images/7.png',
                name: "Apple AirPods",
                price: 9527,
                rate: 4.7,
            },
            {
                id: "8",
                img: '../images/8.png',
                name: "GERLAX GH-04",
                price: 6527,
                rate: 4.7,
            },
            {
                id: "9",
                img: '../images/9.png',
                name: "BOROFONE BO4",
                price: 7527,
                rate: 4.7,
            }
        ]
    }

    const [itog, setItog] = useState(getSum(cart) || 0)

    function onPlus(id) {
        let cartCopy = cart
        if (id in cartCopy) {
            cartCopy[id] += 1
        } else {
            cartCopy[id] = 1
        }
        setCart(cartCopy)
        setCount(getCount(cartCopy))
        setItog(getSum(cartCopy))
        localStorage.setItem("cart", JSON.stringify(cartCopy))
    }

    function onMinus(id) {
        let cartCopy = cart
        if (cartCopy[id] > 1) {
            cartCopy[id] -= 1
        } else {
            return
        }
        setCart(cartCopy)
        setCount(getCount(cartCopy))
        setItog(getSum(cartCopy))
        localStorage.setItem("cart", JSON.stringify(cartCopy))
    }

    function onDelete(id) {
        let cartCopy = cart
        delete cartCopy[id]
        setCart(cartCopy)
        setCount(getCount(cartCopy))
        setItog(getSum(cartCopy))
        localStorage.setItem("cart", JSON.stringify(cartCopy))
    }

    function getCount(data) {
        let count = 0;
        for (let key in data) {
            count += data[key];
        }
        return count
    }

    function getDataById(id) {
        let res = data.headphones.find(d => d.id === id) || data.wireless.find(d => d.id === id)
        return res
    }

    function getSum(cart) {
        let sum = 0;
        Object.keys(cart).forEach(key => {
            let item = data.headphones.find(d => d.id === key) || data.wireless.find(d => d.id === key)
            sum += cart[key] * item.price;
        })
        return sum
    }

    return (
        <div className="App">
            <div className="container">
                <Header count={count}/>
                <div style={{marginTop: 30}}>
                    <div style={{fontSize: 20, marginBottom: 20}}>Корзина</div>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                        <div>
                            {Object.keys(cart).map((key) =>
                                <CardInCart cart={cart}
                                            onPlus={() => onPlus(key)}
                                            onMinus={() => onMinus(key)}
                                            onDelete={() => onDelete(key)}
                                            data={getDataById(key)}
                                            count={cart[key]}/>
                            )}
                        </div>
                        <div className="total">
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>ИТОГО</div>
                                <div>₽ {itog}</div>
                            </div>
                            <div className="buy"><p>Перейти к оформлению</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;
