import type { Meta, StoryObj } from "@storybook/react";

import Browser from "../components/browser/Browser";

const meta = {
  title: "Components/Browser",
  component: Browser,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Browser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Url: Story = {
  args: {
    selectedSort: { order: 0, sort: 0 },
  },
};
