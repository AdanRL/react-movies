import { ComponentStory, ComponentMeta} from "@storybook/react";
import {MovieTableCategory} from "./MovieTableCategory";
export default {
  title: "Movies list screen/MovieTableCategory",
  component: MovieTableCategory,
} as ComponentMeta<typeof MovieTableCategory>;

const Template: ComponentStory<typeof MovieTableCategory> = (args) => <MovieTableCategory {...args}/>;
export const popular = Template.bind({});
popular.args = {
  category: "Most Popular"
};
