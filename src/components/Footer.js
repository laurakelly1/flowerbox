const Footer = () => {
    return (
      <div className="footer">
        <div className="footerLeft">
            <a href="#" className="footerIcon"></a>
            <img className="footerImage" src="https://i.imgur.com/KxfWH9J.png"></img>
            <p className="logoTitle">FLOWERBOX | EST 2019</p>
            <div className="logos">
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            </div>
        </div>
        <div className="footerMiddle">
            <h4 className="footerTitle">customer service</h4>
            <a href="#">SATISFACTION COMMITMENT</a>
            <a href="#">DELIVERY POLICIES</a>
            <a href="#">CANCELLATIONS</a>
            <a href="#">RETURNS POLICY</a>
        </div>
        <div className="footerRight">
            <h4 className="footerTitle">flowerbox</h4>
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">CAREER OPPORTUNITIES</a>
            <a href="#">MORE INFORMATION</a>
        </div>
      </div>
    );
  };

export default Footer;