import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from './../components/common/header';

describe("Header", () => {
  it("Header check", () => {
    render(<Header />);
    const heading = screen.getByTitle("메인페이지|고투게더");
    expect(heading).toBeChecked();
  });
});
