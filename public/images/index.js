import slide1 from "./Dragon-statues.jpeg";
import slide2 from "./forgotten.jpeg";
import slide3 from "./Knight.jpeg";
import slide4 from "./Ranger.jpeg";

export const media = [slide1, slide2, slide3, slide4];
export const mediaByIndex = index => media[index % media.length];
