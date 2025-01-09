<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Search Mentors</router-link>
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
    border: 1px solid transparent;
  }
</style>