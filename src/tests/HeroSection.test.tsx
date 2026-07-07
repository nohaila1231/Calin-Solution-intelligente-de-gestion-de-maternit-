import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";
import { MemoryRouter } from "react-router-dom";

// mock image
vi.mock("@/assets/hero-maternity.jpg", () => ({
  default: "hero.jpg",
}));

describe("HeroSection", () => {

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Une grossesse/i)
    ).toBeInTheDocument();
  });

  it("shows premium badge", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Accompagnement Premium/i)
    ).toBeInTheDocument();
  });

  it("shows hero subtitle", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Suivi personnalisé/i)
    ).toBeInTheDocument();
  });

  it("shows first button", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", {
        name: /Commencer maintenant/i,
      })
    ).toBeInTheDocument();
  });

  it("shows second button", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", {
        name: /En savoir plus/i,
      })
    ).toBeInTheDocument();
  });

  it("shows hero image", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByAltText(/Femme enceinte sereine/i)
    ).toBeInTheDocument();
  });

  it("shows statistics", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(screen.getByText("40+")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("15k+")).toBeInTheDocument();
  });

  it("shows trust text", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/\+15,000 mamans nous font confiance/i)
    ).toBeInTheDocument();
  });

  it("shows floating cards", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Communauté active/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/15,000\+ mamans vous accompagnent/i)
    ).toBeInTheDocument();
  });

  it("contains image src", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const image = screen.getByAltText(
      /Femme enceinte sereine/i
    ) as HTMLImageElement;

    expect(image.src).toContain("hero.jpg");
  });

});