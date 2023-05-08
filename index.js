`use strict`;
function onSubmitbuttonClickedFunction() {
  console.log(`click`);
}

const submitEl = document.getElementById(`estimateCost`);
submitEl.onclick = onSubmitbuttonClickedFunction;

function getRoomRate(checkInDate, roomType) {
  const monthNumber = checkInDate.getMonth();
  const isOnSeason = monthNumber >= 5 && monthNumber <= 7;
  let roomRate = 150;
  if (isOnSeason) {
    roomRate = 250;
    if (roomType == `suite`) {
      roomRate = 350;
    }
  } else{
   if ( roomType == `suite`) {
    roomRate = 210;
   }
  }
  console.log(`roomRate`, roomRate);
  return roomRate;
  //const isOnSeason =
}

const onseasonDate = new Date(`2023-07-01`);
const offseasonDate = new Date(`2023-02-01`);
getRoomRate(onseasonDate);
getRoomRate(onseasonDate,'suite');
getRoomRate(offseasonDate);
getRoomRate(offseasonDate,`suite`);
