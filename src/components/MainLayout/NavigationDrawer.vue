<template>
<div class="navigation-drawer-wrapper" v-if="visible">
    <div class="navigation-drawer">
        <div class="mt-10">
            <v-img src="@/assets/icons/close.png" width="24" height="24" @click="closeDrawer" class="close-icon"></v-img>
        </div>
        <ul class="nav-list">
            <!-- Navigation Links -->
            <li v-if="showOtherLinks">
                <router-link to="/">Home</router-link>
            </li>
            <li v-if="showOtherLinks">
                <router-link to="/about">About</router-link>
            </li>
            <li v-if="showOtherLinks">
                <span @click="toggleProjects">Projects</span>
            </li>
            <!-- <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2">
            <span @click="toggleSubProjects('subProject1')">UX/UI</span>
          </li> -->
            <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2 && !showSubProjects.subProject3  && !showSubProjects.subProject4">
                <span @click="toggleSubProjects('subProject2')">Websites</span>
            </li>
            <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2  && !showSubProjects.subProject3  && !showSubProjects.subProject4">
                <span @click="toggleSubProjects('subProject3')">Mobile Apps</span>
            </li>
            <li v-if="showProjects && !showSubProjects.subProject1 && !showSubProjects.subProject2 && !showSubProjects.subProject3  && !showSubProjects.subProject4">
                <span @click="toggleSubProjects('subProject4')">Softwares</span>
            </li>
            <!-- <li v-if="showSubProjects.subProject1">
            <ul>
              <li v-for="project in subProjects.subProject1" :key="project.id">
                <router-link :to="`/projects/${project.id}`">{{ project.name }}</router-link>
              </li>
            </ul>
          </li> -->

            <li v-if="showSubProjects.subProject2" class="nav-list-small">
                <ul class="navList">
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/ageWiserWeb'">AgeWiser</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/SafrCareWeb'">SafrCare</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/TSOBWeb'">TSOB</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/SpringBoardWeb'">SpringBoard</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/HRMSWeb'">HRMS</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/InteroadsWeb'">Interoads</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/NextGradeWeb'">NextGrade</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/Proctor8Web'">Proctor8</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/CareerViWeb'">CareerVi</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/websites/ChronosWeb'">Chronos</router-link>
                    </li>
                </ul>
            </li>
            <!-- mobile apps -->
            <li v-if="showSubProjects.subProject3" class="nav-list-small">
                <ul class="navList">
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/ageWiserApp'">AgeWiser</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/SafrCareApp'">SafrCare</router-link>
                    </li>

                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/HRMSApp'">HRMS</router-link>
                    </li>

                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/NextGradeApp'">NextGrade</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/ChronosApp'">Chronos</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/aiApp'">AI Title</router-link>
                    </li>
                </ul>
            </li>
            <!-- softwares -->
            <li v-if="showSubProjects.subProject4" class="nav-list-small">
                <ul class="navList">
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/ageWiserApp'">AgeWiser</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/SafrCareApp'">SafrCare</router-link>
                    </li>

                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/HRMSApp'">HRMS</router-link>
                    </li>

                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/NextGradeApp'">NextGrade</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/ChronosApp'">Chronos</router-link>
                    </li>
                    <li v-for="project in subProjects.subProject2" :key="project.id">
                        <router-link :to="'/projects/Mobile_app/aiApp'">AI Title</router-link>
                    </li>
                </ul>
            </li>

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

/* Hover effect to rotate the arrow */
.social-accounts .arrow {
    transition: transform 0.3s;
}

.social-accounts .d-flex:hover .arrow {
    transform: rotate(45deg);
}
</style>
