import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginPage } from "./login.page";
import { BrowserRouter } from "react-router-dom";
import { signIn } from "@/data/services/auth/firebase_auth.service";

// Mocking the signIn function to simulate incorrect credentials
vi.mock("@/data/services/auth/firebase_auth.service", () => ({
  signIn: vi.fn(),
}));

describe("login page", async () => {
  it("load login buttons", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Entrar");
    const loginGoogleButton = screen.getByText("Entrar com conta do Google");

    expect(loginButton).toBeInTheDocument();
    expect(loginGoogleButton).toBeInTheDocument();
  });

  it("load login texts", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const txtEmail = screen.getByText("E-mail");
    const txtPasswd = screen.getByText("Senha");
    const txtForgotPasswd = screen.getByText("Esqueci minha senha");

    expect(txtEmail).toBeInTheDocument();
    expect(txtPasswd).toBeInTheDocument();
    expect(txtForgotPasswd).toBeInTheDocument();
  });

  it("displays error message when invalid email or password is entered", async () => {
    const errorMessage = "Credenciais inválidas";

    // Configuring mock to simulate an error when trying to login
    (signIn as Mock).mockRejectedValueOnce(new Error(errorMessage));

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Simulating the entry of values ​​in the email and password fields
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "invalid@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: "wrongpassword" },
    });

    // Simulating the click on the login button
    fireEvent.click(screen.getByText("Entrar"));

    // Checking if the error message appears
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
