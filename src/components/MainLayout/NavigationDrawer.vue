<template>
<div class="navigation-drawer-wrapper" v-if="visible">
    <div class="navigation-drawer">
        <div class="mt-10">
            <v-img src="@/assets/icons/close.png" width="24" height="24" @click="closeDrawer" class="close-icon"></v-img>
        </div>
        <ul class="nav-list">
            <!-- Navigation Links -->
            <li v-if="showOtherLinks">
                <router-link to="/" @click="goToHome">Home</router-link>
            </li>
            <li v-if="showOtherLinks">
                <router-link to="/about">About</router-link>
            </li>
            <li v-if="showOtherLinks">
                <span  @click="handleScroll()">Projects</span>
            </li>
            <!-- <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2">
                <span @click="toggleSubProjects('subProject1')">UX/UI</span>
              </li> -->
            <!-- <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2 && !showSubProjects.subProject3  && !showSubProjects.subProject4">
                <span @click="handleScroll()">Websites</span>
            </li>
            <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2  && !showSubProjects.subProject3  && !showSubProjects.subProject4">
                <span  @click="handleScroll()">Mobile Apps</span>
            </li>
            <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2 && !showSubProjects.subProject3  && !showSubProjects.subProject4">
                <span @click="toggleSubProjects('subProject4')">Softwares</span>
            </li> -->
            <!-- <li v-if="showSubProjects.subProject1">
                <ul>
                  <li v-for="project in subProjects.subProject1" :key="project.id">
                    <router-link :to="`/projects/${project.id}`">{{ project.name }}</router-link>
                  </li>
                </ul>
              </li> -->

         
            <!-- mobile apps -->
           
            <!-- softwares -->
      
            <li v-if="showOtherLinks">
                <router-link to="/contact">Contact</router-link>
            </li>

        </ul>

        <div class="social-accounts d-flex">
            <div class="d-flex">
                <a href="#" class="linkedin">LinkedIn</a>
                <span class="mdi mdi-arrow-top-right ml-2 arrow"></span>
            </div>
            <div class="d-flex ml-8">
                <a href="#" class="email">Email</a>
                <span class="mdi mdi-arrow-top-right ml-2 arrow"></span>
            </div>
            <div class="d-flex ml-8">
                <a href="#" class="whatsapp">Whatsapp</a>
                <span class="mdi mdi-arrow-top-right ml-2 arrow"></span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            showProjects: false,
            showSubProjects: {
                subProject1: false,
                subProject2: false,
                subProject3: false,
                subProject4: false

            },
            showOtherLinks: true,
            subProjects: {
                subProject1: [{
                        id: 1,
                        name: 'Project 1'
                    },
                    {
                        id: 2,
                        name: 'Project 2'
                    }
                ],
                subProject2: [{
                        id: 3,
                        name: 'ageWiserWeb'
                    }, // Corrected name here
                ],
                subProject3: [{
                        id: 3,
                        name: 'web'
                    }, // Corrected name here
                ],
                subProject4: [{
                        id: 3,
                        name: 'softwares'
                    }, // Corrected name here
                ]
            }
        };
    },
    methods: {
        closeDrawer() {
            this.$emit('close');
        },
        toggleProjects() {
            this.showProjects = !this.showProjects;
            this.showOtherLinks = !this.showProjects;
            // Reset subProject visibility
            this.showSubProjects.subProject1 = false;
            this.showSubProjects.subProject2 = false;
            this.showSubProjects.subProject3 = false;
            this.showSubProjects.subProject4 = false;

        },
        toggleSubProjects(subProject) {
            this.showSubProjects.subProject1 = subProject === 'subProject1';
            this.showSubProjects.subProject2 = subProject === 'subProject2';
            this.showSubProjects.subProject3 = subProject === 'subProject3';
            this.showSubProjects.subProject4 = subProject === 'subProject4';

        },
        handleScroll() {
            this.$router.push('/'); // Navigate to the homepage
            setTimeout(() => {
                this.emitter.emit('scroll-to-websites'); // Scroll to the fifth child element
            }, 500);
            this.$emit('close'); // Close the navigation drawer
        },

        goToHome() {
            // Check if the current route is already the home page ("/")
            if (this.$route.path === '/') {
                // If it is, close the drawer
                this.closeDrawer();
            } else {
                // Otherwise, navigate to the home page
                this.$router.push('/');
            }
        }
    }
};
</script>

<style scoped>
.nav-list {
    list-style: none;
    padding: 0;
}

.nav-list li {
    text-align: center;
}

.nav-list li a,
.nav-list li span {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 70px;
    font-weight: 700;
    font-family: "Tai Heritage Pro", serif;
}

.nav-list-small li a {
    font-size: 36px;
}

.nav-list li a:hover,
.nav-list li span:hover {
    color: #F8760B;
}

.close-icon {
    cursor: pointer;
}

.social-accounts {
    margin-top: 20px;
}

.social-accounts .d-flex {
    align-items: center;
}

.social-accounts a:hover {
    color: #F8760B;
}
.social-accounts .d-flex:hover .arrow {
  transform: rotate(45deg);
}
</style>
