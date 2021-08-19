import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "../../src/components/login-form";

describe("User Login Form", () => {
    it("can render on-screen without crashing", () => {
        render(<LoginForm />);
        const labels = document.getElementsByTagName("label");
        const inputFields = document.getElementsByTagName("input");

        for (let el in labels) {
            expect(el).toBeInTheDocument();
        }
        for (let el in inputFields) {
            expect(el).toBeInTheDocument();
        }
    });
});