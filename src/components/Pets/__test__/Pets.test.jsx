import { render, screen } from "@testing-library/react";
import Pets from "../Pets";

describe("Pets", () => {
  test("Should render the correct about cards", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toBe(5);
  });
});
