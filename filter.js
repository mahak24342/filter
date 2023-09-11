const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];
  
  const PC=document.querySelector(".products")
  const SearchInput=document.querySelector(".search")
  const CategoriesContainer=document.querySelector(".cats")
  const PR=document.querySelector(".range")
  const Value=document.querySelector(".priceValue")
  const displayProducts=(filteredProducts)=>{
    PC.innerHTML=filteredProducts.map((product)=>
        `
        <div class="product">
           <img
           src=${product.img}
           alt=""
           />
           <span class="name">${product.name}</span>
           <span class="priceText">$${product.price}</span>
         </div>
     `
    ).join("");
  }
  displayProducts(data)
  SearchInput.addEventListener("keyup",(e)=>{
    const value=e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value)!==-1))
    }else{
        displayProducts(data)
    }
  })
  const set=()=>{
    const AllCats=data.map(item=>item.cat)
    const category=[
        "All",...AllCats.filter((item,i)=>{
            return AllCats.indexOf(item)===i;
        })
    ]
    CategoriesContainer.innerHTML=category.map(cat=>
        `
        <span class="cat">${cat}</span>
        `
        )
        .join("");
        CategoriesContainer.addEventListener("click",(e)=>{
            const Select=e.target.textContent;
            Select==="All"?displayProducts(data):displayProducts(data.filter(item=>
                item.cat===Select))
        })
  }
  set();
 const setPrices=()=>{
const priceList=data.map((item)=>
    item.price
)
const minPrice=Math.min(...priceList)
const maxPrice=Math.max(...priceList)
PR.min=minPrice
PR.max=maxPrice
PR.value=maxPrice
Value.textContent="$"+maxPrice
PR.addEventListener("input",(e)=>{
    Value.textContent="$"+e.target.value;
    displayProducts(data.filter(item=>item.price<=e.target.value))
})
}
setPrices();