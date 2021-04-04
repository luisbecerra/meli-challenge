import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../pages/_app";
import CartPage from "../../pages/cart";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./../../store/reducer";

describe("Cart Page", () => {
  const product = {
    id: "MLA904396343",
    title: "Nokia 23 M 32 Gb Verde Claro 2 Gb Ram",
    price: {
      currency: "ARS",
      amount: 17499,
      decimals: 0,
    },
    picture:
      "http://http2.mlstatic.com/D_857252-MLA44280741132_122020-O.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 500,
    description:
      "Pensado para vos\nEl Nokia 23 M posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro, navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.\n\nDoble cámara y más detalles\nSus 2 cámaras traseras de 13 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.\n\nAdemás, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nReconocimiento facial para mayor seguridad\nAcercá el dispositivo a tu rostro para desbloquearlo instantáneamente. Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro. \n\nBatería superior\n¡Desenchufate! Con la súper batería de 4000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.\n\nEl espacio que necesitás\nCon su memoria interna de 32 GB descargá tus aplicaciones favoritas y guardá todas las fotos y videos que quieras.",
  };


  it("should render", async () => {
    const initialState = {
      shoppingCart: [],
    };
    render(<App Component={CartPage} pageProps={initialState} />);

    expect(screen.getByText("No hay productos en el carrito de compras")).toBeDefined();
    expect(screen.getByTestId("card-notification-badge").textContent).toBe("0");
  });

  it("should render with one product", async () => {
    const initialState = {
      shoppingCart: [product],
    };

    const store = createStore(reducer, initialState);

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    expect(screen.getByTestId(`product-price-${product.id}`).textContent).toBe("17.499");
    expect(screen.getByTestId("card-notification-badge").textContent).toBe("1");
  });

  it("should render with one product and click to delete them", async () => {
    const initialState = {
      shoppingCart: [product],
    };

    const store = createStore(reducer, initialState);

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    fireEvent(
      screen.getByTestId(`remove-product-${product.id}`),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(screen.getByTestId("card-notification-badge").textContent).toBe("0");
  });
});
