import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByTitle("메인페이지|고투게더");
    expect(heading).toBeChecked();
  });
});
