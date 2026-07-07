import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FeaturesSection from "@/components/FeaturesSection";

describe("FeaturesSection", () => {
  beforeEach(() => {
    render(<FeaturesSection />);
  });

  it("renders the section title", () => {
    expect(
      screen.getByText(/Fonctionnalités Complètes/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Tout ce dont vous avez/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/besoin en un seul endroit/i)
    ).toBeInTheDocument();
  });

  it("renders the section description", () => {
    expect(
      screen.getByText(/Une plateforme complète pensée/i)
    ).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    expect(screen.getByText(/Suivi Personnalisé/i)).toBeInTheDocument();
    expect(screen.getByText(/Bien-être & Santé/i)).toBeInTheDocument();
    expect(screen.getByText(/Communauté/i)).toBeInTheDocument();
    expect(screen.getByText(/Ressources Complètes/i)).toBeInTheDocument();
    expect(screen.getByText(/Développement Bébé/i)).toBeInTheDocument();
    expect(screen.getByText(/Sécurité & Confidentialité/i)).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    expect(
      screen.getByText(/Un accompagnement semaine par semaine/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Tout pour prendre soin de vous/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Échangez avec d'autres mamans/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/bibliothèque riche/i)
    ).toBeInTheDocument();
  });

  it("renders feature benefits", () => {
    expect(screen.getByText("Conseils personnalisés")).toBeInTheDocument();
    expect(screen.getByText("Rappels importants")).toBeInTheDocument();
    expect(screen.getByText("Suivi médical")).toBeInTheDocument();

    expect(screen.getByText("Nutrition optimale")).toBeInTheDocument();
    expect(screen.getByText("Exercices adaptés")).toBeInTheDocument();
    expect(screen.getByText("Relaxation")).toBeInTheDocument();

    expect(screen.getByText("Forums d'entraide")).toBeInTheDocument();
    expect(screen.getByText("Témoignages")).toBeInTheDocument();
    expect(screen.getByText("Conseils partagés")).toBeInTheDocument();
  });

  it("renders statistics section", () => {
    expect(screen.getByText("15,000+")).toBeInTheDocument();
    expect(screen.getByText("40")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
  });

  it("renders statistics labels", () => {
    expect(
      screen.getByText(/Mamans accompagnées/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Semaines de conseils/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Prénoms marocains/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Satisfaction client/i)
    ).toBeInTheDocument();
  });

  it("renders six cards", () => {
    expect(
      screen.getAllByText(/Conseils personnalisés|Nutrition optimale|Forums d'entraide/)
        .length
    ).toBeGreaterThan(2);
  });

  it("contains many list items", () => {
    expect(
      screen.getAllByRole("listitem").length
    ).toBeGreaterThan(15);
  });

  it("renders without crashing", () => {
    expect(document.body).toBeInTheDocument();
  });
});