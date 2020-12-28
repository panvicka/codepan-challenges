console.log("it works");
const controls = document.querySelector(".controls");
const result = document.querySelector(".result");

const items = [];

function createItem(type, mood, title, author="", link="", img="") {
  const item = {
    type,
    mood,
    title,
    author,
    link,
  };
  items.push(item);
}

window.onload = () => {

  createItem("movie", "funny", "Bad Santa", undefined, "https://www.youtube.com/watch?v=xQvaoRScND4" ); 
  createItem("movie", "sad", "How The Grinch Stole Christmas", undefined, "https://www.youtube.com/watch?v=pbFma8Bd-AI&ab_channel=UniversalPictures")
  createItem("movie", "scary", "Silent Night, Deadly Night – Christmas Slasher", undefined, "https://www.youtube.com/watch?v=RhLw3GmHQqA&ab_channel=MovieclipsTrailers");
  createItem("movie", "action", "On Her Majesty’s Secret Service", undefined, "https://www.youtube.com/watch?v=dOLq5Rg9N-c&ab_channel=MovieclipsClassicTrailers");
  createItem("movie", "romantic", "Love Actually", undefined, "https://www.youtube.com/watch?v=H9Z3_ifFheQ&ab_channel=MovieclipsClassicTrailers");

  createItem("song", "funny", "Present Face", "Garfunkel and Oates", "https://www.youtube.com/watch?v=yMWTs0YT928&feature=emb_logo&ab_channel=GarfunkelAndOates");
  createItem("song", "sad", "Christmas Makes Me Cry", "Kacey Musgraves", "https://www.youtube.com/watch?v=r7WmnasLzr8&ab_channel=KaceyMusgravesVEVO");
  createItem("song", "scary", "Carol of the Bells - Dark Christmas Song", "Myuu", "https://www.youtube.com/watch?v=yKdjSUEHaJ0&ab_channel=Myuu");
  createItem("song", "action", "The Night Santa Went Crazy", "Weird Al' Yankovic","https://www.youtube.com/watch?v=0FJU4GrXztE&feature=emb_logo&ab_channel=%22WeirdAl%22Yankovic-Topic");
  createItem("song", "romantic", "All I Want for Christmas Is You", "Mariah Carey","https://www.youtube.com/watch?v=aAkMkVFwAoo&ab_channel=MariahCareyVEVO");

  createItem("book", "funny", "The Stupidest Angel: A Heartwarming Tale of Christmas Terror", "Christopher Moore", "https://www.amazon.com/Stupidest-Angel-Heartwarming-Christmas-Terror/dp/0060842350");
  createItem("book", "sad", "The Fir Tree", "Hans Christian Andersen", "https://www.amazon.com/Fir-Tree-Hans-Christian-Andersen/dp/039957848X/ref=sr_1_1?dchild=1&keywords=The+Fir+Tree&qid=1608739844&s=books&sr=1-1");
  createItem("book", "scary", "The Winter Ghosts", "Kate Mosse", "https://www.amazon.com/Winter-Ghosts-Kate-Mosse-ebook/dp/B004IYITVQ/ref=sr_1_1?dchild=1&keywords=The+Winter+Ghosts&qid=1608739923&s=books&sr=1-1");
  createItem("book", "action", "Merry Christmas", "Alex Cross", "https://www.amazon.com/Merry-Christmas-Cross-James-Patterson/dp/1455544957/ref=sr_1_1?dchild=1&keywords=Merry+Christmas%2C+Alex+Cross&qid=1608739937&s=books&sr=1-1");
  createItem("book", "romantic", "Christmas Shopaholic", "Sophie Kinsella", "https://www.amazon.com/Christmas-Shopaholic-Novel-Sophie-Kinsella/dp/0593132831/ref=sr_1_1?dchild=1&keywords=Christmas+Shopaholic&qid=1608740009&s=books&sr=1-1");

   
 

   
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
