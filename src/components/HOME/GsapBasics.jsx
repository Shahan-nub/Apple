"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function GsapBasics() {
  useGSAP(() => {
    gsap.fromTo(
      "#blue-box",
      {
        x: 0,
        borderRadius: 0,
        rotation: 0,
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        borderRadius: "100%",
      }
    );
  }, []);

  //timeline

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      borderRadius: "0%",
      duration: 1.5,
      rotation: 360,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 100,
      borderRadius: "100%",
      duration: 1.5,
      rotation: 360,
      backgroundColor: "red",
      ease: "bounce.out",
    });

    timeline.to("#yellow-box", {
      y: 0,
      borderRadius: "0%",
      duration: 1.5,
      rotation: 360,
      backgroundColor: "yellow",
      ease: "bounce.in",
    });

    timeline.to("#yellow-box", {
      x: 500,
      borderRadius: "100%",
      duration: 1.5,
      rotation: 360,
      ease: "back.inOut",
    });
  }, []);

  timeline.pause();

  // staggered animation

  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 200,
      borderRadius: "100%",
      rotation: 360,
      duration: 1,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1,
      stagger: {
        amount: 0.5,
        axis: "y",
        from: "center",
        grid: [2, 1],
      },
    });
  });

  // Scroll trigger

  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef();
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.3,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true, // makes the animation happen as u scroll
        },
        ease: "power1.inOut",
      });
    });
  });

  // Text animation

  useGSAP(() => {
    gsap.to("#text", {
      y: 0,
      ease: "power1.inOut",
      opacity: 1,
    });

    gsap.fromTo(
      ".text-para",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity:1,
        y:0,
        stagger:.2,
        delay:1
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-40  ">
      <div id="blue-box" className="bg-blue-400 h-20 w-20"></div>
      <button
        className="text-white self-center font-semibold bg-green-500 px-6 py-3 rounded-md"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else timeline.pause();
        }}
      >
        Play/Pause
      </button>

      <div id="yellow-box" className="bg-yellow-400 h-20 w-20 my-10"></div>

      {/* staggered animation */}

      <div className="flex gap-5 h-[60vh] my-10">
        <div className="stagger-box bg-blue-100 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-200 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-300 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-400 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-500 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-600 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-700 rounded-sm h-12 w-12"></div>
        <div className="stagger-box bg-blue-800 rounded-sm h-12 w-12"></div>
      </div>

      {/* Scroll trigger */}

      <div className="mt-40 w-full px-10 py-40" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 bg-pink-400"
        ></div>
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 bg-orange-400"
        ></div>
      </div>

      {/* text animation  */}

      <div className="py-40 px-32">
        <h1
          id="text"
          className="font-bold text-3xl text-white translate-y-5 opacity-0 my-12"
        >
          Gsap Text
        </h1>

        <p className="text-para text-gray-300 tetx-lg w-1/3 text-left my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ad
          animi soluta dolorum cumque, culpa aut pariatur sint mollitia adipisci
          provident ea at.
        </p>
        <p className="text-para text-gray-300 tetx-lg w-1/3 text-left my-2">
          Lorem cumque, culpa aut pariatur sint mollitia adipisci provident ea
          at.
        </p>
        <p className="text-para text-gray-300 tetx-lg w-1/3 text-left my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ad
          animi soluta dolorum.
        </p>
        <p className="text-para text-gray-300 tetx-lg w-1/3 text-left my-2">
          Read more at niggaMom.tv.
        </p>
      </div>
    </div>
  );
}
