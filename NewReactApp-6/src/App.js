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

  const [userCartNames2, setCartNames2] = useState({});

  const [cartCount, setCartCount] = useState(0)

 

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
]);

const [ales, setAles] = useState([
    {
        id: 13,
        name: "Sturgeon Ale",
        img: "",
        quantity: 0,
        price: 6.99,
        objectKey: "sturgeonAle"
    },
    {
        id: 14,
        name: "The New Denmark",
        img: "",
        quantity: 0,
        price: 8.99,
        objectKey: "theNewDenmark"
    },
    {
        id: 15,
        name: "The De Pere Roundabout",
        img: "",
        quantity: 0,
        price: 4.99,
        objectKey: "theDePereRoundabout"
    },
    {
        id: 16,
        name: "The Snow Bank",
        img: "",
        quantity: 0,
        price: 6.99,
        objectKey: "theSnowBank"
    }
]);

const [lagers, setLagers] = useState([
    {
        id: 17,
        name: "The Double Takeout",
        img: "",
        quantity: 0,
        price: 7.99,
        objectKey: "theDoubleTakeout"
    },
    {
        id: 18,
        name: "Antigo Road",
        img: "",
        quantity: 0,
        price: 6.99,
        objectKey: "antigoRoad"
    },
    {
        id: 19, 
        name: "Fox River Water",
        img: "",
        quantity: 0,
        price: 5.99,
        objectKey: "foxRiverWater"
    },
    {
        id: 20,
        name: "Paper Mill Lager",
        img: "",
        quantity: 0,
        price: 6.99,
        objectKey: "paperMillLager"
    }
]);

const [porters, setPorters] = useState([
    {
        id: 21,
        name: "Quindalee Porter",
        img: "",
        quantity: 0,
        price: 7.99,
        objectKey: "quindaleePorter"
    },
    {
        id: 22,
        name: "Porter Pig",
        img: "",
        quantity: 0,
        price: 6.99,
        objectKey: "porterPig"
    },
    {
        id: 23,
        name: "Egret Pond",
        img: "",
        quantity: 0,
        price: 9.99,
        objectKey: "whiteHeronPond"
    },
    {
        id: 24,
        name: "Blue Heron Lake",
        quantity: 0,
        price: 9.99,
        objectKey: "blueHeronLake"
    }
]);

const [stouts, setStouts] = useState([
    {
        id: 25, 
        name: "West Bend Stout",
        quantity: 0,
        price: 4.99,
        objectKey: "westBendStout"
    },
    {
        id: 26,
        name: "The U.P.",
        quantity: 0,
        price: 8.99,
        objectKey: "up"
    },
    {
        id: 27,
        name: "Night Highway",
        quantity: 0,
        price: 6.99,
        objectKey: "nightHighway"
    },
    {
        id: 28,
        name: "The Local Bar",
        quantity: 0,
        price: 4.99,
        objectKey: "localBar"
    }
]);



