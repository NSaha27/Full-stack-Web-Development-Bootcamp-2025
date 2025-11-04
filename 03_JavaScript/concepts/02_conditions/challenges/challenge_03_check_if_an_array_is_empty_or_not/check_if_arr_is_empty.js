// const touristPlaces = [];
const touristPlaces = ["Shimla", "Ooty", "Darjeeling", "Gangtok", "Ladakh", "Kashmir", "Munnar", "Coorg", "Meghalaya", "Vally of Flowers(Uttarakhand)", "Goa", "Puduchery", "Manali", "Gulmarg(Kashmir)", "Auli(Uttarakhand)", "Jaipur(Rajasthan)", "Jaisalmer(Rajasthan)", "Varanasi(Uttar Pradesh)", "Agra(Uttar Pradesh)", "Kerala", "Andaman and Nicobar Island"]

if(touristPlaces.length > 0){
  console.log("you can choose a tourist destination among the following - " + touristPlaces.join(", "));
}else{
  console.log("sorry, no tourist destionation is available for suggestion!");
}