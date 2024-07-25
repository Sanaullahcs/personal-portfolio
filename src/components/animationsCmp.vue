<template>
    <div class="typewriter" style="background-color:">
      <span>{{ displayedText }}</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: 'This is a typewriter effect!',
        displayedText: '',
        currentIndex: 0,
      };
    },
    mounted() {
      this.typeWriter();
    },
    methods: {
      typeWriter() {
        if (this.currentIndex < this.text.length) {
          this.displayedText += this.text.charAt(this.currentIndex);
          this.currentIndex++;
          setTimeout(this.typeWriter, 100);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .typewriter {
    font-family: monospace;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid;
    animation: blink-caret 0.75s step-end infinite;
  }
  
  @keyframes blink-caret {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  </style>
  