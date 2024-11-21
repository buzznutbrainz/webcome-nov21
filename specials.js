const currentDate = new Date();
console.log(currentDate);
const day = currentDate.getDay(); /*0-6 sunday is 0, saturday is 6*/
console.log(day);

if(day==0){
    /*ALTERNATE WAY TO DO BELOW DIRECTIONS: document.getElementById('specialtitle').innerHTML=
    "$9 Deluxe Burger & Fries";*/
    specialtitle.innerHTML = "$9 Deluxe Burger & Fries";
    special_image.src = "images/sunday.jpg";
    specialdescription.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";
}

if(day==1){
    specialtitle.innerHTML = "$12 Chicken Penne Alfredo";
    special_image.src = "images/monday.jpg";
    specialdescription.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included.";
}

if(day==2){
    specialtitle.innerHTML = "$10 Any Small Pizza";
    special_image.src = "images/tuesday.jpg";
    specialdescription.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";
}

if(day==3){
    specialtitle.innerHTML = "35¢ Chicken Wings";
    special_image = "images/wednesday.jpg";
    specialdescription.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that.";
}

if(day==4){
    specialtitle.innerHTML = "$9 Fish and Chips";
    special_image.src = "images/thursday.jpg";
    specialdescription.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!";
}

if(day==5){
    specialtitle.innerHTML = "Half Price Cocktails All Day";
    special_image.src = "images/friday.jpg";
    specialdescription.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price.";
}

if(day==6){
    specialtitle.innerHTML = "$10 Jumbo Greek Salad";
    special_image.src = "images/saturday.jpg";
    specialdescription.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price.";
}