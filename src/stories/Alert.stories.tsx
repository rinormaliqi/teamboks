import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/ui/alert";
import { ComponentProps } from "react";
import { fn } from "@storybook/test";
import { CheckCircle } from "lucide-react";

type StoryProps = ComponentProps<typeof Alert>;

const meta: Meta<StoryProps> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    type: {
      options: ["success", "error", "warning", "info"],
      control: { type: "select" },
    },
    variant: {
      options: ["solid", "subtle", "outline"],
      control: { type: "select" },
      defaultValue: "solid",
    },
    title: { control: "text" },
    description: { control: "text" },
    dismissible: { control: "boolean" },
    onClose: { action: "closed" },
    icon: { control: "object" },
  },
  args: {
    type: "success",
    title: "Success!",
    description: "Your action was successful.",
    dismissible: true,
  },
  parameters: {
    controls: {
      expanded: true,
      sort: "requiredFirst",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        type="success"
        title="Solid Success"
        description="This is a solid variant alert"
        variant="solid"
      />
      <Alert
        type="error"
        title="Subtle Error"
        description="This is a subtle variant alert"
        variant="subtle"
      />
      <Alert
        type="warning"
        title="Outline Warning"
        description="This is an outline variant alert"
        variant="outline"
      />
    </div>
  ),
};

export const Closable: Story = {
  args: {
    type: "error",
    title: "Critical Error",
    description: "Something went very wrong!",
    onClose: fn(),
    dismissible: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    type: "info",
    title: "Custom Icon",
    description: "This alert uses a custom icon",
    icon: <CheckCircle className="text-purple-600" />,
  },
};

export const NonDismissible: Story = {
  args: {
    type: "warning",
    title: "Important Notice",
    description: "This alert cannot be dismissed",
    dismissible: false,
  },
};

export const WithoutTitle: Story = {
  args: {
    type: "info",
    description: "This is a simple message without a title",
  },
};

export const InteractiveExample: Story = {
  args: {
    type: "success",
    title: "Interactive Alert",
    description: "Try adjusting the controls in the Storybook panel!",
    variant: "solid",
    dismissible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the Storybook controls to dynamically adjust alert properties",
      },
    },
  },
};
