import {
  ZodDate,
  ZodDate,
  ZodEffects,
  ZodNumber,
  ZodNumber,
  ZodOptional,
  ZodString,
} from "zod";
export type OptableZodStr = ZodString | ZodOptional<ZodString>;
export type OptableZodNum = ZodNumber | ZodOptional<ZodNumber>;
export type OptableZodDate = ZodDate | ZodOptional<ZodDate>;
export type OptableZodNumEffect = ZodEffects<
  OptableZodNum,
  number | undefined,
  any
>;
