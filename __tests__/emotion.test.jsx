import { render, screen } from "@testing-library/react";
import Info from "@/components/Info.jsx";

describe("Info", () => {
  it("renders a info", () => {
    render(<Info />);

    const heading = screen.getByText("the info");

    expect(heading).toBeInTheDocument();
  });
});
