import DateMapper from "../../../../lib/client/mappers/DateMapper";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
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
describe("DateMapper static methods", () => {
  test("getISOYearStartingReferences returns expected values", () => {
    const year = 2020;
    const { j4, j4d, w1Md } =
      DateMapper.getISOYearStartingReferences(year);
    expect(j4.getFullYear()).toBe(year);
    expect(j4.getMonth()).toBe(0);
    expect(j4.getDate()).toBe(4);
    expect(w1Md.getDay()).toBe(1);
  });
  test("getLastISOWeekNum returns 52 or 53 based on year's last day", () => {
    expect(DateMapper.getLastISOWeekNum(2017)).toBe(52);
    expect(DateMapper.getLastISOWeekNum(2020)).toBe(53);
  });
  test("getMonthForISOWeek returns expected month", () => {
    const month = DateMapper.getMonthForISOWeek(2020, 1);
    expect(month).toBe(0);
  });
  test("getISOWeeksForMonth returns weeks for a given month", () => {
    const weeks = DateMapper.getISOWeeksForMonth(2020, 1);
    expect(Array.isArray(weeks)).toBe(true);
    expect(weeks.length).toBeGreaterThan(0);
    weeks.forEach(w => expect(typeof w).toBe("number"));
  });
});
describe("DateMapper instance method: limitByDate", () => {
  let fakeInput: any;
  let ref: { current: any };
  let dateMapper: DateMapper;
  beforeEach(() => {
    fakeInput = {
      value: "",
      type: "date",
      step: "1",
      dataset: {} as Record<string, string>,
    };
    ref = { current: fakeInput };
    dateMapper = new DateMapper(ref);
    jest
      .spyOn(DOMValidator, "isYearInput")
      .mockReturnValue(false);
    jest
      .spyOn(DOMValidator, "isMonthInput")
      .mockReturnValue(false);
    jest
      .spyOn(DOMValidator, "isDayInput")
      .mockReturnValue(false);
    jest
      .spyOn(DOMValidator, "isHourInput")
      .mockReturnValue(false);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("for type 'date', clamps the year if below minimum", () => {
    fakeInput.type = "date";
    fakeInput.value = "1999-12-31";
    fakeInput.dataset.minyear = "2000";
    fakeInput.dataset.maxyear = "2100";
    fakeInput.dataset.minmonth = "01";
    fakeInput.dataset.maxmonth = "12";
    fakeInput.dataset.minmonthday = "01";
    fakeInput.dataset.maxmonthday = "31";
    const result = dateMapper.limitByDate();
    expect(result.startsWith("2000-")).toBe(true);
  });
  test("for type 'month', returns a clamped month string", () => {
    fakeInput.type = "month";
    fakeInput.value = "1999-12";
    fakeInput.dataset.minyear = "2000";
    fakeInput.dataset.maxyear = "2100";
    const result = dateMapper.limitByDate();
    expect(result.startsWith("2000-")).toBe(true);
  });
  test("for type 'week', returns a formatted week string", () => {
    fakeInput.type = "week";
    fakeInput.value = "1999-W05";
    fakeInput.dataset.minyear = "2000";
    fakeInput.dataset.maxyear = "2100";
    const result = dateMapper.limitByDate();
    expect(result).toMatch(/^2000-W\d{2}$/);
  });
  test("for type 'time', returns formatted time with seconds", () => {
    fakeInput.type = "time";
    fakeInput.value = "25:61:90";
    fakeInput.dataset.minhour = "00";
    fakeInput.dataset.maxhour = "23";
    fakeInput.dataset.minminute = "00";
    fakeInput.dataset.maxminute = "59";
    fakeInput.dataset.minsec = "00";
    fakeInput.dataset.maxsec = "59";
    const result = dateMapper.limitByDate();
    expect(result).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });
  test("for type 'datetime-local', returns a formatted datetime string", () => {
    fakeInput.type = "datetime-local";
    fakeInput.value = "1999-12-31T25:61:90";
    fakeInput.dataset.minyear = "2000";
    fakeInput.dataset.maxyear = "2100";
    fakeInput.dataset.minmonth = "01";
    fakeInput.dataset.maxmonth = "12";
    fakeInput.dataset.minmonthday = "01";
    fakeInput.dataset.maxmonthday = "31";
    fakeInput.dataset.minhour = "00";
    fakeInput.dataset.maxhour = "23";
    fakeInput.dataset.minminute = "00";
    fakeInput.dataset.maxminute = "59";
    fakeInput.dataset.minsec = "00";
    fakeInput.dataset.maxsec = "59";
    const result = dateMapper.limitByDate();
    expect(result).toMatch(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/
    );
  });
  test("returns original value if type is unrecognized", () => {
    fakeInput.type = "unknown";
    fakeInput.value = "unchanged";
    expect(dateMapper.limitByDate()).toBe("unchanged");
  });
});
