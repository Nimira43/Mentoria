<template>
  <header>
    <nav>
      <h1 class="logo">
        <router-link to="/">Mentoria</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/mentors">All Mentors</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    background-color: #012222;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header a {
    text-decoration: none;
    color: #fffaf0;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s ease-in;
  }

  a:active,
  a:hover,
  a.router-link-active {
    border-bottom: 1px solid #ffd700;
  }

  h1 {
    margin: 0;
  }

  h1 a {
    color: #fffaf0;
    margin: 0;
  }

  h1 a:hover,
  h1 a:active,
  h1 a.router-link-active {
    border-bottom: transparent;
  }

  header nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 0.5rem;
  }

  li a {
    text-transform: uppercase;
  }

  .logo a {
    border: none;
  }
</style>