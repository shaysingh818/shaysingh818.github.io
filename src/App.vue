<script setup lang="ts">
import {
  GnNavigationBar,
  GnNavigationItem,
  GnNavigationHeader
} from "@graphyne/web-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject, faBriefcase, faShieldHalved, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SiteFooter from "./components/shared/SiteFooter.vue";
import { ref } from "vue";

const menuOpen = ref(false);

</script>

<template>

   <header class="site-header">
     <div class="container header-inner">
       <GnNavigationBar
         direction="row"
         backgroundColor="var(--app-color-surface)"
         :collapseAt="640"
         menuLabel="Toggle navigation menu"
         @gn-menu-toggle="menuOpen = $event"
       >
          <template #header>

              <RouterLink to="/" >
                <GnNavigationHeader title="Shay Singh" titleSize="16px" direction="row" color="var(--app-color-accent)" textColor="var(--app-color-text)">
                    <FontAwesomeIcon :icon="faShieldHalved" />
                </GnNavigationHeader>
              </RouterLink>
          </template>
          <template #menu-icon>
              <FontAwesomeIcon :icon="menuOpen ? faXmark : faBars" />
          </template>
          <template #items>
   
              <RouterLink to="/projects" >
                  <GnNavigationItem label="projects" direction="col" color="var(--app-color-accent)" textColor="var(--app-color-text-muted)">
                      <FontAwesomeIcon :icon="faDiagramProject" />
                  </GnNavigationItem>
              </RouterLink>
      
              <RouterLink to="/career" >
                  <GnNavigationItem label="career" direction="col" color="var(--app-color-accent)" textColor="var(--app-color-text-muted)">
                      <FontAwesomeIcon :icon="faBriefcase" />
                  </GnNavigationItem>
              </RouterLink>
      
              <RouterLink to="/reading-list" >
                  <GnNavigationItem label="reading list" direction="col" color="var(--app-color-accent)" textColor="var(--app-color-text-muted)">
                      <FontAwesomeIcon :icon="faChartBar" />
                  </GnNavigationItem>
              </RouterLink>
          </template>
          <template #trailing>

              <a href="https://github.com/shaysingh818" target="_blank" rel="noopener" aria-label="GitHub">
                  <GnNavigationItem direction="col" color="#FFFFFF">
                      <FontAwesomeIcon :icon="faGithub" />
                  </GnNavigationItem>
              </a>

              <a href="https://discord.com/users/730771068075114547" target="_blank" rel="noopener" aria-label="Discord">
                  <GnNavigationItem direction="col" color="#5865F2">
                      <FontAwesomeIcon :icon="faDiscord" />
                  </GnNavigationItem>
              </a>

              <a href="https://www.linkedin.com/in/shalin-singh-5b881a19a/" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <GnNavigationItem direction="col" color="#0A66C2">
                      <FontAwesomeIcon :icon="faLinkedin" />
                  </GnNavigationItem>
              </a>

          </template>
      </GnNavigationBar>
    </div>
   </header>

  <main>
    <RouterView />
  </main>

  <SiteFooter />
</template>

<style>

/* push the footer to the bottom on short pages */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app > main {
  flex: 1;
}

.site-header {
  position: sticky; 
  top: 0; 
  z-index: 10;
  background-color: var(--app-color-surface);
  border-bottom: 1px solid var(--app-color-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 64px;
}

/* stretch the bar so the trailing slot reaches the right edge */
.header-inner .gn-navigation-bar {
  flex: 1;
}

/* more room between the logo and the title */
.header-inner .gn-navigation-bar .gn-navigation-header {
  gap: 0.75rem;
}

/* mobile menu: lay the links and socials out as rows instead of Graphyne's default column */
.site-header .header-inner .gn-navigation-bar--collapsed .gn-navigation-bar__items,
.site-header .header-inner .gn-navigation-bar--collapsed .gn-navigation-bar__trailing {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.site-header .header-inner .gn-navigation-bar--collapsed .gn-navigation-bar__items {
  gap: 1.5rem;
}

.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

</style>
