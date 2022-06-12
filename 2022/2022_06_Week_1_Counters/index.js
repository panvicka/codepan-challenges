function Counter({ startValue }) {
  const [animateIncrease, setAnimateIncrease] = React.useState(false);
  const [animateDecrease, setAnimateDecrease] = React.useState(false);
  const [lastWasIncrease, setLastWasIncrease] = React.useState(false);

  const [numberArrayObject, setNumberArrayObject] = React.useState({ old: startValue, new: startValue });

  let increase = () => {
    setLastWasIncrease(true);
    setAnimateIncrease(true);

    setTimeout(function () {
      setNumberArrayObject((prev) => {
        return { ...prev, new: prev.old + 1 };
      });
    }, 200);
  };

  let decrease = () => {
    setLastWasIncrease(false);
    setAnimateDecrease(true);

    setTimeout(function () {
      setNumberArrayObject((prev) => {
        return { ...prev, new: prev.old - 1 };
      });
    }, 200);
  };

  let cleanAfterAnimation = () => {
    if (lastWasIncrease) {
      setNumberArrayObject((prev) => {
        return { ...prev, old: prev.old + 1 };
      });
    } else {
      setNumberArrayObject((prev) => {
        return { ...prev, old: prev.old - 1 };
      });
    }

    setAnimateIncrease(false);
    setAnimateDecrease(false);
  };

  return (
    <div className="counter-wrapper">
      <button
        onClick={() => {
          if (!animateDecrease && !animateIncrease) {
            increase();
          }
        }}
      >
        <i className="fa-solid fa-angle-up"></i>
      </button>
      <div className="number upper">
        {numberArrayObject[`${lastWasIncrease ? "old" : "new"}`]
          .toString()
          .split("")
          .map((number, index) => {
            return (
              <span
                key={index}
                style={{ animationDelay: `${index / 10}s` }}
                className={`${animateIncrease ? "animate-upper-go-up" : ""} ${
                  animateDecrease ? "animate-upper-go-down" : ""
                } ${lastWasIncrease ? "hidden" : ""}`}
                onAnimationEnd={() => {
                  if (numberArrayObject[`${lastWasIncrease ? "old" : "new"}`].toString().length - 1 == index) {
                    cleanAfterAnimation();
                  }
                }}
              >
                {number}
              </span>
            );
          })}
      </div>

      <div className="number lower">
        {numberArrayObject[`${lastWasIncrease ? "new" : "old"}`]
          .toString()
          .split("")
          .map((number, index) => {
            return (
              <span
                key={`lower-${index}`}
                style={{ animationDelay: `${index / 10}s` }}
                className={`${animateIncrease ? "animate-lower-go-up" : ""} ${
                  animateDecrease ? "animate-lower-go-down" : ""
                } ${lastWasIncrease ? "" : "hidden"}`}
              >
                {number}
              </span>
            );
          })}
      </div>
      <button
        onClick={() => {
          if (!animateDecrease && !animateIncrease) {
            decrease();
          }
        }}
      >
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Counter startValue={16} />
      <Counter startValue={256} />
      <Counter startValue={4096} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
