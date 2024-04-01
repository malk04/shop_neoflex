import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {useState} from "react";

const App = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || {})
    const [count, setCount] = useState(getCount(cart) || 0)

    function addToCart(id) {
        let cartCopy = cart
        if (id in cartCopy) {
            cartCopy[id] += 1
        } else {
            cartCopy[id] = 1
        }
        setCart(cartCopy)
        setCount(getCount(cartCopy))
        localStorage.setItem("cart", JSON.stringify(cartCopy))
    }

    function getCount(data) {
        let count = 0;
        for (let key in data) {
            count += data[key];
        }
        return count
    }

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

  return (
    <div className="App">
        <div className="container">
            <Header cart={cart} count={count}/>
            <div>
                <div className="section">Наушники</div>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                    {data.headphones.map(el => <Card data={el} onBuy={addToCart} />)}
                </div>
            </div>
            <div>
                <div className="section">Беспроводные наушники</div>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                    {data.wireless.map(el => <Card data={el} onBuy={addToCart} />)}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
