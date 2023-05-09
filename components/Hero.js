import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div>
        <h1>{blok.title}</h1>
        <h2>{blok.subtitle}</h2>
      </div>
      <img src={blok.hero_image.filename} alt={blok.hero_image.alt} />
    </div>
  );
};

export default Hero;
