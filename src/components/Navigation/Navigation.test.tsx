import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../store";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should a 'create' link", () => {
      const expectedCreateLink = "create";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <Navigation />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>,
      );
      const navigationLinkCreate = screen.getByRole("link", {
        name: expectedCreateLink,
      });
      expect(navigationLinkCreate).toBeInTheDocument();
    });
  });
});
