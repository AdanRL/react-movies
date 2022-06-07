import { ComponentStory, ComponentMeta} from "@storybook/react";
import {MovieCard} from "./MovieCard";
export default {
  title: "Movies list screen/MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args}/>;
export const fantasticBeasts = Template.bind({});
fantasticBeasts.args = {
  id: 338953
};

export const morbius = Template.bind({});
morbius.args = {
  id: 526896
};

export const notFound = Template.bind({});
notFound.args = {
  id: -1
};
