import DLA from '../../core/DLA';

let dla,
    currentClusterType = 'Wall';

const sketch = function (p5) {
  // Setup ---------------------------------------------------------------
  p5.setup = function () {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.colorMode(p5.HSB, 255);
    p5.ellipseMode(p5.CENTER);

    // Set up the simulation environment
    dla = new DLA(p5);

    // Start with the walkers biased towards screen bottom
    dla.settings.BiasTowards = 'Bottom';

    // Spawn walkers and clusters
    reset();
  }

  // Draw ----------------------------------------------------------------
  p5.draw = function () {
    dla.iterate();
    dla.draw();
  }

  function reset() {
    dla.removeAll();
    dla.createDefaultWalkers();
    dla.createDefaultClusters(currentClusterType);
  }

  // Key handler ---------------------------------------------------------
  p5.keyReleased = function () {
    switch (p5.key) {
      case ' ':
        dla.togglePause();
        break;

      case 'w':
        dla.toggleShowWalkers();
        break;

      case 'c':
        dla.toggleShowClusters();
        break;

      case 'r':
        reset();
        break;
   
      case 'f':
        dla.toggleUseFrame();
        reset();
        break;

      case 'l':
        dla.toggleLineRenderingMode();
        break;

      case 'e':
        dla.export();
        break;

      // Use numbers to change bias direction
      case '1':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Bottom';
        reset();
        dla.unpause();
        break;

      case '2':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Top';
        reset();
        dla.unpause();
        break;

      case '3':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Left';
        reset();
        dla.unpause();
        break;

      case '4':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Right';
        reset();
        dla.unpause();
        break;

      case '5':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Equator';
        reset();
        dla.unpause();
        break;

      case '6':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Meridian';
        reset();
        dla.unpause();
        break;

      case '7':
        dla.pause();
        currentClusterType = 'Wall';
        dla.settings.BiasTowards = 'Edges';
        reset();
        dla.unpause();
        break;

      case '8':
        dla.pause();
        currentClusterType = 'Point';
        dla.settings.BiasTowards = 'Center';
        reset();
        dla.unpause();
        break;
    }
  }
}

// Launch the sketch using p5js in instantiated mode
new p5(sketch);