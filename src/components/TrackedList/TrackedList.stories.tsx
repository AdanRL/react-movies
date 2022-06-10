import { ComponentStory, ComponentMeta} from "@storybook/react";
import {TrackedList} from "./TrackedList";
export default {
  title: "Movies list screen/TrackedList",
  component: TrackedList,
} as ComponentMeta<typeof TrackedList>;

const Template: ComponentStory<typeof TrackedList> = (args) => <TrackedList {...args}/>;
export const tracking= Template.bind({});
tracking.args = {

};
