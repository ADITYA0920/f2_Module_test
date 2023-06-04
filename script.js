 async function  fetchData(){
    
    try {
        
        const response = await fetch('https://sandeep836.github.io/json/food.json');
        const data = await response.json();
    
        // console.log(data);

        // data.forEach(item => {
        //     console.log(`Name: ${item.name}`);
        //     console.log(`Price: ${item.price}`);
        //     console.log(`Description: ${item.description}`);
        //     console.log('------------');
        //   });
        
        display(data) ;
        // return data ;

      } catch (error) {
    
        console.log('Error fetching data:', error);
      }

}


const container  = document.getElementsByClassName("right")[0] ;


// onclick events ;

//helper function
function display(fetcheddata){
    fetcheddata.forEach(item => {
        console.log(item);
        console.log(item);
        const child = document.createElement("div");
        child.innerHTML = `
        <div class="mini">
        <p>No.${item.id}<p>
        <img src="${item.imgSrc}" alt="img">
        <p>${item.name}</p>
        <p>Prize:${item.price}</p>
    </div>
        ` ;
        container.appendChild(child) ;
  });
}






function getMenu(){
    container.innerHTML = `` ;
    fetchData() ;

    // const fetchedData = fetchData() ;
    
    // console.log("getMenu clicked");
    // fetcheddata.forEach(item => {
    //         console.log(item);
    //         console.log(item);
    //         const child = document.createElement("div");
    //         child.innerHTML = `
    //         <div class="mini">
    //         <p>${item.id}<p>
    //         <img src="${item.imgSrc}" alt="img">
    //         <p>${item.name}</p>
    //         <p>${item.price}</p>
    //     </div>
    //         ` ;
    //         container.appendChild(child) ;
    //   });


      
    // for( let i  =0 ;  i < fetchedData.length; i ++){

    //      let item = fetchedData[i] ;
    //      console.log(item);

    // //     console.log("getMenu clicked");
    //     const child = document.createElement("div");
    //     child.innerHTML = `
    //     <div class="mini">
    //     <p>${item.id}<p>
    //     <img src="${item.imgSrc}" alt="img">
    //     <p>${item.name}</p>
    //     <p>${item.price}</p>
    // </div>

    //     ` ;
    //     container.appendChild(child) ;
    //  }

        
}



//02
function takeOrder(){
    container.innerHTML ='<h1 class ="thankU">Taking Order wait! .......</h1>' ;
    setTimeout(() => {
        container.innerHTML ='<h1 class ="thankU">DONE</h1>' ;
    },2000);
    console.log("takeOrder clicked");

    const burgers = ['Cheeseburger', 'Chicken Burger', 'Mushroom Burger'];
  
  return new Promise(resolve => {
    setTimeout(() => {
      const randomBurgers = GETRANDOM(burgers);
      console.log(randomBurgers);
      resolve({ burgers: randomBurgers });
    }, 2500);
  });

function GETRANDOM(burgers){
     let burg =[];

     for(let i = 0 ; i < 3 ; i++){
        burg.push(burgers[i]) ;
        console.log(burgers[i]) ;
     }

     return burg ;
}

}



//03
function orderPrep(){
    container.innerHTML ='' ;
    console.log("orderPrep clicked");

    container.innerHTML = `
    <h1 class ="thankU">order_status: true</h1>
    <h1 class ="thankU">Please do payment !!!</h1>
    ` ;

    return  new Promise(resolve => {
        setTimeout(() => {
          resolve({ order_status: true, paid: false });
        }, 1500);
      });
     
    
}




//04
function payOrder(){
    container.innerHTML ='' ;
    setTimeout(() => {
         container.innerHTML ='<h1 class ="thankU">thankyou for eating with us today!</h1>' ;
         thankYou();
    },2000)
   
    
    console.log("payOrder clicked");
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve ({order_status:true , paid:true})
        }, 1500);
    })
    
}



//05
function thankYou(){
    alert("thankyou for eating with us today!");
}