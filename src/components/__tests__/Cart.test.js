import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Thalis (3)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  const addBtns = screen.getAllByRole("button", { name: "➕" });
  expect(screen.getByText("🛒(0)")).toBeInTheDocument();

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒(1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒(2)")).toBeInTheDocument();

  // cart + accordion
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear" }));
  expect(screen.getByText("Cart is empty ☹️")).toBeInTheDocument();
});
