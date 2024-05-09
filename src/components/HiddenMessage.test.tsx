import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import HiddenMessage from "./HiddenMessage";
import { expect, test } from "vitest";

test("show the children when the button is pressed", () => {
  const testMessage = "Test Message";
  render(<HiddenMessage>{testMessage}</HiddenMessage>);

  expect(screen.queryByText(testMessage)).toBeNull();

  userEvent.click(screen.getByLabelText(/show/i));

  expect(screen.getByText(testMessage)).toBeDefined();
});
