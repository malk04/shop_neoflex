import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <div style={{display: "flex", width: "100%"}}>
                    <div style={{margin: "auto", marginTop: 200, fontSize: 34}}>
                        Страница не найдена
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default NotFound;
