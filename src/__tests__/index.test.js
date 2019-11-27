import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "../App";

afterEach(cleanup);

describe("App", () => {

    // https://github.com/jsdom/jsdom/issues/1937
    let emit;

    beforeAll(() => {
        ({ emit } = window._virtualConsole);
    });

    beforeEach(() => {
        window._virtualConsole.emit = jest.fn();
    });

    afterAll(() => {
        window._virtualConsole.emit = emit;
    });

    describe("Display", () => {

        it("displays Login Page", () => {
            const { getByText } = render(<App />);
            expect(getByText("Login Page")).toBeInTheDocument();
        });

        it("displays email label", () => {
            const { getByText } = render(<App />);
            expect(getByText("email:")).toBeInTheDocument();
        });

        it("is able to input email", () => {
            const { getByPlaceholderText } = render(<App />);
            expect(getByPlaceholderText("Input Your Email Address")).toBeInTheDocument();
        });

        it("displays password label", () => {
            const { getByText } = render(<App />);
            expect(getByText("password:")).toBeInTheDocument();
        });

        it("is able to input password", () => {
            const { getByPlaceholderText } = render(<App />);
            expect(getByPlaceholderText("Password")).toBeInTheDocument();
        });

        it("displays login Button", () => {
            const { getByText } = render(<App />);
            expect(getByText("Login")).toBeInTheDocument();
        });
    });

    describe("execute",  () => {
        
        it("execute login library when click login button", () => {
            const { getByText } = render(<App />);
            const spy = jest.spyOn(console, 'log')
            fireEvent.click(getByText("Login"))
            expect(spy).toHaveBeenCalledWith('it was called');
        });
    });
});
