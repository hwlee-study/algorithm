let price = 3,
  money = 20,
  count = 4;
function calculateTheShortfall(price, money, count) {
  let totalAmount = 0;
  for (let i = 1; i <= count; i++) {
    totalAmount += price * i;
  }
  return totalAmount >= money ? totalAmount - money : 0;
}

calculateTheShortfall(price, money, count);
