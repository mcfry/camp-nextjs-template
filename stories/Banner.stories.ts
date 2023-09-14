import type { Meta, StoryObj } from "@storybook/react"

import Banner from "../app/components/Banner"

const meta = {
  title: "Example/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof Banner>

export default meta

// --------

type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {}
}
