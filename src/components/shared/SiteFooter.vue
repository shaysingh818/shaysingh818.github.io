<template>

  <footer class="site-footer">
    <div class="container footer-inner">

      <div class="footer-brand">
        <span class="footer-name">Shay Singh</span>
        <span class="footer-tagline">Building, Breaking & Learning</span>
      </div>

      <nav class="footer-links" aria-label="Footer">
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/career">Career</RouterLink>
      </nav>

      <div class="footer-socials">
        <a href="https://github.com/shaysingh818" target="_blank" rel="noopener" aria-label="GitHub">
          <FontAwesomeIcon :icon="faGithub" />
        </a>
        <a href="https://discord.com/users/730771068075114547" target="_blank" rel="noopener" aria-label="Discord">
          <FontAwesomeIcon :icon="faDiscord" />
        </a>
        <a href="https://www.linkedin.com/in/shalin-singh-5b881a19a/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <FontAwesomeIcon :icon="faLinkedin" />
        </a>
      </div>

    </div>

    <div class="container footer-bottom">
      © {{ year }} Shay Singh
    </div>
  </footer>

</template>


<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const year = new Date().getFullYear();
</script>

<style scoped>

.site-footer {
  margin-top: 4rem;
  background-color: var(--app-color-surface);
  border-top: 1px solid var(--app-color-border);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-name {
  color: var(--app-color-accent);
  font-weight: bold;
}

.footer-tagline {
  color: var(--app-color-text-muted);
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a,
.footer-socials a {
  color: var(--app-color-text-muted);
  transition: color 0.15s ease;
}

.footer-links a:hover,
.footer-socials a:hover {
  color: var(--app-color-accent);
}

.footer-socials {
  display: flex;
  gap: 1rem;
  font-size: 20px;
}

.footer-bottom {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid var(--app-color-border);
  color: var(--app-color-text-muted);
  font-size: 13px;
}

/* mobile: stack everything */
@media (max-width: 480px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>
