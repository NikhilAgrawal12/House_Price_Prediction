function getSelectValue(){
    var sqm = 0;
    var bedrooms = document.getElementById("bedroom").value;
    var bathrooms = document.getElementById("bathrooms").value;
    var cars = document.getElementById("cars").value;
    var condition = document.getElementById("condition").value;
    var heatingQuality = document.getElementById("heatingQuality").value;
    var kitchenQuality = document.getElementById("kitchenQuality").value;
    var sqm = document.getElementById("sqm").value;
    totalPrice = -2012502 + (34415.2 * condition) + (111610 * heatingQuality) + (16447.7 * sqm) + (105166 * bathrooms) - (241039 * bedrooms) + (645464.5 * kitchenQuality) + (507545.2 * cars);
    console.log(totalPrice);
    

    totalPrice = totalPrice.toLocaleString('en-US');
    if (sqm == 0){
      totalPrice = 0;
      condition = 0;
      kitchenQuality = 0;
      heatingQuality = 0;
      bedrooms = 0;
      bathrooms = 0;
      cars = 0;
    }
    document.getElementById("description").innerHTML = "Number of Bedrooms: " + bedrooms + "<br Number of Bathrooms: " + bathrooms + "<br> Number of Cars in Garage: " + cars + "<br> House condition: " + condition + "<br> Heating Quality: " + heatingQuality + "<br> Sqm Surface: " + sqm + " m2 <br> Kitchen Quality: " + heatingQuality + " <br> Total price: " +   totalPrice + " MXN <p>";
    document.getElementById("price").innerHTML =  totalPrice + " MXN";
    }


    
