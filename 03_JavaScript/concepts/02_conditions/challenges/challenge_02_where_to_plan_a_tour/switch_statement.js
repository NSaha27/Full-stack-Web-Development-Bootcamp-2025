const dateOfTour = document.getElementById("dateOfTour");

function checkTouristPlace(){
  const visitingMonth = Number(new Date(dateOfTour.value).getMonth());
  let placeToVisit = "";

  switch(visitingMonth){
    case 3:
    case 4:
    case 5:
      placeToVisit = "Shimla, Manali, Ooty, Darjeeling, Gangtok, Munnar, Ladakh, Kashmir, etc.";
      break;
    case 6:
    case 7:
    case 8:
      placeToVisit = "Munnar, Coorg, Meghalaya, Vally of Flowers(Uttarakhand), Goa, Puduchery, etc.";
      break;
    case 9:
    case 10:
      placeToVisit = "Rajasthan, Agra, Amritsar, Andaman and Nicobar Island, Himachal Pradesh, Rishikesh, Goa, Rann of kutch, Varanasi, etc.";
      break;
    case 11:
    case 0:
    case 1:
    case 2:
      placeToVisit = "Manali, Gulmarg(Kashmir), Auli(Uttarakhand), Jaipur(Rajasthan), Jaisalmer(Rajasthan), Varanasi(Uttar Pradesh), Agra(Uttar Pradesh), Kerala, Andaman and Nicobar Island, etc.";
      break;
    default:
      placeToVisit = "";
    }

    document.getElementById("message").textContent = placeToVisit.length > 0 ? `You may visit to ${placeToVisit} during this time.` : "*** invalid date";
}