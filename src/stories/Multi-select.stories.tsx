import type { Meta, StoryObj } from "@storybook/react";
import MultiSelect, { Option } from "@/components/ui/multi-select";

const staticOptions: Option[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3", disabled: true },
  { label: "Option 4", value: "4" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    options: staticOptions,
    placeholder: "Select items...",
  },
};

export const LoadingState: Story = {
  args: {
    options: async () => {
      return new Promise<Option[]>((resolve) =>
        setTimeout(() => resolve(staticOptions), 2000),
      );
    },
    placeholder: "Loading options...",
    isLoading: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: staticOptions,
    placeholder: "Choose your favorite...",
  },
};

export const PreSelected: Story = {
  args: {
    options: staticOptions,
    placeholder: "Select items...",
    value: [staticOptions[0], staticOptions[1]],
  },
};

export const DisabledComponent: Story = {
  args: {
    options: staticOptions,
    placeholder: "Select items...",
    disabled: true,
  },
};
