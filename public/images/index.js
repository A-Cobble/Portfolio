import slide1 from "./Instructor-Hub.png";
import slide2 from "./Steam-Clone1.png";
import slide3 from "./Asteroids-Game.png";
import slide4 from "./Dungeons & Dragons Character Sheet.png";

export const media = [slide1, slide2, slide3, slide4];
export const mediaByIndex = index => media[index % media.length];
