import React from "react";
import Product from "../Product/Product";
import "./Product.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <div className="products_row">
          <Product
            id="1"
            title="Milex MNM003GR Nutri1200 8 in 1 Nutritional Blender, Grey"
            image="https://m.media-amazon.com/images/I/71cXVXFwd5L._AC_SX425_.jpg"
            rating={5}
            price="$1,099."
          />
          <Product
            id="2"
            title="Swan Retro Cordless Kettle with Water Temperature Gauge, 1.7 Liter Capacity, Grey"
            image="https://m.media-amazon.com/images/I/614pqMVDucL._AC._SR360,460.jpg"
            price="$949."
            rating={4}
          />
          <Product
            id="1"
            title="Nespresso Inissia Coffee Machine, Red"
            image="https://m.media-amazon.com/images/I/61jGyjKOLEL._AC_SY300_SX300_.jpg"
            rating={5}
            price="$1,399"
          />
          <Product
            id="2"
            title="Philips 3000 Series Digital Large 13 in 1 Cooking Functions Airfryer, 4.1 Liter Capacity, White"
            image="https://m.media-amazon.com/images/I/51jL4JMwQoL._AC._SR360,460.jpg"
            price="$1,350."
            rating={4}
          />
        </div>
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Apple iPhone 15 Pro Max (256 GB) - Blue Titanium"
          image="https://m.media-amazon.com/images/I/815eN0AS-CL._AC_SX679_.jpg"
          price="$29,999"
          rating={6}
        />
        <Product
          id="1"
          title="Apple AirPods Pro (2nd generation) with MagSafe Case (USB‑C)​​​​​"
          image="https://m.media-amazon.com/images/I/61SUj2aKoEL._AC._SR360,460.jpg"
          price="$4,999"
          rating={5}
        />
        <Product
          id="1"
          title="Belkin 20W PD USB-C Standalone Car Charger (745883816682)"
          image="https://m.media-amazon.com/images/I/41RAe0mLyLL._AC_SY300_SX300_.jpg"
          rating={5}
          price="$43.70"
        />
        <Product
          id="1"
          title="Apple Watch SE (2nd Gen, 2023) (GPS 40mm) Smartwatch with Starlight Aluminum Case with Starlight Sport Band S/M. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display"
          image="https://m.media-amazon.com/images/I/61R+kfxZlgL._AC._SR360,460.jpg"
          rating={5}
          price="$5,499.00"
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Maybelline Hyaluronic Acid Lifter Lip Gloss 5.4 ml, 005 Petal"
          image="https://m.media-amazon.com/images/I/51ZrTSUVzaL._AC._SR360,460.jpg"
          rating={5}
          price="$89"
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Real Techniques Flawless Face Base Makeup Brush Set"
          image="https://m.media-amazon.com/images/I/71KhXRKKuOL._AC._SR360,460.jpg"
          rating={5}
          price="$1,099."
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Philips 3000 Series Digital Large 13 in 1 Cooking Functions Airfryer, 4.1 Liter Capacity, White"
          image="https://m.media-amazon.com/images/I/51jL4JMwQoL._AC._SR360,460.jpg"
          price="$1,350."
          rating={6}
        />
        <Product
          id="1"
          title="Nespresso Inissia Coffee Machine, Red"
          image="https://m.media-amazon.com/images/I/61jGyjKOLEL._AC_SY300_SX300_.jpg"
          price="$1,399"
          rating={5}
        />
        <Product
          id="1"
          title="Milex MNM003GR Nutri1200 8 in 1 Nutritional Blender, Grey"
          image="https://m.media-amazon.com/images/I/71cXVXFwd5L._AC_SX425_.jpg"
          rating={5}
          price="$1,099."
        />
        <Product
          id="1"
          title="Milex MNM003GR Nutri1200 8 in 1 Nutritional Blender, Grey"
          image="https://m.media-amazon.com/images/I/71cXVXFwd5L._AC_SX425_.jpg"
          rating={5}
          price="$1,099."
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Milex MNM003GR Nutri1200 8 in 1 Nutritional Blender, Grey"
          image="https://m.media-amazon.com/images/I/71cXVXFwd5L._AC_SX425_.jpg"
          rating={5}
          price="$1,099."
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Nespresso Inissia Coffee Machine, Red"
          image="https://m.media-amazon.com/images/I/61jGyjKOLEL._AC_SY300_SX300_.jpg"
          price="$1,399"
          rating={5}
        />
      </div>
    </>
  );
};

export default Products;
