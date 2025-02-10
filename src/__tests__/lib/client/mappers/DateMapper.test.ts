import { RefObject } from "react";
import DateMapper from "../../../../lib/client/mappers/DateMapper";
jest.mock(
  "../../../../lib/client/handlers/MathHandler",
  () => ({
    __esModule: true,
    default: {
      parseNotNaN: jest
        .fn()
        .mockImplementation((val, def) => {
          const parsed = parseInt(val, 10);
          return Number.isNaN(parsed) ? def : parsed;
        }),
      getByOffSet: jest
        .fn()
        .mockImplementation(({ ref, length, offSet }) => {
          return (ref + (length - offSet)) % length;
        }),
    },
  })
);
function createFakeInputElement(): HTMLInputElement {
  const fakeInput = {
    value: "",
    type: "",
    dataset: {} as DOMStringMap,
  } as HTMLInputElement;
  return fakeInput;
}
describe("DateMapper Class", () => {
  let refObj: RefObject<HTMLInputElement>;
  beforeEach(() => {
    refObj = { current: createFakeInputElement() };
  });
  describe("limitByDate()", () => {
    it("does nothing if ref is null", () => {
      const dateMapper = new DateMapper({ current: null });
      expect(() => dateMapper.limitByDate()).not.toThrow();
    });
    it("handles type='date' with minyear / maxyear dataset", () => {
      refObj.current!.type = "date";
      refObj.current!.value = "2025-08-15";
      refObj.current!.dataset.minyear = "2020";
      refObj.current!.dataset.maxyear = "2024";
      const dateMapper = new DateMapper(refObj);
      dateMapper.limitByDate();
      expect(refObj.current!.value).toBe("2024-08-15");
    });
    it("handles type='week' with minweek / maxweek dataset", () => {
      refObj.current!.type = "week";
      refObj.current!.value = "2023-W15";
      refObj.current!.dataset.minweek = "10";
      refObj.current!.dataset.maxweek = "12";
      const dateMapper = new DateMapper(refObj);
      dateMapper.limitByDate();
      expect(refObj.current!.value).toBe("2023-W12");
    });
    it("handles type='month' with minmonth / maxmonth dataset", () => {
      refObj.current!.type = "month";
      refObj.current!.value = "2022-09";
      refObj.current!.dataset.minmonth = "05";
      refObj.current!.dataset.maxmonth = "06";
      const dateMapper = new DateMapper(refObj);
      dateMapper.limitByDate();
      expect(refObj.current!.value).toBe("2022-06");
    });
    it("handles type='time' with minhour / maxhour, etc. dataset", () => {
      refObj.current!.type = "time";
      refObj.current!.value = "25:61:70";
      refObj.current!.dataset.minhour = "02";
      refObj.current!.dataset.maxhour = "18";
      refObj.current!.dataset.minminute = "00";
      refObj.current!.dataset.maxminute = "59";
      refObj.current!.dataset.minsec = "00";
      refObj.current!.dataset.maxsec = "59";
      const dateMapper = new DateMapper(refObj);
      dateMapper.limitByDate();
      expect(refObj.current!.value).toBe("18:59:59");
    });
    it("handles type='datetime-local' with multiple min/max constraints", () => {
      refObj.current!.type = "datetime-local";
      refObj.current!.value = "2023-13-40T29:72:99";
      refObj.current!.dataset.minmonth = "01";
      refObj.current!.dataset.maxmonth = "12";
      refObj.current!.dataset.minmonthday = "01";
      refObj.current!.dataset.maxmonthday = "31";
      refObj.current!.dataset.minhour = "00";
      refObj.current!.dataset.maxhour = "23";
      refObj.current!.dataset.minminute = "00";
      refObj.current!.dataset.maxminute = "59";
      refObj.current!.dataset.minsec = "00";
      refObj.current!.dataset.maxsec = "59";
      const dateMapper = new DateMapper(refObj);
      dateMapper.limitByDate();
      expect(refObj.current!.value).toBe(
        "2023-12-31T23:59:59"
      );
    });
  });
  describe("Static Methods", () => {
    describe("getISOYearStartingReferences()", () => {
      it("computes references for given year", () => {
        const { j4, j4d, w1Md } =
          DateMapper.getISOYearStartingReferences(2023);
        expect(j4.getFullYear()).toBe(2023);
        expect(j4d).toBeGreaterThanOrEqual(0);
        expect(j4d).toBeLessThanOrEqual(6);
        expect(w1Md.getFullYear()).toBe(2023);
      });
    });
    describe("getLastISOWeekNum()", () => {
      it("returns 52 or 53 depending on year", () => {
        expect(
          DateMapper.getLastISOWeekNum(2023)
        ).toBeGreaterThanOrEqual(52);
        expect(
          DateMapper.getLastISOWeekNum(2023)
        ).toBeLessThanOrEqual(53);
      });
    });
    describe("getMonthForISOWeek()", () => {
      it("returns the 0-based month index for a given year/week", () => {
        const monthIndex = DateMapper.getMonthForISOWeek(
          2023,
          2
        );
        expect(monthIndex).toBeGreaterThanOrEqual(0);
        expect(monthIndex).toBeLessThanOrEqual(11);
      });
    });
    describe("getISOWeeksForMonth()", () => {
      it("returns an array of ISO weeks that fall in a given month", () => {
        const weeks = DateMapper.getISOWeeksForMonth(
          2023,
          1
        );
        expect(Array.isArray(weeks)).toBe(true);
        weeks.forEach(w => {
          expect(w).toBeGreaterThanOrEqual(1);
          expect(w).toBeLessThanOrEqual(53);
        });
      });
    });
  });
});
