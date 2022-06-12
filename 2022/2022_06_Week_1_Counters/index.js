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

    console.log("increase handler");
    console.log(numberArrayObject);
  };

  let decrease = () => {
    setLastWasIncrease(false);
    setAnimateDecrease(true);

    setTimeout(function () {
      setNumberArrayObject((prev) => {
        return { ...prev, new: prev.old - 1 };
      });
    }, 200);

    console.log("decrease handler");
    console.log(numberArrayObject);
  };

  let cleanAfterAnimation = () => {
    setAnimateIncrease(false);
    setAnimateDecrease(false);

    if (lastWasIncrease) {
      setNumberArrayObject((prev) => {
        return { ...prev, old: prev.old + 1 };
      });
    } else {
      setNumberArrayObject((prev) => {
        return { ...prev, old: prev.old - 1 };
      });
    }

    console.log("animation cleaned");
    console.log(numberArrayObject);
  };

  return (
    <div className="wrapper">
      <button onClick={increase}>up</button>
      <div className="numbers-wrapper">
        {/* old number */}
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
      </div>
      <button onClick={decrease}>down</button>
    </div>
  );
}

function App() {
  return <Counter startValue={15} />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
