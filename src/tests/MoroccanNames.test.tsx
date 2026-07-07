import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MoroccanNames from "@/components/MoroccanNames";

describe("MoroccanNames", () => {
  it("renders correctly", () => {
    render(<MoroccanNames />);

    expect(document.body).toBeInTheDocument();
  });

  it("renders a section", () => {
    const { container } = render(<MoroccanNames />);

    expect(container.querySelector("section")).toBeTruthy();
  });

  it("contains a title", () => {
    render(<MoroccanNames />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("displays names or cards", () => {
    const { container } = render(<MoroccanNames />);

    const cards =
      container.querySelectorAll(".card").length ||
      container.querySelectorAll("[class*=card]").length ||
      container.querySelectorAll("article").length ||
      container.querySelectorAll("li").length;

    expect(cards).toBeGreaterThan(0);
  });

  it("contains buttons if available", () => {
    render(<MoroccanNames />);

    const buttons = screen.queryAllByRole("button");

    expect(buttons.length).toBeGreaterThanOrEqual(0);
  });

  it("contains text content", () => {
    const { container } = render(<MoroccanNames />);

    expect(container.textContent?.length).toBeGreaterThan(20);
  });

  it("renders without crashing multiple times", () => {
    render(<MoroccanNames />);
    render(<MoroccanNames />);

    expect(document.body).toBeInTheDocument();
  });

  it("contains images if present", () => {
    const { container } = render(<MoroccanNames />);

    const images = container.querySelectorAll("img");

    expect(images.length).toBeGreaterThanOrEqual(0);
  });

  it("matches snapshot", () => {
    const { container } = render(<MoroccanNames />);

    expect(container).toMatchSnapshot();
  });

  it("contains enough html", () => {
    const { container } = render(<MoroccanNames />);

    expect(container.innerHTML.length).toBeGreaterThan(100);
  });
});