const NUMBER_OF_DIALS = 10;

window.addEventListener("load", () => {
  console.log("it works");
  const main = document.querySelector<HTMLElement>("main")!;

  for (let i = 0; i < NUMBER_OF_DIALS; i++) {
    let newWrapper = document.createElement("div");
    newWrapper.classList.add("dial-wrapper");
    newWrapper.innerHTML = `
        <div class="pointer"></div>
        <div class="circle-container">
            <svg viewBox="0 0 400 400">
                <defs>
                    <path id="CurvedPath" d="M20, 190a190, 200 -10 1, 0 390, 0a190, 190 0 1, 0 -390, 0" />
                    <path id="CurvedPath2" d="M300, 90a100,1000 -10 1, 0 250, 0" />
                    <path d="M200, 382.4c-74.8,   
                0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
                135.5 S318, 382.4, 243.2, 382.4z" id="textcircle" />
                    <path d="M176,123 q-90,81 0,182" id="textcircle2" />
                    <path id="curve" d="m130.69733,360c-111.8211,-60 -176.09709,-290 60,-341.13848" />
                    <path id="programCurve"
                        d="m178.69733,371c-199.99942,-24.44438 -207.33318,-313.55886 -2.29653,-340.40712" />
                    <path id="sleepCurve"
                        d="m325.26801,80.45354c18.71453,14.59769 64.1175,94.70566 42.94108,155.88199" />
                    <path id="eatCurve"
                        d="m368.64664,260.58732c-27.05877,59.99986 -58.23516,78.82335 -55.88314,79.99983" />
                    <path id="sportCurve"
                        d="m332.23491,320.05783c-49.99989,52.35281 -109.99974,52.94105 -107.64772,54.11753" />

                </defs>
                <text class="text programming">
                    <textPath xlink:href="#programCurve">
                        programming
                    </textPath>
                </text>

                <text class="text sleep">
                    <textPath id="sleep-text" xlink:href="#sleepCurve">
                        sleep
                    </textPath>
                </text>

                <text class="text eat">
                    <textPath xlink:href="#eatCurve">
                        eat
                    </textPath>
                </text>


                <text class="text sport">
                    <textPath xlink:href="#sportCurve">
                        sport
                    </textPath>
                </text>
            </svg>
        </div>
        
        `;

    main.appendChild(newWrapper);
  }
});
