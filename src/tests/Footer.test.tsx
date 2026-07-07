import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/Footer";

const renderFooter = () =>
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

describe("Footer", () => {
  beforeEach(() => {
    renderFooter();
  });

  it("renders the application name", () => {
    expect(
      screen.getByText("Maternité Sereine")
    ).toBeInTheDocument();
  });

  it("renders the main description", () => {
    expect(
      screen.getByText(/Votre compagnon de confiance/i)
    ).toBeInTheDocument();
  });

  it("renders navigation title", () => {
    expect(
      screen.getByText("Navigation")
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("Conseils Grossesse")).toBeInTheDocument();
    expect(screen.getByText("Prénoms Marocains")).toBeInTheDocument();
    expect(screen.getByText("À Propos")).toBeInTheDocument();
  });

  it("renders resources title", () => {
    expect(
      screen.getByText("Ressources")
    ).toBeInTheDocument();
  });

  it("renders all resources", () => {
    expect(screen.getByText("Guide de grossesse")).toBeInTheDocument();
    expect(screen.getByText("Calculateur de grossesse")).toBeInTheDocument();
    expect(screen.getByText("Conseils nutrition")).toBeInTheDocument();
    expect(screen.getByText("Exercices prénatal")).toBeInTheDocument();
    expect(screen.getByText("Préparation accouchement")).toBeInTheDocument();
  });

  it("renders newsletter section", () => {
    expect(
      screen.getByText("Newsletter")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/Votre email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /S'inscrire/i,
      })
    ).toBeInTheDocument();
  });

  it("renders contact information", () => {
    expect(screen.getByText("Téléphone")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Adresse")).toBeInTheDocument();

    expect(
      screen.getByText("+212 5 22 XX XX XX")
    ).toBeInTheDocument();

    expect(
      screen.getByText("contact@maternite-sereine.ma")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Casablanca, Maroc")
    ).toBeInTheDocument();
  });

  it("renders copyright", () => {
    expect(
      screen.getByText(/© 2024 Maternité Sereine/i)
    ).toBeInTheDocument();
  });

  it("renders legal links", () => {
    expect(
      screen.getByText("Politique de confidentialité")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Conditions d'utilisation")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Mentions légales")
    ).toBeInTheDocument();
  });

  it("renders all buttons", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBeGreaterThanOrEqual(4);
  });

  it("renders all navigation links", () => {
    const links = screen.getAllByRole("link");

    expect(links.length).toBeGreaterThanOrEqual(12);
  });

  it("renders one email input", () => {
    expect(
      screen.getAllByRole("textbox").length
    ).toBe(1);
  });

  it("renders without crashing", () => {
    expect(document.body).toBeInTheDocument();
  });
});