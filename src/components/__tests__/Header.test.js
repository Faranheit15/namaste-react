import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  it("Should render Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });
  it("Should render Header component where cart items should be 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("🛒(0)");

    //Assertion
    expect(cartItems).toBeInTheDocument();
  });
  it("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "👤Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "🚀Logout" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
