/*
  write a program that will accept details of purchases from a grocery shop and will generate a cash memo (including GST computation)
*/

function generateCashMemo(){
  const noOfItems = Number(prompt("How many items do you want to enter? "));
  if(noOfItems === NaN) generateCashMemo();
  const items = [];
  let grossAmount = 0;
  for(let i = 1; i <= noOfItems; i++){
    const itemName = prompt(`Enter the name of the item no. ${i}`);
    const itemPrice = Number(prompt("Enter the price of the item (in Rupee): "));
    if(itemPrice === NaN) {
      alert("Enter a valid amount!");
      continue;
    }
    const itemQty = Number(prompt("Enter the quantity of the item purchased: "));
    if(itemQty === NaN) {
      alert("Enter a valid quantity!");
      continue;
    }
    items.push({
      itemName: itemName,
      itemPrice: itemPrice,
      itemQty: itemQty,
      amount: itemPrice * itemQty
    });
    grossAmount += (itemPrice * itemQty)
  }
  const cgst = (grossAmount * 9 / 100);
  const sgst = (grossAmount * 9 / 100);
  const totalAmount = Math.round(grossAmount + cgst + sgst);
  items.push({grossAmount: grossAmount, cgst: cgst, sgst: sgst, totalAmount: totalAmount});
  console.table(items);
}