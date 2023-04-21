import Slider from "react-slick";

const Allies = () =>{
  let settings = {
    infinite: !0,
    slidesToShow: 3,
    dots: !1,
    autoplay: !0,
    arrows: !0,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1, arrows: !0 }
      }
    ]
  }

  return (
    <div className="aliados">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-xl-12">
          <h2>Compañías que creen en Treeconomy</h2>
        </div>
        <div className="col-xl-12">
          <Slider {...settings} className="slide-aliados">
            <div><img alt="" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy.png"
                className="img-urg lazyload"
                src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy.png"/></div>
            <div><img alt=""
                data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy-Investing.png"
                className="img-urg lazyload"
                src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy-Investing.png"/></div>
            <div><img alt=""
                data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/iNNpulsa-Colombia-Treeconomy-scaled.jpg"
                className="img-urg lazyload"
                src="https://treeconomy.com.co/wp-content/uploads/2020/05/iNNpulsa-Colombia-Treeconomy-scaled.jpg"/></div>
            <div><img alt="" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy-Aliados.png"
                className="img-urg lazyload"
                src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy-Aliados.png"/></div>
          </Slider>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Allies