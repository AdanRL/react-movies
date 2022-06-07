import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Button} from "./Button";

export default {
  title: "Movies list screen/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const login = Template.bind({});
login.args = {
  text: "Log In",
  width: "150px",
  height: "40px",
  color: "#D5E6FB"
};

export const signup = Template.bind({});
signup.args = {
  text: "Sign Up",
  width: "150px",
  height: "40px",
  color: "#ABD2FF"
};
