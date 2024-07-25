<template>
  <div ref="container" @wheel="handleMouseWheel" @keydown="handleKeyDown" tabindex="0" class="container">
    <div class="inner-container">
      <div v-for="(option, index) in visibleOptions" :key="index" 
           :class="['option-button', getClassForIndex(visibleIndex(index))]"
           @click="navigateToProject(option, visibleIndex(index))">
        <span>{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { text: 'AgeWiser', route: '/AgeWiser' },
        { text: 'SpringBoard', route: '/SpringBoard' },
        { text: 'AI Title', route: '/ai-title' },
        { text: 'SafrCare', route: '/Safr-care' },
        { text: 'Ninja HR', route: '/NinjaHR' },
        { text: 'Interoads', route: '/Interoads' },
        { text: 'NextGrade', route: '/NextGrade' },
        { text: 'Proctor8', route: '/Proctor8' },
        { text: 'CareerVI', route: '/CareerVi' },
        { text: 'Chronos', route: '/Chronos' },
        { text: 'TSOB', route: '/Tsob' },
      ],
      activeIndex: 0,
      interval: null,
      autoShuffle: false,
      indexStyles: [
        'style1', 'style2', 'style3', 'style4', 'style5',
        'style6', 'style7', 'style8', 'style9', 'style10',
        'style11', 'style12', 'style13', 'style14', 'style15'
      ], // Array of styles for each index
      sliceStartIndex: 2,
      sliceEndIndex: -2
    };
  },
  computed: {
    middleIndex() {
      return Math.floor(this.options.length / 2);
    },
    visibleOptions() {
      return this.options.slice(this.sliceStartIndex, this.sliceEndIndex);
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
    visibleIndex(index) {
      return index + this.sliceStartIndex;
    },
    shiftOptions(direction) {
      if (direction === 'down') {
        this.options.push(this.options.shift());
      } else if (direction === 'up') {
        this.options.unshift(this.options.pop());
      }
    },
    handleMouseWheel(event) {
      clearInterval(this.interval);
      this.autoShuffle = false;
      if (event.deltaY > 0) {
        this.shiftOptions('down');
      } else if (event.deltaY < 0) {
        this.shiftOptions('up');
      }
    },
    handleKeyDown(event) {
      clearInterval(this.interval);
      this.autoShuffle = false;
      event.preventDefault();
    },
    getClassForIndex(index) {
      return index === this.middleIndex ? 'middle-style' : this.indexStyles[index];
    },
    navigateToProject(option, index) {
      if (index === this.middleIndex) {
        // Only navigate if the clicked option is in the middle index
        this.$router.push(option.route);
      }
    }
  },
  mounted() {
    this.$refs.container.focus();
    if (this.autoShuffle) {
      this.interval = setInterval(() => this.shiftOptions('down'), 1000);
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
@import url("https://use.typekit.net/qaq1iol.css");

.container {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    height: 100vh;
    /* Full viewport height */
}

.inner-container {
    width: 500px;
    /* Set width of the container */
}

.option-button {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
}


.blink {
    animation: blink 1s infinite;
}




.style1 {
    background-color: #ff6347;
    /* Tomato */
    color: #fff;
}

.style2 {
    background-color: #4682b4;
    /* SteelBlue */
    color: #fff;
}

.style3 {
    color: #ffffff2a;
    font-family: "larken";
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
}

.style4 {
    color: #ffffff4d;
    font-family: "larken";
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
}

.style5 {
    color: #ffffff83;
    font-family: "larken";
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
}

.style6 {
    background-color: #dda0dd;
    /* Plum */
    color: #000;
}

.style7 {
    color: #ffffff83;
    font-family: "larken";
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
}

.style8 {
    color: #ffffff4d;
    font-family: "larken";
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
}

.style9 {
    color: #ffffff2a;
    font-family: "larken";
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
}

.style10 {
    background-color: #ff4500;
    /* OrangeRed */
    color: #fff;
}

.style11 {
    background-color: #6495ed;
    /* CornflowerBlue */
    color: #fff;
}

.style12 {
    background-color: #ff1493;
    /* DeepPink */
    color: #fff;
}

.style13 {
    background-color: #ff8c00;
    /* DarkOrange */
    color: #fff;
}

.style14 {
    background-color: #8a2be2;
    /* BlueViolet */
    color: #fff;
}

.style15 {
    background-color: #00ced1;
    /* DarkTurquoise */
    color: #fff;
}

.middle-style {
    color: #F8760B;
    font-family: "larken";
    font-size: 70px;
    font-weight: 700;
    line-height: 84px;
    text-align: center;
    position: relative; /* Ensure the pseudo-element is positioned relative to this */
}

.middle-style::after {
    content: '\2192'; /* Unicode for right arrow */
    margin-left: 10px; /* Adjust distance between text and arrow */
    animation: blink 2s infinite; /* Blink animation */
    position: absolute; /* Position the arrow relative to its container */
    top: 50%; /* Align vertically centered */
    transform: translateY(-50%); /* Adjust vertical positioning */
    margin-left: 100px;
    
}

@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}


</style>
