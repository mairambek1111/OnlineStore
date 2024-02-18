import heroimg from "../../assets/img-hero.png";
import "./hero.css";
function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <div className="hero__img__wrap">
                        <img src={heroimg} alt="" className="hero__img" />
                    </div>
                    <div className="hero__info">
                        <h2 className="hero__title">
                            FIND YOUR NEXT CAR PREMIUM CARS FROM DUBAI
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
