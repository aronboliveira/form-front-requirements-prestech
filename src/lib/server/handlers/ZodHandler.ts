import {
  OptableZodDate,
  OptableZodNumEffect,
  OptableZodStr,
} from "@/lib/definitions/server/helpers";
import {
  MinMax,
  MinMaxPattern,
} from "@/lib/definitions/server/interfaces/common";
import { limits } from "@/lib/vars";
import { z } from "zod";
import MathHandler from "@/lib/client/handlers/MathHandler";
export default class ZodHandler {
  static strMin(min: number, req: boolean = true): OptableZodStr {
    return req ? z.string().min(min) : z.string().min(min).optional();
  }
  static strMax(max: number, req: boolean = true): OptableZodStr {
    return req ? z.string().max(max) : z.string().max(max).optional();
  }
  static strMinMax({
    min = 0,
    max = limits.medium.MAX_UTF_16_SIGNED_SURROGATE,
    req = true,
  }: MinMax): OptableZodStr {
    return req
      ? z.string().min(min).max(max)
      : z.string().min(min).max(max).optional();
  }
  static strMinMaxPattern({
    min = 0,
    max = limits.medium.MAX_UTF_16_SIGNED_SURROGATE,
    exp = /^*$/,
    req = true,
  }: MinMaxPattern): OptableZodStr {
    return req
      ? z.string().min(min).max(max).regex(exp)
      : z.string().min(min).max(max).regex(exp).optional();
  }
  static double(req = true): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number()
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().optional()
        );
  }
  static doubleMin(min: number, req: boolean = true): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().min(min)
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().min(min).optional()
        );
  }
  static doubleMax(max: number, req: boolean = true): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().max(max)
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().max(max).optional()
        );
  }
  static doubleMinMax({
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    req = true,
  }: MinMax): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().min(min).max(max)
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "float", 4),
          z.number().min(min).max(max).optional()
        );
  }
  static int(req = true): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int()
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().optional()
        );
  }
  static intMin(min: number, req = true): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().min(min)
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().min(min).optional()
        );
  }
  static intMax(max: number, req = true): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().max(max)
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().max(max).optional()
        );
  }
  static intMinMax({
    min = 0,
    max = Number.MAX_SAFE_INTEGER,
    req = true,
  }: MinMaxPattern): OptableZodNumEffect {
    return req
      ? z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().min(min).max(max)
        )
      : z.preprocess(
          v => MathHandler.parseNotNaN(String(v), 0, "int"),
          z.number().int().min(min).max(max).optional()
        );
  }
  static date(req = true): OptableZodDate {
    return req ? z.date() : z.date().optional();
  }
  static dateMin(minDate: Date = new Date(), req = true): OptableZodDate {
    return req ? z.date().min(minDate) : z.date().min(minDate).optional();
  }
  static dateMax(
    maxDate: Date = new Date(new Date().getFullYear() + 5),
    req = true
  ): OptableZodDate {
    return req ? z.date().max(maxDate) : z.date().max(maxDate).optional();
  }
  static dateMinMax({
    min = new Date(),
    max = new Date(new Date().getFullYear() + 5),
    req = true,
  }: {
    min: Date;
    max: Date;
    req: boolean;
  }): OptableZodDate {
    return req
      ? z.date().min(min).max(max)
      : z.date().min(min).max(max).optional();
  }
  static emailMin(min: number, req = true): OptableZodStr {
    return req
      ? z.string().email().min(min)
      : z.string().email().min(min).optional();
  }
  static emailMax(max: number, req = true): OptableZodStr {
    return req
      ? z.string().email().max(max)
      : z.string().email().max(max).optional();
  }
  static emailMinMax(min: number, max: number, req = true): OptableZodStr {
    return req
      ? z.string().email().min(min).max(max)
      : z.string().email().min(min).max(max).optional();
  }
  static phonePattern(
    pattern = /^[0-9()\-\s+]{1,20}$/,
    req = true
  ): OptableZodStr {
    return req
      ? z.string().regex(pattern)
      : z.string().regex(pattern).optional();
  }
  static phoneMin(
    pattern = /^[0-9()\-\s+]{1,20}$/,
    min: number,
    req = true
  ): OptableZodStr {
    return req
      ? z.string().min(min).regex(pattern)
      : z.string().min(min).regex(pattern).optional();
  }
  static phoneMax(
    pattern = /^[0-9()\-\s+]{1,20}$/,
    max: number,
    req = true
  ): OptableZodStr {
    return req
      ? z.string().max(max).regex(pattern)
      : z.string().max(max).regex(pattern).optional();
  }
  static phoneMinMax(
    pattern = /^[0-9()\-\s+]{1,20}$/,
    min: number,
    max: number,
    req = true
  ): OptableZodStr {
    return req
      ? z.string().min(min).max(max).regex(pattern)
      : z.string().min(min).max(max).regex(pattern).optional();
  }
}