const addToCart = (id) => {
    

    let newAppetizer = appetizers.filter(a1 => a1.id == id);

    console.log(newAppetizer)

    let newName = newAppetizer[0].name;

    let cartClone = [...userCart];

    let cartNameClone2 = {...userCartNames2};

    let newCount = cartCount;

    if (cartNameClone2[newName] == undefined) {
        cartNameClone2[newName] = true;
        newAppetizer[0].quantity = newAppetizer[0].quantity + 1;
        setCart([...userCart, ...newAppetizer]);
        setCartNames2({...cartNameClone2});
        newCount++;
        setCartCount(newCount)
    } else {
          let i = 0;
          for (; i < cartClone.length; i++) {
              if (cartClone[i].name == newName) {
                  cartClone[i].quantity = cartClone[i].quantity + 1;
                  setCart([...cartClone]);
                  newCount++;
                  setCartCount(newCount);
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

    let newCount = cartCount;

    if (currentQuantity > 0) {
        let i = 0;

        for (; i < cartClone.length; i++) {
            if (currentID == cartClone[i].id) {
                cartClone[i].quantity = cartClone[i].quantity - 1;
                newQuantity = cartClone[i].quantity;
                console.log(newQuantity);
                setCart([...cartClone]);
                newCount--;
                setCartCount(newCount);
            }
        }
        
        
    }

    if (newQuantity == 0) {
        console.log("quantity == 0");

        let c1 = cartClone.filter(c1 => c1.quantity == 0);

        let newName = c1[0].name;

        let cartNameClone2 = {...userCartNames2};
    
        delete cartNameClone2[newName];

        setCartNames2({...cartNameClone2});

        let c2 = cartClone.filter(c2 => c2.quantity != 0);
        setCart([...c2]);
        
    }
    
   
}

const addToCart2 = (id) => {
    console.log("Main Course Added to Cart", "new", id);

    let newMainCourse = mainCourses.filter(m1 => m1.id == id);

    let newName = newMainCourse[0].name;

    let cartClone = [...userCart];

    let cartNameClone = [...userCartNames];

    let cartNameClone2 = {...userCartNames2};

    let newCount = cartCount;

    if (cartNameClone2[newName] == undefined) {
        cartNameClone2[newName] = true;
        newMainCourse[0].quantity = newMainCourse[0].quantity + 1;
        setCart([...userCart, ...newMainCourse]);
        setCartNames2({...cartNameClone2});
        newCount++;
        setCartCount(newCount);
    } else {
        let i = 0;
        for (; i < cartClone.length; i++) {
            if (cartClone[i].name == newName) {
                cartClone[i].quantity = cartClone[i].quantity + 1;
                setCart([...cartClone]);
                newCount++;
                setCartCount(newCount);
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

       let newCount = cartCount;

       if (currentQuantity > 0) {
           let i = 0;

           for (; i < cartClone.length; i++) {
               if (currentID == cartClone[i].id) {
                   cartClone[i].quantity = cartClone[i].quantity - 1;
                   newQuantity = cartClone[i].quantity;
                   setCart([...cartClone]);
                   newCount--;
                   setCartCount(newCount);
               }
           }
       }
       if (newQuantity == 0) {
           
           let c1 = cartClone.filter(c1 => c1.quantity == 0);

           let newName = c1[0].name;

           let cartNameClone2 = {...userCartNames2};

           delete cartNameClone2[newName];

           setCartNames2({...cartNameClone2});

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

    let cartNameClone2 = {...userCartNames2};

    let newCount = cartCount;

    if (cartNameClone2[newName] == undefined) {
        cartNameClone2[newName] = true;
        newDessert[0].quantity = newDessert[0].quantity + 1;
        setCart([...userCart, ...newDessert]);
        setCartNames2({...cartNameClone2});
        newCount++;
        setCartCount(newCount);
    } else {
        let i = 0;
        for (; i < cartClone.length; i++) {
            if (cartClone[i].name == newName) {
                cartClone[i].quantity = cartClone[i].quantity + 1;
                
                setCart([...cartClone]);
                newCount++;
                setCartCount(newCount);
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

    let newCount = cartCount;

    if (currentQuantity > 0) {
        let i = 0;

        for (; i < cartClone.length; i++) {
            if (currentID == cartClone[i].id) {
                cartClone[i].quantity = cartClone[i].quantity - 1;
                newQuantity = cartClone[i].quantity;
                setCart([...cartClone]);
                newCount--;
                setCartCount(newCount);
            }
        }
    }
    if (newQuantity == 0) {
        let c1 = cartClone.filter(c1 => c1.quantity == 0);

        let newName = c1[0].name;

        let cartNameClone2 = {...userCartNames2};

        delete cartNameClone2[newName];

        setCartNames2({...cartNameClone2});

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

const addBeerToCart = (id, beer) => {
    let beerFilter = beer.filter(b1 => b1.id == id);

    let beerItem = beerFilter[0];

    let beerName = beerItem.name;

    let namesClone = [...userCartNames];

    let cartClone = [...userCart];

    if (!namesClone.includes(beerName)) {
        namesClone.push(beerName);
        cartClone.push(beerItem);
        beerItem.quantity = beerItem.quantity + 1;
    } else {
        beerItem.quantity = beerItem.quantity + 1;

        
    }

    setCart([...cartClone]);
    setCartNames([...namesClone]);
    

    
}

const takeBeerFromCart = (id, beer) => {
    console.log("take beer from cart ");

    let beerItemArray = beer.filter(b1 => b1.id == id);

    

    let beerItem = beerItemArray[0];

    console.log(beerItem);

    console.log(`quantity: ${beerItem.quantity}`);

    console.log(beer);

    let cartClone = [...userCart];

    if (beerItem.quantity > 0) {
        beerItem.quantity = beerItem.quantity - 1;
        setAles([...beer]);

        // let i = 0;

        // for (; i < cartClone.length; i++) {
        //     if (beerItem.id == cartClone[i].id) {
        //         cartClone[i].quantity = cartClone[i].quantity - 1;
        //     }
        // }
        // setCart([...cartClone]);
    }
    if (beerItem.quantity == 0) {
       let newCart = cartClone.filter(item => item.quantity != 0);
       setCart([...newCart]);
       

    }
}



  return (
    <Router>
      <div className="App">
      {/* <div className="container-lg"> */}
        
      <Header text="Kewaunee Brewing Company" />
      
     
      
      <NavLinks userCart={userCart} cartCount={cartCount}/>

      <RouterLinks userCart={userCart} userCartNames={userCartNames} cartCount={cartCount} appetizers={appetizers} mainCourses={mainCourses} desserts={desserts} addToCart={addToCart} takeFromCart={takeFromCart} addToCart2={addToCart2} takeFromCart2={takeFromCart2} addToCart3={addToCart3} takeFromCart3={takeFromCart3} deleteFromCart={deleteFromCart} ales={ales} lagers={lagers} porters={porters} stouts={stouts} addBeerToCart={addBeerToCart} takeBeerFromCart={takeBeerFromCart}/>
      {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
