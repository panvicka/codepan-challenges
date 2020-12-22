console.log("it works");
const controls = document.querySelector(".controls");
const result = document.querySelector(".result");

const items = [];

function createItem(type, mood, title, link="") {
  const item = {
    type,
    mood,
    title,
    link
  };
  items.push(item);
}

window.onload = () => {

  createItem("movie", "funny", "Bad Santa"); 
  createItem("movie", "sad", "How The Grinch Stole Christmas "); 
  createItem("movie", "scary", "Silent Night, Deadly Night – Christmas Slasher");
  createItem("movie", "action", "On Her Majesty’s Secret Service");
  createItem("movie", "romantic", "Love Actually");

  createItem("song", "funny", "Present Face", "https://www.youtube.com/watch?v=yMWTs0YT928&feature=emb_logo&ab_channel=GarfunkelAndOates");
  createItem("song", "sad", "Christmas Makes Me Cry", "https://www.youtube.com/watch?v=r7WmnasLzr8&ab_channel=KaceyMusgravesVEVO");
  createItem("song", "scary", "Carol of the Bells - Dark Christmas Song", "https://www.youtube.com/watch?v=yKdjSUEHaJ0&ab_channel=Myuu");
  createItem("song", "action", "'Weird Al' Yankovic -The Night Santa Went Crazy", "https://www.youtube.com/watch?v=0FJU4GrXztE&feature=emb_logo&ab_channel=%22WeirdAl%22Yankovic-Topic");
  createItem("song", "romantic", "Mariah Carey - All I Want for Christmas Is You", "https://www.youtube.com/watch?v=aAkMkVFwAoo&ab_channel=MariahCareyVEVO");

  createItem("book", "funny", "The Stupidest Angel: A Heartwarming Tale of Christmas Terror");
  createItem("book", "sad", "The Fir Tree - Hans Christian Andersen");
  createItem("book", "scary", "The Winter Ghosts - Kate Mosse");
  createItem("book", "action", "Merry Christmas, Alex Cross");
  createItem("book", "romantic", "Christmas Shopaholic -  Sophie Kinsella");

   


   
};


function findRightItem(valueMood, valueType) {
  const retArray = items.filter((item) => {
    return item.mood === valueMood && item.type === valueType;
  });
  console.log(retArray);
  return retArray;
}

function displayItems(ctx, arrayOfItems) {
 
  ctx.innerHTML = "<ul>";
  arrayOfItems.forEach((item) => {
    console.log(item);
    ctx.innerHTML += `<li>${item.title}</li>`;
  });

  ctx.innerHTML += "</ul>";
}

controls.addEventListener("change", () => {
  const valueMood = document.querySelector('input[name="mood"]:checked').value;
  const valueType = document.querySelector('input[name="type"]:checked').value;

  const foundItems = findRightItem(valueMood, valueType);
  if (foundItems.length > 0) {
     displayItems(result, foundItems);
  } else {
    result.innerHTML = "nothing found";
  }
 
 });
