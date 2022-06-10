import { ComponentStory, ComponentMeta} from "@storybook/react";
import {MovieDetails} from "./MovieDetails";

export default {
  title: "Movie Details screen/MovieDetails",
  component: MovieDetails,
} as ComponentMeta<typeof MovieDetails>;

const Template: ComponentStory<typeof MovieDetails> = (args) => <MovieDetails {...args}/>;

export const fantasticBeasts = Template.bind({});
fantasticBeasts.args = {
  title: "Fantastic Beast", 
  posterImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg", 
  genres: ["Fantasy", "Adventures"], 
  releaseDate: "14-05-2022" ,
  description: "Harry Potter but without Harry Potter :("
};
