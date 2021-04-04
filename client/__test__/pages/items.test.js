import { render, screen } from "@testing-library/react";
import App from "../../pages/_app";
import ItemsPage from "../../pages/items";

describe("Items Page", () => {
  it("should render", async () => {
    const initialState = {
      shoppingCart: [],
    };

    const response = {
      categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
      items: [
        {
          id: "MLA904396343",
          title: "Nokia 23 M 32 Gb Verde Claro 2 Gb Ram",
          price: {
            currency: "ARS",
            amount: 17499,
            decimals: 0,
          },
          picture:
            "http://http2.mlstatic.com/D_857252-MLA44280741132_122020-I.jpg",
          condition: "new",
          free_shipping: true,
        },
      ],
    };

    const cmp = () => <ItemsPage search="test" items={response} />;
    render(<App Component={cmp} pageProps={initialState} />);

    expect(screen.getByTestId(`product-price-${response.items[0].id}`).textContent).toBe("17.499");
  });
});
