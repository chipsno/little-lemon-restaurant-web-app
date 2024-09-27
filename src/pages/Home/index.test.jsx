import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import About from './components/About'

describe("Home page", () => {

  test("check buttons", async () => {
    render(
      <MemoryRouter>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </MemoryRouter>
    );

    const reserveTableBtn = screen.getAllByText(/Reserve a Table/);
    expect(reserveTableBtn.length).toBe(1)

    const onlineMenoBtn = screen.getAllByText(/Online Menu/);
    expect(onlineMenoBtn.length).toBe(1)

  });

});
