<template>
  <main class="flex-1 flex flex-col">
    <div class="max-w-2xl w-full py-12 px-4 mx-auto">
      <div class="prose prose-zinc max-w-none">
        <img
          src="@/assets/fullnihirzala.webp"
          class="sm:float-right mx-auto sm:ml-6 mb-10 w-56 sm:w-48 grayscale rounded-md shadow-lg sm:rotate-2 hover:grayscale-0 sm:hover:rotate-3 hover:scale-105 hover:shadow-2xl transition duration-150"
        />
        <h1>
          Hi there,
          <span class="whitespace-nowrap"
            >I'm <br />
            Nihir&nbsp;Zala.</span
          >
        </h1>
        <p>
          I've been making projects do my bidding for over 5 years. I've done
          manythings from designing websites to building the servers they run
          on. These days my passion is building web applications with Laravel,
          Vue, and&nbsp;Tailwind.
        </p>
        <p>Some interesting projects I've worked&nbsp;on&nbsp;include:</p>
        <ul>
          <li>School Management System</li>
          <li>College Management System</li>
          <li>College Portfolio</li>
          <li>Shop Portfolio</li>
          <li>Hotel Management Systems</li>
        </ul>
        <p>
          I care deeply about open-source software, privacy, best practices,
          open standards, idiomatic code, and great user and
          developer&nbsp;experiences.
        </p>
        <p>
          When I'm not coding, I enjoy cooking, playing CTF, spicy food,
          watching anime, and heavy&nbsp;music.
        </p>
      </div>
    </div>
  </main>
</template>
<style>
.prose :where(ul > li):not(:where([class~="not-prose"] *))::marker {
  color: #01010c;
}
</style>
