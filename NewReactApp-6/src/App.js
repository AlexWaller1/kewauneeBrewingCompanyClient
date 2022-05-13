import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import RouterLinks from "./components/RouterLinks";
import { useState, useEffect } from "react";

function App() {

  const [userCart, setCart] = useState([]);

  const [userCartNames, setCartNames] = useState([]);

  const [cartCount, setCartCount] = useState({
      buffaloWings: 1,
      stackedNachos: 1,
      barriaTacos: 1,
      potStickers: 1,
      cheeseBurger: 1,
      turkeyClub: 1,
      cowboyRibeye: 1,
      spareRibs: 1,

  });

  const [appetizers, setAppetizers] = useState([
    {
        id: 1,
        name: "Buffalo Wings",
        img: "",
        quantity: 0,
        price: 14.99 ,
        objectKey: "buffaloWings"
    },
    {
        id: 2,
        name: "Ultimate Stacked Nachos",
        img: "",
        quantity: 0,
        price: 12.99 ,
        objectKey: "stackedNachos"
    },
    {
        id: 3,
        name: "Barria Tacos",
        img: "",
        quantity: 0,
        price: 16.99 ,
        objectKey: "barriaTacos"
    },
    {
        id: 4,
        name: "Potstickers",
        img: "",
        quantity: 0,
        price: 17.99 ,
        objectKey: "potStickers"
    }
])

const [mainCourses, setFoodMenu] = useState([
    {
        id: 5,
        name: "Cheese Burger and Fries",
        img: "",
        quantity: 0,
        price: 15.99 ,
        objectKey: "cheeseBurger"
    },
    {
        id: 6, 
        name: "Ultimate Turkey Club",
        img: "",
        quantity: 0,
        price: 12.99,
        objectKey: "turkeyClub"
    },
    {
        id: 7,
        name: "Cowboy Ribeye",
        img: "",
        quantity: 0,
        price: 34.99,
        objectKey: "cowboyRibeye"
    },
    {
        id: 8,
        name: "KBC Spare Ribs",
        img: "",
        quantity: 0,
        price: 24.99,
        objectKey: "spareRibs"
    }
]);

const [desserts, setDesserts] = useState([
    {
        id: 9,
        name: "Vanilla Sundae",
        img: "",
        quantity: 0,
        price: 9.99,
        objectKey: "vanillaSundae"
    },
    {
        id: 10,
        name: "Tiramasu",
        img: "",
        quantity: 0,
        price: 14.99,
        objectKey: "tiramasu"
    },
    {
        id: 11,
        name: "Chocolate Mousse Cake",
        img: "",
        quantity: 0,
        price: 13.99,
        objectKey: "chocolateMousse"
    },
    {
        id: 12,
        name: "Vanilla Lemon Cake",
        img: "",
        quantity: 0,
        price: 12.99,
        objectKey: "lemonCake"
    }
])

const addToCart = (id) => {
    

    let newAppetizer = appetizers.filter(a1 => a1.id == id);

    console.log(newAppetizer)

    let newName = newAppetizer[0].name;

    let cartClone = [...userCart];

    let cartNameClone = [...userCartNames];

    if (!cartNameClone.includes(newName)) {
        cartNameClone.push(newName);
        newAppetizer[0].quantity = newAppetizer[0].quantity + 1;
        setCart([...userCart, ...newAppetizer]);
        setCartNames([...cartNameClone]);
    } else {
          let i = 0;
          for (; i < cartClone.length; i++) {
              if (cartClone[i].name == newName) {
                  cartClone[i].quantity = cartClone[i].quantity + 1;
                  setCart([...cartClone]);
              }
          }
      
    }

    console.log(userCartNames);

    /* 
    
    if (objectClone[newAppetizer[0].objectKey] != undefined) {
      
    }
    
    */

    console.log(newAppetizer);

    

 


}

const takeFromCart = (id) => {
    let currentItem = appetizers.filter(a1 => a1.id == id);

    let currentID = currentItem[0].id;

    let currentQuantity = currentItem[0].quantity;

    let newQuantity = 0;

    let cartClone = [...userCart];

    if (currentQuantity > 0) {
        let i = 0;

        for (; i < cartClone.length; i++) {
            if (currentID == cartClone[i].id) {
                cartClone[i].quantity = cartClone[i].quantity - 1;
                newQuantity = cartClone[i].quantity;
                console.log(newQuantity);
                setCart([...cartClone]);
            }
        }
        
        
    }

    if (newQuantity == 0) {
        console.log("quantity == 0");
        let c2 = cartClone.filter(c1 => c1.quantity != 0);
        setCart([...c2]);
    }
    
   
}

const addToCart2 = (id) => {
    console.log("Main Course Added to Cart", "new", id);

    let newMainCourse = mainCourses.filter(m1 => m1.id == id);

    let newName = newMainCourse[0].name;

    let cartClone = [...userCart];

    let cartNameClone = [...userCartNames];

    if (!cartNameClone.includes(newName)) {
        cartNameClone.push(newName);
        newMainCourse[0].quantity = newMainCourse[0].quantity + 1;
        setCart([...userCart, ...newMainCourse]);
        setCartNames([...cartNameClone]);
    } else {
        let i = 0;
        for (; i < cartClone.length; i++) {
            if (cartClone[i].name == newName) {
                cartClone[i].quantity = cartClone[i].quantity + 1;
                setCart([...cartClone]);
            }
        }
    }

    

    
}


const takeFromCart2 = (id) => {

       let currentItem = mainCourses.filter(m1 => m1.id == id);

       let currentID = currentItem[0].id;

       let currentQuantity = currentItem[0].quantity;

       let newQuantity = 0;

       let cartClone = [...userCart];

       if (currentQuantity > 0) {
           let i = 0;

           for (; i < cartClone.length; i++) {
               if (currentID == cartClone[i].id) {
                   cartClone[i].quantity = cartClone[i].quantity - 1;
                   newQuantity = cartClone[i].quantity;
                   setCart([...cartClone]);
               }
           }
       }
       if (newQuantity == 0) {
           let c2 = cartClone.filter(m1 => m1.quantity != 0);
           setCart([...c2]);
       }
}

const addToCart3 = (id) => {
    console.log("Dessert Added to Cart", "new", id);

    let newDessert = desserts.filter(d1 => d1.id == id);

    let newName = newDessert[0].name;

    let cartClone = [...userCart];

    let cartNameClone = [...userCartNames];

    if (!cartNameClone.includes(newName)) {
        cartNameClone.push(newName);
        newDessert[0].quantity = newDessert[0].quantity + 1;
        setCart([...userCart, ...newDessert]);
        setCartNames([...cartNameClone]);
    } else {
        let i = 0;
        for (; i < cartClone.length; i++) {
            if (cartClone[i].name == newName) {
                cartClone[i].quantity = cartClone[i].quantity + 1;
                
                setCart([...cartClone]);
            }
        }
    }

    

}

const takeFromCart3 = (id) => {
    let currentItem = desserts.filter(d1 => d1.id == id);

    let currentID = currentItem[0].id;

    let currentQuantity = currentItem[0].quantity;

    let newQuantity = 0;

    let cartClone = [...userCart];

    if (currentQuantity > 0) {
        let i = 0;

        for (; i < cartClone.length; i++) {
            if (currentID == cartClone[i].id) {
                cartClone[i].quantity = cartClone[i].quantity - 1;
                newQuantity = cartClone[i].quantity;
                setCart([...cartClone]);
            }
        }
    }
    if (newQuantity == 0) {
        let c2 = cartClone.filter(d1 => d1.quantity != 0);
        setCart([...c2]);
    }
}

const deleteFromCart = (id) => {

  console.log("item deleted from cart");
  
  let cartClone = [...userCart];

  let cartItemArray = cartClone.filter(c1 => c1.id == id);

  let itemName = cartItemArray[0].name;

  if (cartItemArray[0].quantity > 1) {
      let i = 0;
      for (; i < cartClone.length; i++) {
          if (cartClone[i].name == itemName) {
              cartClone[i].quantity = cartClone[i].quantity - 1;
              setCart([...cartClone]);
          } 
      }
  }else {
    let newCart = userCart.filter(u1 => u1.id != id);

    setCart([...newCart]);
  }

  
}



  return (
    <Router>
      <div className="App">
      {/* <div className="container-lg"> */}
        
      <Header text="Kewaunee Brewing Company" />
      
     
      
      <NavLinks />

      <RouterLinks userCart={userCart} userCartNames={userCartNames} cartCount={cartCount} appetizers={appetizers} mainCourses={mainCourses} desserts={desserts} addToCart={addToCart} takeFromCart={takeFromCart} addToCart2={addToCart2} takeFromCart2={takeFromCart2} addToCart3={addToCart3} takeFromCart3={takeFromCart3} deleteFromCart={deleteFromCart}/>
      {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
