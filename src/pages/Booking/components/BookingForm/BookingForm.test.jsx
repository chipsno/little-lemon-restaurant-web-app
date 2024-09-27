import { render, screen } from "@testing-library/react";
import Booking from '../../../Booking'

describe("booking form", () => {

  test("check booking form", async () => {
    render(
      <Booking />
    );

    const dateInput = screen.getByLabelText(/Date/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue();

    const timeSelect = screen.getByLabelText(/Time/);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).not.toHaveValue();

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveValue("1");

    const occasionSelect = screen.getByLabelText(/Occasion/);
    expect(occasionSelect).toBeInTheDocument();

    const submitButton = screen.getByText("Reserve now!");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });

});
