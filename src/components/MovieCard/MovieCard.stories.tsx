import { ComponentStory, ComponentMeta} from "@storybook/react";
import {MovieCard} from "./MovieCard";
export default {
  title: "Movies list screen/MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args}/>;
export const fantasticBeasts = Template.bind({});
fantasticBeasts.args = {
  title: "Fantastic Beasts",
  movieImage: "https://www.themoviedb.org/t/p/w188_and_h282_face/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg",
  releaseDate: "20-02-2022",
  popularity: 4042.323
};

export const morbius = Template.bind({});
morbius.args = {
  title: "Morbius",
  movieImage: "https://www.themoviedb.org/t/p/w188_and_h282_face/6WmTdYNoSinBAXs0AfTTCSaV5lw.jpg",
  releaseDate: "20-02-2022",
  popularity: 4042.323
};

export const notFound = Template.bind({});
notFound.args = {
  title: "Not Found",
  movieImage: "",
  releaseDate: "",
  popularity: 0
};
