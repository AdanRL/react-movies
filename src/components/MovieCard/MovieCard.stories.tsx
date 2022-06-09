import { ComponentStory, ComponentMeta} from "@storybook/react";
import { BrowserRouter as Router} from "react-router-dom";
import {MovieCard} from "./MovieCard";
export default {
  title: "Movies list screen/MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <Router><MovieCard {...args}/></Router>;
export const fantasticBeasts = Template.bind({});
fantasticBeasts.args = {
  id: 435259,
  title: "Fantastic Beasts",
  movieImage: "https://www.themoviedb.org/t/p/w188_and_h282_face/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg",
  releaseDate: "20-02-2022",
  popularity: 4042.323
};

export const morbius = Template.bind({});
morbius.args = {
  id: 675353,
  title: "Morbius",
  movieImage: "https://www.themoviedb.org/t/p/w188_and_h282_face/6WmTdYNoSinBAXs0AfTTCSaV5lw.jpg",
  releaseDate: "20-02-2022",
  popularity: 4042.323
};
