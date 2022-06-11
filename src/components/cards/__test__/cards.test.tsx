import { screen, render } from "@testing-library/react";
import Cards from "../cards";
import cats from "../../../mocks/cats.json";
describe("cards", () => {
  test("should render five card components", () => {
    render(<Cards cats={cats} />);
    expect(screen.getAllByRole("article").length).toBe(5);
  });
});
