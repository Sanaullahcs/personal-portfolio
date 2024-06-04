<template>
    <div class="contact-page mt-16">
     <v-container>
        <v-row>
        <v-col cols="12">
            <p class="project-text ml-16">My <br>projects</p>
            <p class="outside-text text-center">Personalized service with perfection is our mantra. We go above and beyond to cater to your requirements and <br>deliver products and services that surpass your expectations. We understand that you can go anywhere for<br> your technology needs, what stands us apart is our extensive experience and diversified team that offer a<br> perfect recipe for your success.

Psst! We have the secret sauce for your business.</p> 
        </v-col>
      </v-row>
      <div class="switch-container-projects ">
                    <div class="switch-container ml-10" @click="toggle">
                        <div :class="['switch-dot', { 'switch-dot-on': isOn }] " />
                    </div>
                    <p class="creative-text-four">Scroll to see more</p>
                </div>
     </v-container>
         
     
    </div>
    
    </template>
    
    <script>
export default {
    name: 'HorizontalScroll',
    data() {
        return {
            isOn: false,
            toggleInterval: null,
        };
    },
    mounted() {
        this.startAutoToggle();
    },
    beforeUnmount() {
        this.stopAutoToggle();
    },
    methods: {
        startAutoToggle() {
            this.toggleInterval = setInterval(() => {
                this.isOn = !this.isOn;
            }, 2000); // Change state every 2 seconds (adjust as needed)
        },
        stopAutoToggle() {
            clearInterval(this.toggleInterval);
        },
        toggle() {
            this.isOn = !this.isOn;
        },
    },
};
</script>
    
    <style scoped>
    @import "@/assets/styles/Projects.css";
    .switch-container-projects {
  position: absolute;
  left: 25%;
  
}
.switch-container {
  width: 25px;
  height: 42px;
  border: 2px solid white;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  margin-top: 90%;
}

.switch-dot {
  width: 14px;
  height: 14px;
  background-color: #D9D9D9;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 4px;
  transition: top 1s ease; /* Slow and smooth transition */
}

.switch-dot-on {
  top: 18px;
}

.creative-text-four{
  font-family: "Tai Heritage Pro", serif ;
  color: #ffffffa0;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
}

    </style >