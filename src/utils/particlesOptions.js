import FoodSvgs from "../assets/food";

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: false,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#FFF",
        blur: 6,
      },
    },
    move: {
      speed: 1,
      direction: "bottom",
      out_mode: "out",
    },
    shape: {
      type: ["images"],
      image: [
        {
          src: FoodSvgs.Sausage,
          height: 20,
          width: 20,
        },
        {
          src: FoodSvgs.Shawarma,
          height: 20,
          width: 20,
        },
        {
          src: FoodSvgs.Coffee,
          height: 20,
          width: 20,
        },
        {
          src: FoodSvgs.SodaCan,
          height: 20,
          width: 20,
        },
        {
          src: FoodSvgs.Burrito,
          height: 20,
          width: 20,
        },
        {
          src: FoodSvgs.Noodles,
          height: 20,
          width: 20,
        },
        {
          src: FoodSvgs.Muffin,
          height: 20,
          width: 20,
        },
      ],
    },
    color: {
      value: "#FFF",
    },
    size: {
      value: 40,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 5,
        sync: false,
      },
    },
  },
  retina_detect: true,
};

export default particlesOptions;
