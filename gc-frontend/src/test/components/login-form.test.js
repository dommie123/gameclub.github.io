import React from "react";
import {Provider} from "react-redux";
import { render, screen } from "@testing-library/react";
import {store} from "../../store";
import LoginForm from "../../components/login-form";

describe("User Login Form", () => {
    it("can render on-screen without crashing", () => {
        render(<Provider store={store}><LoginForm /></Provider>);
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