import { ComponentStory, ComponentMeta} from "@storybook/react";
import { BrowserRouter as Router} from "react-router-dom";
import {MovieTableCategory} from "./MovieTableCategory";
export default {
  title: "Movies list screen/MovieTableCategory",
  component: MovieTableCategory,
} as ComponentMeta<typeof MovieTableCategory>;

const Template: ComponentStory<typeof MovieTableCategory> = (args) => <Router><MovieTableCategory {...args}/></Router>;
export const popular = Template.bind({});
popular.args = {
  category: "Most Popular"
};
