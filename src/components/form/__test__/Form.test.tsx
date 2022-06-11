import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";
test("input should be initially empty", () => {
  render(<Form />);
  const emailInputElement: HTMLInputElement = screen.getByRole("textbox");
  const passwordInputElement: HTMLInputElement =
    screen.getByLabelText("password");
  const confirmPasswordInputElement: HTMLInputElement =
    screen.getByLabelText(/confirm password/i);

  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPasswordInputElement.value).toBe("");
});

test("should validate form", () => {
  render(<Form />);
  const emailInputElement: HTMLInputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", {
    name: /submit/i,
  });
  const passwordInputElement: HTMLInputElement =
    screen.getByLabelText("password");
  const errorElement = screen.queryByText(/invalid Email/i);
  expect(errorElement).not.toBeInTheDocument();
  userEvent.click(buttonElement);
  const reErrorElement = screen.getByText(/invalid Email/i);
  expect(reErrorElement).toBeInTheDocument();
  userEvent.type(emailInputElement, "piash@gmail.com");

  userEvent.type(passwordInputElement, "123");
  userEvent.click(buttonElement);
  const passwordErrorElement = screen.getByText(
    /Password must be at least 4 characters/i
  );
  expect(passwordErrorElement).toBeInTheDocument();
  //
});
