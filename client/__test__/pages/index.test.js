import { render, screen } from "@testing-library/react";
import App from "../../pages/_app";
import IndexPage from "../../pages/index";
import { getServerSideProps } from "../../pages/index";

describe("Index Page", () => {
  it("should render", async () => {
    const initialState = {
      shoppingCart: [],
    }
    render(<App Component={IndexPage} pageProps={initialState} />);

    expect(screen.getByTestId("card-notification-badge").textContent).toBe("0")
  });

  it("should getServerSideProps", async () => {
    const state = getServerSideProps();
    expect(state.props.initialReduxState.shoppingCart).toBeDefined();
  });
});
