import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const smoothScrollContainer = document.querySelector(".smooth-scroll");
const sections = document.querySelectorAll(".section");

const state = {
  current: 0,
  target: 0,
  ease: 0.12,
};

const scrollRange = () => window.innerHeight * sections.length;

const setHeight = () => {
  document.body.style.height = `${window.innerHeight + scrollRange()}px`;
};

ScrollTrigger.addEventListener("refreshInit", setHeight);
ScrollTrigger.addEventListener("refresh", setHeight);

const createSectionSequence = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".story",
      start: "top top",
      end: () => `+=${scrollRange()}`,
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });

  const checkVisibleClass = (selector) => {
    return () => {
      const element = document.querySelector(selector);
      if (element) {
        const opacity = parseFloat(gsap.getProperty(element, "opacity"));
        if (opacity === 1) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      }
    };
  };

  timeline
    .set(sections, { autoAlpha: 1 })
    .set("#hero", { autoAlpha: 1 })
    .set("#hero .section__content", { 
      opacity: 1, 
      scale: 1
    })
    .to("#hero .section__content", {
      scale: 1.8,
      opacity: 0,
      ease: "power1.inOut",
    }, 0)
    .to("#hero .section__frame", {
      opacity: 0,
      ease: "power1.inOut",
    }, 0)
    .to("#hero .section__backdrop", {
      opacity: 1,
      ease: "power1.inOut",
    }, 0)
    .to("#scene-1", { autoAlpha: 1, duration: 0.2 }, 0.4)
    .to("#hero", { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }, 0.7)
    .fromTo(
      "#scene-1 .section__content",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        ease: "power1.inOut",
        onUpdate: checkVisibleClass("#scene-1 .section__content")
      },
      0.6
    )
    .to("#scene-1", { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }, 1.3)
    .to("#scene-1 .section__content", {
      opacity: 0,
      onUpdate: checkVisibleClass("#scene-1 .section__content")
    }, 1.3)
    .to("#scene-2", { autoAlpha: 1, duration: 0.2 }, 1.3)
    .fromTo(
      "#scene-2 .section__content",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        ease: "power1.inOut",
        onUpdate: checkVisibleClass("#scene-2 .section__content")
      },
      1.3
    )
    .to("#scene-2", { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }, 1.9)
    .to("#scene-2 .section__content", {
      opacity: 0,
      onUpdate: checkVisibleClass("#scene-2 .section__content")
    }, 1.9)
    .to("#scene-3", { autoAlpha: 1, duration: 0.2 }, 1.9)
    .fromTo(
      "#scene-3 .section__content",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        ease: "power1.inOut",
        onUpdate: checkVisibleClass("#scene-3 .section__content")
      },
      1.9
    )
    .to("#scene-3", { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }, 2.4)
    .to("#scene-3 .section__content", {
      opacity: 0,
      onUpdate: checkVisibleClass("#scene-3 .section__content")
    }, 2.4)
    .to("#final", { autoAlpha: 1, duration: 0.2 }, 2.4)
    .fromTo(
      "#final .section__content",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        ease: "power1.inOut",
        onUpdate: checkVisibleClass("#final .section__content")
      },
      2.4
    );
};

const init = () => {

  const yoyoBtn = document.querySelector("#yoyoButton")
  let isClicked = false;


  yoyoBtn.addEventListener("click", (e) => {
    if (isClicked) return;
    isClicked = true;
    document.querySelector(".carousel-wrapper").classList.add("fadein")

    const container = document.querySelector(".mama-positivo-container")
    const mamaText = document.querySelector(".mama-text")
    const leftTrack = document.querySelector(".carousel--left .carousel__track")
    const rightTrack = document.querySelector(".carousel--right .carousel__track")

    const imageFiles = [
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/42390831_10211393230457508_1752141971511574528_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512743343_10226765627957838_7070501502769186272_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/512961577_10226681690459453_8542224299681358455_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514411820_10226839153195923_6965111380231862875_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/514501468_10226863094754447_6770766688415009070_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515135194_10226878297534507_2103012546675970488_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/515159310_10226856237343016_2733706818258785079_n.jpg",
      "https://raw.githubusercontent.com/dev-j0e1/Mother-s-day-card/refs/heads/main/imgs/561785495_10228012083718453_5491652062548348220_n.jpg"
    ];

    imageFiles.forEach((file, idx) => {
      const item = document.createElement("div")
      item.className = "carousel__item"
      const img = document.createElement("img")
      img.src = `imgs/${file}`
      item.appendChild(img)
      
      if (idx % 2 === 0) {
        leftTrack.appendChild(item)
      } else {
        rightTrack.appendChild(item)
      }
    })

    container.style.visibility = "visible"

    const tl = gsap.timeline()
    
    tl.to(container, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(mamaText, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, 0)

    const leftItems = document.querySelectorAll(".carousel--left .carousel__item")
    const rightItems = document.querySelectorAll(".carousel--right .carousel__item")

    leftItems.forEach((item, idx) => {
      tl.to(item, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut"
      }, 0.2 + idx * 0.08)
    })

    rightItems.forEach((item, idx) => {
      tl.to(item, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut"
      }, 0.2 + idx * 0.08)
    })

    const carousels = document.querySelectorAll(".carousel")
    carousels.forEach((carousel, index) => {
      const track = carousel.querySelector(".carousel__track")
      const itemHeight = 100;
      let iterator = 0

      setInterval(()=>{
        if (index%2===0) {
          track.style.transform = `translate(0px, -${iterator}px)`

        } else {
            let items = [...carousel.querySelectorAll("img")]
          track.style.transform = `translate(0px, -${(items.length - 1)*50-iterator}px)`

        }
          iterator = iterator+5
      }, 100)


    })

  })

  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
  setHeight();
  createSectionSequence();
  ScrollTrigger.refresh();
};

window.addEventListener("load", init);
window.addEventListener("resize", () => {
  setHeight();
  ScrollTrigger.refresh();
});
