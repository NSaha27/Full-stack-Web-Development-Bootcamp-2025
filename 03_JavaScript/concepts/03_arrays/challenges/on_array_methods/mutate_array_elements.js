/*
  Array.push() [Adds a new element at the end of an array]
  --------------------------------------------------------
  1. Declare an array named "citiesVisited" containing "Mumbai", and "Sydney".
      Add "Berlin" to the array using the "push" method.
 */

  // challenge 1
  const citiesVisited = ["Mumbai", "Sydney"];
  citiesVisited.push("Berlin");
  // console.log(citiesVisited);

/*
  Array.pop() [Removes the last element from an array and returns it]
  --------------------------------------------------------------------
  2. You have an array named "teaOrders" with "chai", "iced tea", "matcha", and "earl grey".
      Remove the last element of the array and store it in a variable named "lastOrder";
 */
  // challenge 2
  const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
  const lastOrder = teaOrders.pop();
  // console.log(lastOrder);
  // console.log(teaOrders);

/*
 3. You have an array named "popularTeas" containing "green tea", "oolong tea", and "chai".
    Create a soft copy of this array named "softCopyTeas". 
 */
  // challenge 3
  const popularTeas = ["green tea", "oolong tea", "chai"];
  const softCopyTeas = popularTeas;
  popularTeas.pop();
  // console.log(popularTeas);
  // console.log(softCopyTeas);

/*
  4. You have an array named "topCities" containing "Berlin", "Singapore", and "New York".
      Create a hard copy of this array named "hardCopyCities".
*/
  const topCities = ["Berlin", "Singapore", "New York"];
  // process 1
  // const hardCopyCities = [...topCities];

  // process 2
  const hardCopyCities = topCities.slice(0, topCities.length);

  topCities.pop();
  // console.log(topCities);
  // console.log(hardCopyCities);

/*
  5. You have two arrays: "europeanCities" containing "Paris" and "Rome", and "asianCities" containing "Tokyo", "Bangkok", and "New Delhi". 
      Merge these two arrays into a new array named "worldCities". 
 */
  // challenge 5
  const europeanCities = ["Paris", "Rome"];
  const asianCities = ["Tokyo", "Bangkok", "New Delhi"];
  // const worldCities = [...europeanCities, ...asianCities];
  const worldCities = europeanCities.concat(asianCities);
  console.log(worldCities);
