import "./Header.css"
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"

function Header() {
  return (
    <div className="wrap">
      <div className="headerLeft"> {/*Лого и доп текст правой части header*/}
        <img src={logo} className="logo" />
        <div className="box">
          <h1 style={{ margin: "0" }}>modernPC</h1>
          <p style={{ margin: "0" }}>Там, где виртуальные миры становятся реальностью</p>
        </div>

      </div>
      <div className="headerRight"> {/*Корзина и остальные элементы правой части header*/}
        <img src={cart} className="cart" />
        <h4>0 руб.</h4>
      </div>
    </div>
  );
}

export default Header;