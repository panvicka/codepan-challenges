const year = 2022;
// months are 0-indexed
const month = 1;

const moveEventIn = styled.keyframes`
  from {
    transform: scale(0.5) translateY(50px);
    opacity: 0;
  }
  to {
    transform: scale(1.1) translateY(-70px);
    opacity: 1;
    background-color: rgba(255,255,255, 0.7);
  }
`;

const moveEventOut = styled.keyframes`
  from {
    transform: scale(1.1) translateY(-70px);
    opacity: 1;
  }
  to {
    transform: scale(0.5) translateY(50px);
    opacity: 0;
  }
`;

const moveDateIn = styled.keyframes`
  from {
    transform: scale(0.5) translateY(50px);
  }
  to {
    transform: scale(1) translateY(0px);
  }
`;

const moveDateOut = styled.keyframes`
  from {
    transform: scale(1) translateY(0px);
  }
  to {
    transform: scale(0.5) translateY(50px);
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding: 2em;
`;

const DayContainer = styled.div`
  margin: 0.3em;
  height: 150px;
  width: 180px;
  position: relative;
  background-size: 300%;
 
  
  &:before {
    border-radius: 5px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.image}) no-repeat center`};
    filter: grayscale(80%);
    background-size: 300%;
    transition: 0.5s filter linear, 0.5s -webkit-filter linear;
  }

  &:hover:before {
    filter: none;
  }
`;

const WeekDay = styled.div`
  color: black;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: absolute;
  text-align: center;
  font-weight: bolder;
  width: 100%;
  transition: opacity 0.3s linear;
  background-color: rgba(255,255,255, 0.7);
  height: 1.3em;
  padding-top: 0.2em;

  ${DayContainer}:hover & {
    opacity: 0;
  }
`;

const DayNumber = styled.div`
  color: black;
  position: absolute;
  font-size: 9.7em;
  width: 100%;
  text-align: center;
  bottom: -0.25em;
  animation-name: ${moveDateIn}
  animation-duration:0.4s;
  animation-fill-mode: forwards;

  ${DayContainer}:hover & {
    animation-name: ${moveDateOut}
    animation-duration: 0.4s;    
    animation-fill-mode: forwards;
  }
`;

const Event = styled.div`
  font-weight: bolder;
  font-size: 1.2em;
  position: absolute;
  padding: 0.5em;
  padding-top: 0.8em;
  width: 100%;
  top: 70px;
  text-align: center;
  animation-name: ${moveEventOut}
  animation-duration:0.4s;
  animation-fill-mode: forwards;
  

  ${DayContainer}:hover & {
    animation-name: ${moveEventIn}
    animation-duration: 0.4s;    
    animation-fill-mode: forwards;
  }
`;

const data = [
  {
    date: new Date(year, month, 1),
    event: "Dark Chocolate Day",
    picture:
      "https://images.unsplash.com/photo-1623660053975-cf75a8be0908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    date: new Date(year, month, 2),
    event: "Groundhog Day",
    picture:
      "https://images.unsplash.com/photo-1506370773512-eeb3450fd848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    date: new Date(year, month, 3),
    event: "Carrot Cake Day",
    picture:
      "https://images.unsplash.com/photo-1601493700750-58796129ebb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnJvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    date: new Date(year, month, 4),
    event: "Wear Red Day",
    picture:
      "https://images.unsplash.com/photo-1554103494-90f9e0883a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    date: new Date(year, month, 5),
    event: "Weatherperson's Day",
    picture:
      "https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80",
  },
  {
    date: new Date(year, month, 6),
    event: "Chopsticks Day",
    picture:
      "https://images.unsplash.com/photo-1544621678-f17b5b909559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    date: new Date(year, month, 7),
    event: "Periodic Table Day",
    picture:
      "https://images.unsplash.com/photo-1628864005140-7770b9b8e7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    date: new Date(year, month, 8),
    event: "Kite Flying Day",
    picture:
      "https://images.unsplash.com/photo-1596148810820-a4e9219ed863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  },
  {
    date: new Date(year, month, 9),
    event: "Pizza Day",
    picture:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    date: new Date(year, month, 10),
    event: "Umbrella Day",
    picture:
      "https://images.unsplash.com/photo-1532135468830-e51699205b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    date: new Date(year, month, 11),
    event: "Inventor's Day",
    picture:
      "https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    date: new Date(year, month, 12),
    event: "Global Movie Day",
    picture:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    date: new Date(year, month, 13),
    event: "Tortellini Day",
    picture:
      "https://images.unsplash.com/photo-1619528395742-4e41ab87403b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
  },
  {
    date: new Date(year, month, 14),
    event: "Valentine's Day",
    picture:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    date: new Date(year, month, 15),
    event: "Gumdrop Day",
    picture:
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
  },
  {
    date: new Date(year, month, 16),
    event: "Do a Grouch a Favor Day",
    picture:
      "https://images.unsplash.com/photo-1638866411221-9b32355dcb92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    date: new Date(year, month, 17),
    event: "Cabbage Day",
    picture:
      "https://images.unsplash.com/photo-1603049404411-13c2ca81a316?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhYmJhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    date: new Date(year, month, 18),
    event: "Battery Day",
    picture:
      "https://images.unsplash.com/photo-1619641805634-b867f535071c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80",
  },
  {
    date: new Date(year, month, 19),
    event: "Chocolate Mint Day",
    picture:
      "https://images.unsplash.com/photo-1583695411630-5ab035bb7694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
  },
  {
    date: new Date(year, month, 20),
    event: "Love Your Pet Day",
    picture:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    date: new Date(year, month, 21),
    event: "President's Day",
    picture:
      "https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1596&q=80",
  },
  {
    date: new Date(year, month, 22),
    event: "Cook a Sweet Potato Day",
    picture:
      "https://images.unsplash.com/photo-1596097634767-4188de39715f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    date: new Date(year, month, 23),
    event: "Tile Day",
    picture:
      "https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    date: new Date(year, month, 24),
    event: "Toast Day",
    picture:
      "https://images.unsplash.com/photo-1497581175344-8a5f1a0142a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  {
    date: new Date(year, month, 25),
    event: "Clam Chowder Day",
    picture:
      "https://images.unsplash.com/photo-1595873063113-628075164e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    date: new Date(year, month, 26),
    event: "Pistachio Day",
    picture:
      "https://images.unsplash.com/photo-1502825751399-28baa9b81efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    date: new Date(year, month, 27),
    event: "Polar Bear Day",
    picture:
      "https://images.unsplash.com/photo-1522725889967-474fd85fd87f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvbGFyJTIwYm9hcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    date: new Date(year, month, 28),
    event: "Tooth Fairy Day",
    picture:
      "https://images.unsplash.com/photo-1607278843240-419b8d83672d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

function Day({ date, event, picture }) {
  function getDay(date) {
    const dayOfTheWeek = date.getDay();
    switch (dayOfTheWeek) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 0:
        return "Sunday";
      default:
        return "what day again?";
    }
  }

  return (
    <DayContainer image={picture}>
      <DayNumber> {date.getDate()}</DayNumber>
      <WeekDay>{getDay(date)}</WeekDay>
      <Event>{event}</Event>
    </DayContainer>
  );
}

function App() {
  // remove the "preload" class on the body that is preventing animations on load
  setTimeout(function () {
    document.body.className = "";
  }, 1000);

  return (
    <Wrapper>
      {data.map((item, index) => {
        return <Day date={item.date} event={item.event} picture={item.picture} key={index} />;
      })}
    </Wrapper>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
