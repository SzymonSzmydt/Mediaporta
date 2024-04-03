import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { sortingOptions } from "../components/lib/data/sortingOprions";
import SortingElement from "../components/sorting/SortingElement";

const meta: Meta<typeof SortingElement> = {
  title: "Components/SortingElement",
  component: SortingElement,
  tags: ["autodocs"],
  args: {
    setSelectedSort: fn(),
  },
} satisfies Meta<typeof SortingElement>;

export default meta;
type Story = StoryObj<typeof SortingElement>;

export const Primary: Story = {
  args: {
    name: "Kolejność",
    options: sortingOptions.order.pl,
  },
};

export const Secondary: Story = {
  args: {
    name: "Sortowanie wg",
    options: sortingOptions.sort.pl,
  },
};
