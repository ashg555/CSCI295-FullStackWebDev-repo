function Projects() {
  return <section id="Projects">
    <h2>Projects</h2>

    <div id="card-container">
      <div class="card" onclick="openFullscreen('img1')">
        <img class="card-img-top" id="img1" src="src/assets/screenshot1.png" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">Superhero Website</h4>
          <p class="card-text">This website uses the Superhero API (when CORS is enabled) to display information about a superhero.</p>
          <a href="https://ashg555.github.io" class="btn btn-primary" target="_blank">View on github.io</a>
        </div>
      </div>

      <div class="card" onclick="openFullscreen('img2')">
        <img class="card-img-top" id="img2" src="src/assets/screenshot2.png" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">Covid Health Data API Website</h4>
          <p class="card-text">This website displays the flag and some graphs based on what the user types.</p>
          <a href="https://ashg555.github.io/health.html" class="btn btn-primary" target="_blank">View on github.io</a>
        </div>
      </div>

      <div class="card" onclick="openFullscreen('img3')">
        <img class="card-img-top" id="img3" src="src/assets/screenshot3.png" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">A Javascript Calculator</h4>
          <p class="card-text">A fully functional calculator built from scratch with javascript.</p>
          <a href="https://github.com/ashg555/CSCI295-FullStackWebDev-repo/blob/main/Week5/Lab-Activity-2/Lab-Activity2.html" class="btn btn-primary" target="_blank">View/download Code</a>
        </div>
      </div>
    </div>

    <div id="fullscreenOverlay" class="fullscreen-overlay" onclick="closeFullscreen()">
      <img id="fullscreenImage" src="" alt="Fullscreen Image" class="fullscreen-image" />
    </div>

  </section>
}

export default Projects