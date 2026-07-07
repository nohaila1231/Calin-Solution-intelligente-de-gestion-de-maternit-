import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import MonthlyAdvice from "@/components/MonthlyAdvice";

describe("MonthlyAdvice", () => {
  beforeEach(() => {
    render(<MonthlyAdvice />);
  });

  it("renders the section title", () => {
    expect(
      screen.getByText(/Suivi Mensuel/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Votre grossesse/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/mois par mois/i)
    ).toBeInTheDocument();
  });

  it("renders section description", () => {
    expect(
      screen.getByText(/Découvrez l'évolution de votre bébé/i)
    ).toBeInTheDocument();
  });

  it("renders all nine months", () => {
    for (let i = 1; i <= 9; i++) {
      expect(
        screen.getByText(`Mois ${i}`)
      ).toBeInTheDocument();
    }
  });

  it("first month is expanded by default", () => {
    expect(
      screen.getByText("Début de l'aventure")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Symptômes courants/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Conseils du mois/i)
    ).toBeInTheDocument();
  });

  it("shows first month advice", () => {
    expect(
      screen.getByText("Prenez de l'acide folique")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Évitez l'alcool et le tabac")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Consultez votre médecin")
    ).toBeInTheDocument();
  });

  it("shows first month symptoms", () => {
    expect(screen.getByText("Fatigue")).toBeInTheDocument();
    expect(screen.getByText("Nausées matinales")).toBeInTheDocument();
    expect(screen.getByText("Seins sensibles")).toBeInTheDocument();
  });

  it("opens another month when clicked", async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByText("Formation des organes")
    );

    expect(
      screen.getByText("Hydratation importante")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alimentation équilibrée")
    ).toBeInTheDocument();
  });

  it("opens month five", async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByText("Premiers mouvements")
    );

    expect(
      screen.getByText("Musique pour bébé")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Renforcement du dos")
    ).toBeInTheDocument();
  });

  it("opens last month", async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByText("L'attente finale")
    );

    expect(
      screen.getByText("Profitez des derniers moments")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Surveillez les signes")
    ).toBeInTheDocument();
  });

  it("closes expanded month when clicked again", async () => {
    const user = userEvent.setup();

    const firstCard = screen.getByText("Début de l'aventure");

    await user.click(firstCard);

    expect(
      screen.queryByText("Prenez de l'acide folique")
    ).not.toBeInTheDocument();
  });

  it("shows detail button when expanded", () => {
    expect(
      screen.getByRole("button", {
        name: /Voir plus de détails/i,
      })
    ).toBeInTheDocument();
  });

  it("renders all month titles", () => {
    expect(screen.getByText("Début de l'aventure")).toBeInTheDocument();
    expect(screen.getByText("Formation des organes")).toBeInTheDocument();
    expect(screen.getByText("Fin du premier trimestre")).toBeInTheDocument();
    expect(screen.getByText("Épanouissement")).toBeInTheDocument();
    expect(screen.getByText("Premiers mouvements")).toBeInTheDocument();
    expect(screen.getByText("Communication établie")).toBeInTheDocument();
    expect(screen.getByText("Début du 3ème trimestre")).toBeInTheDocument();
    expect(screen.getByText("Préparatifs finaux")).toBeInTheDocument();
    expect(screen.getByText("L'attente finale")).toBeInTheDocument();
  });

  it("renders all baby sizes", () => {
    expect(screen.getByText(/Graine de pavot/i)).toBeInTheDocument();
    expect(screen.getByText(/Myrtille/i)).toBeInTheDocument();
    expect(screen.getByText(/Prune/i)).toBeInTheDocument();
    expect(screen.getByText(/Avocat/i)).toBeInTheDocument();
    expect(screen.getByText(/Banane/i)).toBeInTheDocument();
    expect(screen.getByText(/Épis de maïs/i)).toBeInTheDocument();
    expect(screen.getByText(/Aubergine/i)).toBeInTheDocument();
    expect(screen.getByText(/Courge butternut/i)).toBeInTheDocument();
    expect(screen.getByText(/Pastèque/i)).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    expect(document.body).toBeInTheDocument();
  });
});