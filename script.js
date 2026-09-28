/* =====================================
   OXFN — COUNTDOWN
   CHAPTER 1 SEASON 1
   01 FÉVRIER 2027
===================================== */

const releaseDate =
  new Date("2027-02-01T00:00:00+01:00").getTime();


function updateCountdown() {

  const now =
    new Date().getTime();

  const difference =
    releaseDate - now;


  if (difference <= 0) {

    document.getElementById("days").textContent = "000";

    document.getElementById("hours").textContent = "00";

    document.getElementById("minutes").textContent = "00";

    document.getElementById("seconds").textContent = "00";

    return;

  }


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (difference /
      (1000 * 60 * 60)) % 24
    );


  const minutes =
    Math.floor(
      (difference /
      (1000 * 60)) % 60
    );


  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );


  document.getElementById("days").textContent =
    String(days).padStart(3, "0");


  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");


  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");


  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =====================================
   APPARITION DES CARTES
===================================== */

const elements =
  document.querySelectorAll(
    ".feature, .season-item"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: 0.15
    }
  );


elements.forEach(
  (element) => {

    observer.observe(element);

  }
);


/* =====================================
   ANIMATION SOURIS
===================================== */

document.addEventListener(
  "mousemove",
  (event) => {

    const x =
      (event.clientX /
      window.innerWidth - .5) * 2;

    const y =
      (event.clientY /
      window.innerHeight - .5) * 2;


    const season =
      document.querySelector(
        ".hero-season"
      );


    if (season) {

      season.style.transform =
        `translate(${x * 8}px, ${y * 8}px)`;

    }

  }
);


/* =====================================
   CONSOLE
===================================== */

console.log(
  "%c OXFN ",
  "background:#000;color:#fff;font-size:30px;font-weight:bold;padding:10px;"
);

console.log(
  "Le vrai Fortnite revient. — 01.02.2027"
);
