import { render, screen } from "@testing-library/react";
import { store } from "../../store";
import mainTheme from "../../styles/mainTheme";
import NewMoviePage from "./NewMoviePage";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Given a Create page", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with the text 'Add a new Serie B horror movie!'", () => {
      const headingText = "Add a new Serie B horror movie!";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <NewMoviePage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
