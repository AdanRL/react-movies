import { ComponentStory, ComponentMeta} from "@storybook/react";
import {Header} from "./Header";
export default {
  title: "Movies list screen/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;
export const header = Template.bind({});
