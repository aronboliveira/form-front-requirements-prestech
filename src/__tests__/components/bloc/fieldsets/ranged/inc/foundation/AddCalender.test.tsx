import React from "react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import AddCalendar from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddCalendar";
const dateLimits = {
  year: { min: 2000, max: 2020 },
  month: { min: 1, max: 12 },
  day: { min: 1, max: 31 },
};
describe("AddCalendar Component", () => {
  it('should render an input element with type "date" and set correct min/max attributes', async () => {
    render(
      <AddCalendar
        id='test-calendar'
        name='testCalendar'
        type='date'
        limits={dateLimits}
      />
    );
    const input = screen.getByRole(
      "textbox"
    ) as HTMLInputElement;
    expect(input).toHaveAttribute("type", "date");
    await waitFor(() => {
      expect(input.min).toBe("2000-01-01");
      expect(input.max).toBe("2020-12-31");
    });
  });
});
