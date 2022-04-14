const imgArray = [
  {
    src: "https://assets.codepen.io/652/the-lucky-neko-CM7a-XBD4AU-unsplash.jpg",
    alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched. ",
    title: "Photo by The Lucky Neko for Unsplash",
    caption: "Kitten: Ollie (12 Weeks)",
  },
  {
    src: "https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg",
    alt: "a brown French bulldog puppy laying down and looking up with a hopeful look in its eyes. ",
    title: "Photo by Karsten Winegeart for Unsplash",
    caption: "Puppy: Barney (9 Weeks)",
  },
  {
    src: "https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg",
    alt: "A large long-haired orange cat with a white belly. ",
    title: "Photo by Kabo for Unsplash",
    caption: "Cat: Walter (5 Years)",
  },
  {
    src: "https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg",
    alt: "A light brown, long-haired chihuahua sitting next to three rubber duckies.",
    title: "Photo by Sergey Semin for Unsplash",
    caption: "Dog: Miss Sunshine (2 Years)",
  },
  {
    src: "https://assets.codepen.io/652/sergey-semin-Y0WXj3xqJz0-unsplash.jpg",
    alt: "A tabby kitten with green eyes. ",
    title: "Photo by Giacomo Lucarini for Unsplash",
    caption: "Kitten: Reese (8 Weeks)",
  },
];

// const imgArray = [
//   {
//     src: "https://via.placeholder.com/200x200.png?text=nula",
//     alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched. ",
//     title: "Photo by The Lucky Neko for Unsplash",
//     caption: "Kitten: Ollie (12 Weeks)",
//   },
//   {
//     src: "https://via.placeholder.com/200x200.png?text=1",
//     alt: "a brown French bulldog puppy laying down and looking up with a hopeful look in its eyes. ",
//     title: "Photo by Karsten Winegeart for Unsplash",
//     caption: "Puppy: Barney (9 Weeks)",
//   },
//   {
//     src: "https://via.placeholder.com/200x200.png?text=2",
//     alt: "A large long-haired orange cat with a white belly. ",
//     title: "Photo by Kabo for Unsplash",
//     caption: "Cat: Walter (5 Years)",
//   },
//   {
//     src: "https://via.placeholder.com/200x200.png?text=3",
//     alt: "A light brown, long-haired chihuahua sitting next to three rubber duckies.",
//     title: "Photo by Sergey Semin for Unsplash",
//     caption: "Dog: Miss Sunshine (2 Years)",
//   },
//   {
//     src: "https://via.placeholder.com/200x200.png?text=4",
//     alt: "A tabby kitten with green eyes. ",
//     title: "Photo by Giacomo Lucarini for Unsplash",
//     caption: "Kitten: Reese (8 Weeks)",
//   },
// ];

const scaleValue = (rangeMin, rangeMax, minValue, maxValue, value) => {
  return (rangeMax - rangeMin) * ((value - minValue) / (maxValue - minValue)) + rangeMin;
};

function Gallery({ imgArray }) {


  const [xProc, setXProc] = React.useState(0);
  const [yProc, setYProc] = React.useState(0);

  const [elRefs, setElRefs] = React.useState([]);
  const [renderPics, setRenderPics] = React.useState(false);
  const [firstIndex, setFirstIndex] = React.useState(2);

  React.useEffect(() => {
    const updateTimeInterval = () => {
      console.log(renderPics);
      if (renderPics) {
        setFirstIndex((prev) => {
          if (prev - 1 >= 0) {
            setFirstIndex(prev - 1);
          } else {
            setFirstIndex(imgArray.length - 1);
          }
        });
      }
    };
    let timer = setInterval(updateTimeInterval, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [renderPics]);

  React.useEffect(() => {
    setElRefs((elRefs) =>
      Array(imgArray.length)
        .fill()
        .map((_, i) => elRefs[i] || React.createRef())
    );
  }, [imgArray.length]);

  const mouseMoveOnImage = (e, index) => {
    if (index == firstIndex) {
      const boundary = elRefs[index].current.getBoundingClientRect();
      const x = e.clientX - boundary.left;
      const y = e.clientY - boundary.top;

      const xProcCalc = scaleValue(-70, 70, 0, boundary.width, x);
      const yProcCalc = scaleValue(-70, 70, 0, boundary.height, y);
      setXProc(xProcCalc);
      setYProc(yProcCalc);
    }
  };

  const openGallery = (index, state) => {
    if (index == firstIndex) {
      setRenderPics(state);
    }
  };

  const getCalculatedIndex = (index) => {
    let calcIndex = firstIndex - index;
    if (calcIndex < 0) {
      calcIndex = calcIndex + imgArray.length;
    }
    return calcIndex;
  };

  const setXPosition = (index) => {
    if (index == firstIndex) {
      return 0;
    } else {
      const calculatedIndex = getCalculatedIndex(index);
      return xProc * calculatedIndex;
    }
  };

  const setYPosition = (index) => {
    if (index == firstIndex) {
      return 0;
    } else {
      const calculatedIndex = getCalculatedIndex(index);
      return -yProc * calculatedIndex;
    }
  };

  const setZIndex = (index) => {
    if (index == firstIndex) {
      return 100;
    } else {
      const calculatedIndex = getCalculatedIndex(index);
      return imgArray.length - calculatedIndex;
    }
  };

  return (
    <div className="container">
      {imgArray.map((image, index) => {
        return (
          <img
            data-index={index}
            onMouseMove={(e) => mouseMoveOnImage(e, index)}
            onMouseEnter={() => openGallery(index, true)}
            onMouseLeave={() => openGallery(index, false)}
            ref={elRefs[index]}
            src={image.src}
            key={index}
            alt={image.alt}
            style={{
              left: `${renderPics ? setXPosition(index) : 0}px`,
              bottom: `${renderPics ? setYPosition(index) : 0}px`,
              zIndex: `${setZIndex(index)}`,
            }}
          ></img>
        );
      })}
    </div>
  );
}

function App() {
  return <Gallery imgArray={imgArray} />;
}

ReactDOM.render(<App imgArray={imgArray} />, document.querySelector("#root"));
