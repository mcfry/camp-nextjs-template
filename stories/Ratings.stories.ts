import type { Meta, StoryObj } from "@storybook/react"

import Ratings from "../app/components/Ratings"

const meta = {
  title: "Example/Ratings",
  component: Ratings,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof Ratings>

export default meta

// --------

type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    number: 5,
    size: "rating-md"
  }
}

export const Large: Story = {
  args: {
    number: 5,
    size: "rating-lg"
  }
}

export const CheckedAndSmall: Story = {
  args: {
    number: 2,
    size: "rating-sm"
  }
}

export const TailwindColorTestRed: Story = {
  args: {
    number: 4,
    size: "rating-md",
    color: "bg-red-500"
  }
}

export const TailwindColorTestPurple: Story = {
  args: {
    number: 4,
    size: "rating-md",
    color: "bg-purple-500"
  }
}
