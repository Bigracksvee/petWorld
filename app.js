
var shop = [
    {
    title: "Giraffe",
    img:"giraffe.jpg",
   price: "80,000",
  description: "Tall Giraffe"
   },
  
   {
    title: "Elephant",
    img:"big.jpg",
   price: "80,000",
  description: "Adult African Elephant"
   },

   {
    title: "Lion",
    img:"lion.jpg",
   price: "500-3,000",
  description: "Male lion"
   },


   {
    title: "Zebra",
    img:"zebra.jpg",
   price: "3,000-7000",
  description: "African Zebra"
   },

   {
    title: "Polar Bear",
    img:"polar.jpg",
   price: "420,000",
  description: "White Bear"
   },

   {
    title: "Ostrich",
    img:"neck.jpg",
   price: "100-14,000",
  description: "Tall Neck Bird"
   },

   {
    title: "Tiger",
    img:"tiger.jpg",
   price: "7,500",
  description: "Big Tiger"
   },

   {
    title: "Chimpanzee",
    img:"chimp.jpg",
   price: "60,000",
  description: "Chimp"
   },

   {
    title: "Cheetah",
    img:"cheat.jpg",
   price: "1000-2000.",
  description: "Big Cat"
   },
    ]

    var postHTML = " "





























    for (var i=0; i < shop.length ; i++){
        var heading = '<div class="product card col-lg-3 " style="18rem"' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].img + '" class= "card-img-top" style="width: 200px">'
        var price = '<p class="card-body"> $' + shop[i].price + '</p></span>'
        var description = '<div class="card-text "><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML