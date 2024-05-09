import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HiddenMessage from "./HiddenMessage";
import { expect, test } from "vitest";

test("show the children when the button is pressed", () => {
  const testMessage = "Ciao";
  render(<HiddenMessage>{testMessage}</HiddenMessage>);

  expect(screen.queryByText(testMessage)).toBeNull();

  userEvent.click(screen.getByText(/Show/i));

  expect(screen.getByRole("button", { name: /hidden/i })).toBeDefined();
});
