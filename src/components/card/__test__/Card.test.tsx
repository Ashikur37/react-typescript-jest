import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../Card";

const props = {
  name: "Sydney",
  phone: "15225556",
  email: "piash@gmail.com",
  image: {
    url: "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?ver-20220429.02",
    alt: "nice cat",
  },
  favoured: false,
};

describe("card", () => {
  test("Should show name of cat", () => {
    render(<Card {...props} />);
    expect(
      screen.getByRole("heading", {
        name: "Sydney",
      })
    ).toBeInTheDocument();
  });
  test("Should show email", () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.email)).toBeInTheDocument();
  });
  test("Should show phone", () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.phone)).toBeInTheDocument();
  });
  test("Should show image", () => {
    render(<Card {...props} />);
    expect(screen.getByAltText<HTMLImageElement>(props.image.alt).src).toBe(
      props.image.url
    );
  });
  test("should show heart", () => {
    render(<Card {...props} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
  test("should show filled heart", () => {
    render(<Card {...props} favoured={true} />);
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });
  test("should toggle heart", () => {
    render(<Card {...props} />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
