import { Default } from "./Default";
import ScrollHint from "./ScrollHint";
import Thumbnail from "./Thumbnail";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Carousel",
  component: ScrollHint,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Thumbnails = {
  component: Thumbnail,
};

export const ScrollHints = {
  component: ScrollHint,
};

export const Large = {
  args: {
    size: "large",
    label: "Carousel",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Carousel",
  },
};
