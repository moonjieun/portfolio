document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.onclick = (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(anchor.getAttribute("href"));
      targetElement?.scrollIntoView({ behavior: "smooth" });

      if (window.innerWidth <= 768) {
        document.querySelector(".gnb").classList.remove("on");
        document.querySelector(".menuOpen").classList.remove("on");
        document.body.classList.remove("on");
      }
    };
  });
});

document.addEventListener("DOMContentLoaded", function () {
  Splitting();

  let prevScrollTop = 0;
  document.addEventListener("scroll", function () {
    let nowScrollTop = window.scrollY;
    const header = document.querySelector("header");
    if (nowScrollTop > prevScrollTop) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
    prevScrollTop = nowScrollTop;
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const animateElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animate);
      } else {
        entry.target.classList.remove(entry.target.dataset.animate);
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => observer.observe(el));

  const svgPaths = document.querySelectorAll(".svgAni path");
  svgPaths.forEach((path) => {
    let length = path.getTotalLength();
    console.log(`Path length: ${length}`);
  });
});

// .con01 gsap 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        // markers: true
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )
    .to(".svgAni path", { stroke: "#000", ease: "none", duration: 5 }, 0)
    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".videoWrap video",
      { "clip-path": "inset(60% round 30%)" },
      { "clip-path": "inset(0% round 0%)", ease: "none", duration: 10 },
      0
    );

  // .con02 title 글자 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 1,
        // markers: true
      },
    })
    .fromTo(
      ".con02 .title .a",
      { x: "-100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    )
    .fromTo(
      ".con02 .title .b",
      { x: "100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    );

  // workList가 나타날 때
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
        // markers: true
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    )
    .to(
      ".con02 .title",
      {
        position: "fixed",
        ease: "none",
        left: "0",
        top: "0",
        width: "100%",
        duration: 5,
      },
      0
    )
    .fromTo(
      ".workList",
      { margin: "0 auto" },
      {
        margin: "100vh auto 0",
        position: "relative",
        zIndex: "10",
        duration: 1,
      },
      0
    );

  // workList 끝날 때 title 글자가 화면 밖으로 사라지도록 애니메이션 적용
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "100% 50%",
        end: "100% 0%",
        scrub: 1,
        // markers: true
      },
    })
    .to(".con02 .title .a", { x: "-100%", ease: "none", duration: 5 }, 0)
    .to(".con02 .title .b", { x: "100%", ease: "none", duration: 5 }, 0);
});

// simplyScroll
$(function () {
  $(".con03 .list").simplyScroll({
    speed: 2,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});

// menuOpen 클릭 시 메뉴 열기 및 닫기
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menuOpen").addEventListener("click", function () {
    document.querySelector(".gnb").classList.toggle("on");
    this.classList.toggle("on");
    document.body.classList.toggle("on");
  });
});
