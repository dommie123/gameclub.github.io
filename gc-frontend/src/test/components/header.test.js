import { render, screen } from '@testing-library/react';
import React from 'react';
import {Provider} from "react-redux";
import {store} from "../../store";

import App from '../../App';
import Header from '../../components/header';

describe("Header Component", () => {
    it("can render with the nav bar enabled", () => {
        render(<App />);
        const nav = document.getElementById("main-nav");
        expect(nav).toBeInTheDocument();
    });

    it("can render without the nav bar enabled", () => {
        render(<Provider store={store}><Header navIsHidden={true} title="Test Header"/></Provider>);
        const header = screen.getByText("Test Header");
        const nav = document.getElementById("main-nav");

        expect(header).toBeInTheDocument();
        expect(nav).not.toBeInTheDocument();
    });

    it("can change the title when a user clicks a link in the nav bar", () => {
        render(<App />);
        const nav = document.getElementById("main-nav");
        const header = screen.getByText("Game Club Official Website");
        const aboutUs = screen.getByText("About Us");

        expect(nav).toBeInTheDocument();
        expect(header.innerText).toBe("Game Club Official Website");

        // Manually click the link.
        aboutUs.onclick();

        expect(nav).toBeInTheDocument();
        expect(header.innerText).not.toBe("Game Club Official Website");
    });
});