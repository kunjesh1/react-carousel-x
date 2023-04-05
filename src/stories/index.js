import React from "react";
import { storiesOf } from "@storybook/react";
import Default from "./Default";

storiesOf("Carousel", module)
  .add("default", () => <Default />)
  .add("disabled", () => <Default />);
