"use client";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import useRole from "@/lib/client/hooks/useRole";
import {
  JSX,
  useReducer,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { MinMaxed } from "../../../../../../lib/definitions/foundations";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import {
  CalendarInputType,
  nlInp,
  voidish,
} from "@/lib/definitions/client/helpers";
import { classes, MonthDays } from "@/lib/client/vars";
import StringHelper from "@/lib/helpers/StringHelper";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import DateMapper from "@/lib/client/mappers/DateMapper";
import MathHandler from "@/lib/client/handlers/MathHandler";
import {
  YearLimits,
  MonthLimits,
  WeekLimits,
  DayLimits,
  ClockLimits,
} from "@/lib/definitions/client/helpers";
type yearLimit = "minyear" | "maxyear";
type monthLimit = "minmonth" | "maxmonth";
type weekLimit = "minweek" | "maxweek";
type dayLimit = "minday" | "maxday";
type calendarLimit = yearLimit | monthLimit | dayLimit;
type hourLimit = "minhour" | "maxhour";
type minuteLimit = "minminute" | "maxminute";
type secondLimit = "minsec" | "maxsec";
type clockLimit = hourLimit | minuteLimit | secondLimit;
export default function AddCalendar({
  id,
  name,
  additional,
  type = "date",
  placeholder,
  initial = "",
  limits,
}: Omit<AddInputBlock, "type"> & {
  type?: CalendarInputType;
  initial?: string;
  limits?: {
    year?: Partial<MinMaxed>;
    month?: Partial<MinMaxed>;
    week?: Partial<MinMaxed>;
    day?: Partial<MinMaxed>;
    hour?: Partial<MinMaxed>;
    minute?: Partial<MinMaxed>;
    second?: Partial<MinMaxed>;
  };
}): JSX.Element {
  if (
    ![
      "date",
      "datetime-local",
      "month",
      "week",
      "time",
    ].includes(type)
  )
    type = "date";
  let mapper: DateMapper;
  const { role } = useRole(),
    r = useRef<nlInp>(null),
    clampTime = ({
      limit,
      threshold = 0,
      max = false,
      pad = 2,
    }: {
      limit: number | voidish;
      threshold?: number;
      max?: boolean;
      pad?: 2 | 4;
    }): string | number => {
      if (typeof limit === "number") {
        if (max && limit > threshold) limit = threshold;
        else if (limit < threshold) limit = threshold;
      }
      return limit || StringHelper.padToISO(threshold, pad);
    },
    getMaxMonthDay = useCallback(
      (str: boolean = true): string | number => {
        if (!limits?.month?.max) return "31";
        return str
          ? (
              MonthDays[
                `_${StringHelper.padToISO(
                  limits.month.max
                )}` as keyof typeof MonthDays
              ] || 31
            ).toString()
          : MonthDays[
              `_${StringHelper.padToISO(
                limits.month.max
              )}` as keyof typeof MonthDays
            ] || 31;
      },
      [limits]
    ),
    getYearLimits = useCallback((): YearLimits => {
      return !limits
        ? {
            minYear: "0000",
            maxYear: "9999",
          }
        : {
            minYear: StringHelper.padToISO(
              clampTime({
                limit: limits.year?.min,
                pad: 4,
              }),
              4
            ),
            maxYear: StringHelper.padToISO(
              clampTime({
                limit: limits.year?.max,
                max: true,
                threshold: 9999,
                pad: 4,
              }),
              4
            ),
          };
    }, [limits]),
    getMonthLimits = useCallback((): MonthLimits => {
      return !limits
        ? { minMonth: "01", maxMonth: "12" }
        : {
            minMonth: StringHelper.padToISO(
              clampTime({
                limit: limits.month?.min,
              })
            ),
            maxMonth: StringHelper.padToISO(
              clampTime({
                limit: limits.month?.max,
                max: true,
                threshold: 12,
              })
            ),
          };
    }, [limits]),
    getDayLimits = useCallback((): DayLimits => {
      const maxMonthDayNum = getMaxMonthDay(
        false
      ) as number;
      return !limits
        ? {
            minDay: "01",
            maxDay: maxMonthDayNum.toString(),
          }
        : {
            minDay: StringHelper.padToISO(
              clampTime({
                limit: limits.day?.min,
                threshold: 1,
              }),
              2
            ),
            maxDay: StringHelper.padToISO(
              clampTime({
                limit: limits.day?.max,
                max: true,
                threshold: maxMonthDayNum,
              })
            ),
          };
    }, [limits, getMaxMonthDay]),
    getClockLimits = useCallback((): ClockLimits => {
      const hasSeconds = r.current?.step === "60";
      return !limits
        ? {
            minHour: "00",
            maxHour: "23",
            minMinute: "00",
            maxMinute: "59",
            minSecond: !hasSeconds ? undefined : "00",
            maxSecond: !hasSeconds ? undefined : "00",
          }
        : {
            minHour: StringHelper.padToISO(
              clampTime({
                limit: limits.hour?.min,
              })
            ),
            maxHour: StringHelper.padToISO(
              clampTime({
                limit: limits.hour?.max,
                max: true,
                threshold: 23,
              })
            ),
            minMinute: StringHelper.padToISO(
              clampTime({
                limit: limits.minute?.min,
              })
            ),
            maxMinute: StringHelper.padToISO(
              clampTime({
                limit: limits.minute?.max,
                max: true,
                threshold: 59,
              })
            ),
            minSecond: !hasSeconds
              ? undefined
              : StringHelper.padToISO(
                  clampTime({
                    limit: limits.second?.min,
                  })
                ),
            maxSecond: !hasSeconds
              ? undefined
              : StringHelper.padToISO(
                  clampTime({
                    limit: limits.second?.max,
                    max: true,
                    threshold: 59,
                  })
                ),
          };
    }, [limits]),
    getWeekLimits = useCallback((): WeekLimits => {
      return !limits
        ? { minWeek: "01", maxWeek: "52" }
        : {
            minWeek: StringHelper.padToISO(
              clampTime({
                limit: limits.week?.min,
                threshold: 1,
              })
            ),
            maxWeek: StringHelper.padToISO(
              clampTime({
                limit: limits.week?.max,
                threshold: (() => {
                  return limits.year?.max
                    ? DateMapper.getLastISOWeekNum(
                        limits.year.max
                      )
                    : 52;
                })(),
                max: true,
              })
            ),
          };
    }, [limits]),
    getMonthlyDateLimits = (): YearLimits &
      MonthLimits => ({
      ...getYearLimits(),
      ...getMonthLimits(),
    }),
    getFullDateLimits = (): ReturnType<
      typeof getMonthlyDateLimits
    > &
      DayLimits => ({
      ...getMonthlyDateLimits(),
      ...getDayLimits(),
    }),
    [s, d] = useReducer<
      { v: string },
      [{ type: CalendarInputType; payload: string }]
    >(
      (s: { v: string }, a: any) => {
        switch (a.type) {
          case "date":
            return {
              v: mapper.limitByDate(),
            };
          case "datetime-local":
            return {
              v: mapper.limitByDate(),
            };
          case "month":
            return {
              v: mapper.limitByDate(),
            };
          case "week":
            return {
              v: mapper.limitByDate(),
            };
          case "time":
            return {
              v: mapper.limitByDate(),
            };
          default:
            return s;
        }
      },
      {
        v: initial,
      }
    );
  useEffect(() => {
    mapper = new DateMapper(r);
  }, [r]);
  useEffect(() => {
    id ||= MathHandler.generateRandomKey(id);
    r.current ??= document.getElementById(id) as nlInp;
    r.current ??= DOMHandler.queryByUniqueName(
      name
    ) as nlInp;
    if (!(r.current instanceof HTMLInputElement)) return;
    switch (r.current.type) {
      case "date": {
        if (!limits) return;
        const {
            minYear,
            maxYear,
            minMonth,
            maxMonth,
            minDay,
            maxDay,
          } = getFullDateLimits(),
          dateLimits: Array<{
            k: calendarLimit;
            v: string;
          }> = [
            { k: "minyear", v: minYear },
            { k: "maxyear", v: maxYear },
            { k: "minmonth", v: minMonth },
            { k: "maxmonth", v: maxMonth },
            { k: "minday", v: minDay },
            { k: "maxday", v: maxDay },
          ];
        dateLimits.forEach(({ k, v }) => {
          if (!r.current) return;
          r.current.dataset[k] = v;
        });
        r.current.min = `${minYear}-${minMonth}-${minDay}`;
        r.current.max = `${maxYear}-${maxMonth}-${maxDay}`;
        break;
      }
      case "datetime-local": {
        if (!limits) return;
        const {
            minYear,
            maxYear,
            minMonth,
            maxMonth,
            minDay,
            maxDay,
          } = getFullDateLimits(),
          {
            minHour,
            maxHour,
            minMinute,
            maxMinute,
            minSecond,
            maxSecond,
          } = getClockLimits();
        const dateTimeLimits: Array<{
          k: calendarLimit | clockLimit;
          v: string | undefined;
        }> = [
          { k: "minyear", v: minYear },
          { k: "maxyear", v: maxYear },
          { k: "minmonth", v: minMonth },
          { k: "maxmonth", v: maxMonth },
          { k: "minday", v: minDay },
          { k: "maxday", v: maxDay },
          { k: "minhour", v: minHour },
          { k: "maxhour", v: maxHour },
          { k: "minminute", v: minMinute },
          { k: "maxminute", v: maxMinute },
          { k: "minsec", v: minSecond },
          { k: "maxsec", v: maxSecond },
        ];
        dateTimeLimits.forEach(({ k, v }) => {
          if (!r.current) return;
          r.current.dataset[k] = v;
        });
        const hasSeconds = r.current.step === "60";
        r.current.min = !hasSeconds
          ? `${minYear}-${minMonth}-${minDay}T${minHour}:${minMinute}`
          : `${minYear}-${minMonth}-${minDay}T${minHour}:${minMinute}:${minSecond}`;
        r.current.max = !hasSeconds
          ? `${maxYear}-${maxMonth}-${maxDay}T${maxHour}:${maxMinute}`
          : `${maxYear}-${maxMonth}-${maxDay}T${maxHour}:${maxMinute}:${maxSecond}`;
        break;
      }
      case "month": {
        if (!limits) return;
        const { minYear, maxYear, minMonth, maxMonth } =
            getMonthlyDateLimits(),
          monthLimits: Array<{
            k: yearLimit | monthLimit;
            v: string;
          }> = [
            { k: "minyear", v: minYear },
            { k: "maxyear", v: maxYear },
            { k: "minmonth", v: minMonth },
            { k: "maxmonth", v: maxMonth },
          ];
        monthLimits.forEach(
          ({ k, v }: { k: string; v: string }): void => {
            if (!r.current) return;
            r.current.dataset[k] = v;
          }
        );
        r.current.min = `${minYear}-${minMonth}`;
        r.current.max = `${maxYear}-${maxMonth}`;
        break;
      }
      case "week": {
        if (!limits) return;
        const { minWeek, maxWeek } = getWeekLimits(),
          { minYear, maxYear } = getYearLimits();
        const weekLimits: Array<{
          k: yearLimit | weekLimit;
          v: string;
        }> = [
          { k: "minyear", v: minYear },
          { k: "maxyear", v: maxYear },
          { k: "minweek", v: minWeek },
          { k: "maxweek", v: maxWeek },
        ];
        weekLimits.forEach(({ k, v }): void => {
          if (!r.current) return;
          r.current.dataset[k] = v;
        });
        r.current.min = `${minYear}-${minWeek}`;
        r.current.max = `${maxYear}-${maxWeek}`;
        break;
      }
      case "time": {
        if (!limits) return;
        const {
          minHour,
          maxHour,
          minMinute,
          maxMinute,
          minSecond,
          maxSecond,
        } = getClockLimits();
        const clockLimits: Array<{
          k: clockLimit;
          v: string | undefined;
        }> = [
          { k: "minhour", v: minHour },
          { k: "maxhour", v: maxHour },
          { k: "minminute", v: minMinute },
          { k: "maxminute", v: maxMinute },
          {
            k: "minsec",
            v: minSecond,
          },
          { k: "maxsec", v: maxSecond },
        ];
        clockLimits.forEach(
          ({
            k,
            v,
          }: {
            k: clockLimit;
            v: string | undefined;
          }): void => {
            if (!r.current) return;
            r.current.dataset[k] = v;
          }
        );
        const hasSeconds = r.current.step === "60";
        r.current.min = !hasSeconds
          ? `${minHour}:${minMinute}`
          : `${minHour}:${minMinute}:${minSecond}`;
        r.current.max = !hasSeconds
          ? `${maxHour}:${maxMinute}`
          : `${maxHour}:${maxMinute}:${maxSecond}`;
        break;
      }
      default: {
        return;
      }
    }
  }, [r]);
  return (
    <DefaultEntryBoundary>
      <input
        ref={r}
        id={id || crypto.randomUUID()}
        name={name}
        type={type}
        className={`entryAddRanged dateInput dateAddInput date${StringHelper.capitalize(
          type
        )}AddInput ${classes.inpClasses}`}
        placeholder={placeholder}
        data-role={role}
        value={s.v}
        onChange={ev => {
          const t = ev.currentTarget;
          d({ type, payload: t.value });
        }}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
