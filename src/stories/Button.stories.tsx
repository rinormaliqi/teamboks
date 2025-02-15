import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

import { ComponentProps } from "react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["lg", "md", "sm"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "hello",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
