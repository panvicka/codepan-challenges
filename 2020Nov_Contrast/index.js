
const div = document.querySelector(".wrapper");

const generateSheep = (e, color) => {

  console.log(e);
  e.preventDefault();
  let direction = "right";
  if (Math.round(Math.random())) {
    direction = "left";
  }
    
  let scaleMultiplicator = Math.random()*1.4;
  if (scaleMultiplicator < 0.4) {
    scaleMultiplicator +=  Math.random();
  }
  const sheep = new SheepGenerator(color, scaleMultiplicator, direction, e.clientX, e.clientY);
  sheep.draw(div);

}


div.addEventListener("click", (e) => generateSheep(e, "white"));
div.addEventListener("contextmenu", (e) => generateSheep(e, "black"));


class SheepGenerator {
  constructor(color, scale, lookingDirection, x, y) {
    if (color === "white") {
      this.invert = 0;
    } else {
      this.invert = 1;
    }

    if (lookingDirection === "right") {
      this.mirror = 1;
    } else {
      this.mirror = 0;
    }

    this.scale = scale;
    this.x = x;
    this.y = y;
  }

  draw(container) {
    console.log( container.clientHeight);
 
    if (this.y-250/1.3 > container.clientHeight) {
    return ;
    } 
  


    container.innerHTML += `
 
        <div class="sheep-container" 
        style="filter: ${this.invert ? "invert(100%)" : "invert(0%)"}; 
        transform: ${this.mirror ? "scale("+-1*this.scale+","+1*this.scale+")" : "scale("+1*this.scale+","+1*this.scale+")"};
        top: ${this.y-250/2}px;
        left: ${this.x-250/2}px;
        "> 

        ${Array(14)
          .join(0)
          .split(0)
          .map(
            (item, i) => `
      <div class="sheep-wool sheep-wool-${i + 1}" ${
              this.invert ? 'style="border:  none"' : ""
            }> </div>
    `
          )
          .join("")}

      
        
        <div class="sheep-body" >

            <div class="sheep-head" ${
              this.invert ? 'style="filter: invert(100%)"' : ""
            }>
                <div class="sheep-ear-left"></div>
                <div class="sheep-ear-right"></div>
                <div class="sheep-eye-left"></div>
                <div class="sheep-eye-right"></div>
                <div class="sheep-mount-hor"></div>
            </div>

        </div>

        <div class="sheep-legs sheep-legs-front"> </div>
        <div class="sheep-legs sheep-legs-back"> </div>

    </div>
        
        
        
        
        `;
  }
}
