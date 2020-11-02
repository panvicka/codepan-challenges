window.addEventListener("load", generate);

const div = document.querySelector(".wrapper");

const sheeeeps = [
  ["white", 1, "left", 50, 60],
  ["black", 1, "right", 50, 80],
];

function generate() {
  const sheep = new SheepGenerator(...sheeeeps[0]);
  const sheep2 = new SheepGenerator(...sheeeeps[1]);
  sheep.draw(div);
  sheep2.draw(div);
}

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
    container.innerHTML += `
 
        <div class="sheep-container" 
        style="filter: ${this.invert ? "invert(100%)" : "invert(0%)"}; 
        transform: ${this.mirror ? "scale(-1,1)" : "scale(1,1)"} 
        "> 

        <div class="sheep-wool sheep-wool-1"></div>
        <div class="sheep-wool sheep-wool-2"></div>
        <div class="sheep-wool sheep-wool-3"></div>
        <div class="sheep-wool sheep-wool-4"></div>
        <div class="sheep-wool sheep-wool-5"></div>
        <div class="sheep-wool sheep-wool-6"></div>
        <div class="sheep-wool sheep-wool-7"></div>
        <div class="sheep-wool sheep-wool-8"></div>
        <div class="sheep-wool sheep-wool-9"></div>
        <div class="sheep-wool sheep-wool-10"></div>
        <div class="sheep-wool sheep-wool-11"></div>
        <div class="sheep-wool sheep-wool-12"></div>
        <div class="sheep-wool sheep-wool-13"></div>
        <div class="sheep-wool sheep-wool-14"></div>
        
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
