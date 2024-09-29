var products = [
    {name: "Sofa Chair", headline: "Comfortable and shining.", price: "12,000", image: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Wooden Chair", headline: "Look polishable.", price: "10,000", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Traditional Chair", headline: "Looks very old.", price: "16,500", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww"}
]

function showCards(){
    var clutter = "";
    products.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
            <img class="w-full h-full object-cover" src="${product.image}" />
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2"> &#8377 ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
    })
    document.querySelector(".products").innerHTML = clutter;
}

var cart = [];
function addToCart(){
    document.querySelector(".products").addEventListener("click",function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index]);
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(product, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                <img class="w-full h-full object-cover" src="${product.image}" />
            </div>
            <div>
                <h3 class="font-semibold">${product.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">&#8377 ${product.price}</h5>
            </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

showCart();
addToCart();
showCards();