import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("should render the home page", async () => {
    render(
      await HomePage({
        searchParams: {
          page: "1",
          limit: "10",
          search: "",
        },
      })
    );

    const title = await screen.findByText("Bienvenido a DevTech Store");
    expect(title).toBe("Bienvenido a DevTech Store");
  });
});
