var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "tiger", image: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "lion", image: "https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpb258ZW58MHx8MHx8fDA%3D"},
    {name: "elephant", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D"},
    {name: "guitar", image: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpdGFyfGVufDB8fDB8fHww"},
    {name: "beauty", image: "https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5fGVufDB8fDB8fHww"},
    {name: "skin care", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlfGVufDB8fDB8fHww"},
    {name: "cosmetics", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D"},
    {name: "skin", image: "https://images.unsplash.com/photo-1561228987-8e7379dde477?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "bali", image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "heart", image: "https://images.unsplash.com/photo-1538113300105-e51e4560b4aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhcnR8ZW58MHx8MHx8fDA%3D"},
    {name: "gucci", image: "https://images.unsplash.com/photo-1557167668-6eb71e76b603?dpr=1&h=363.1372549019608&w=463&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"},
    {name: "cooking", image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?dpr=1&h=363.1372549019608&w=463&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"},
]

function createCards() {
    var clutter = "";
    arr.forEach(function(obj) {
        clutter += `<div class="box">
        <img class="img cursor-pointer" src="${obj.image}" alt="image"> 
        <div class="caption">Lorem ipsum </div>
    </div>`;
    });

    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function(){
        const filterdArray = arr.filter(obj=>obj.name.toLowerCase().startsWith(input.value));
        var clutter1 = "";
        filterdArray.forEach(function(obj) {
            clutter1 += `<div class="box">
            <img class="img cursor-pointer" src="${obj.image}" alt="image"> 
            <div class="caption">Lorem ipsum </div>
        </div>`
        })

        const searchArray = arr.filter(obj=>obj.name.toLowerCase().startsWith(input.value));
        var clutter2 = "";
        searchArray.forEach(function(obj) {
            clutter2 += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
        if(input.value===''){
            document.querySelector(".searchdata").style.display = "none";
            document.querySelector(".overlay").style.display = "none";
        }
        else{
            document.querySelector(".searchdata").style.display = "block";
            document.querySelector(".overlay").style.display = "block";
        }
        document.querySelector(".container").innerHTML = clutter1;
        document.querySelector(".searchdata").innerHTML = clutter2;

        document.querySelector(".searchdata").addEventListener("click", function(){
            document.querySelector(".searchdata").style.cursor = "pointer";
            document.querySelector(".searchdata").style.display = "none";
            document.querySelector(".overlay").style.display = "none";
        })
    })
}


// function handleSearchFunctionality(){
//     var input = document.querySelector("#searchinput");
//     input.addEventListener("focus", function(){
//         document.querySelector(".overlay").style.display = "block";
//     })
//     input
//     .addEventListener("blur", function(){
//         document.querySelector(".overlay").style.display = "none";
//     })

//     input.addEventListener("input", function(){
//         const filterdArray = arr.filter(obj=>obj.name.toLowerCase().startsWith(input.value));
//         var clutter = "";
        // filterdArray.forEach(function(obj) {
        //     clutter += `<div class="res flex px-8 py-3">
        //     <i class="ri-search-line font-semibold mr-5"></i>
        //     <h3 class="font-semibold">${obj.name}</h3>
        // </div>`
        // })
//         if(input.value===''){
//             document.querySelector(".searchdata").style.display = "none";
//             document.querySelector(".overlay").style.display = "none";
//         }
//         else{
//             document.querySelector(".searchdata").style.display = "block";
//             document.querySelector(".overlay").style.display = "block";
//         }
//         document.querySelector(".searchdata").innerHTML = clutter;
//     })
// }



handleSearchFunctionality();
createCards();