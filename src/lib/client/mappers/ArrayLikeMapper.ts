import { ArrayLike } from "@/lib/definitions/client/helpers";
import { Mapper } from "@/lib/definitions/foundations";
export default class ArrayLikeMapper implements Mapper {
  [methodName: string]: (data: any, ...args: any) => Exclude<any, any>;
  static toKeyObject(al: ArrayLike, k: string, v: any): object {
    return this.setupAsArray(al).reduce((ac, e) => {
      (ac as any)[(e as any)[k]] = (e as any)[v];
      return ac;
    }, {}) as object;
  }
  static toRecord(al: ArrayLike, recordable: object): Record<string, any> {
    this.setupAsArray(al).reduce((ac, p) => {
      try {
        (ac as any)[p] = (recordable as any)[p];
      } catch (e) {
        (ac as any)[p] = "Unaccessible";
      }
      return ac;
    }, {} as Record<string, any>);
    return recordable;
  }
  static setupAsArray(al: ArrayLike): any[] {
    return Array.isArray(al) ? al : Array.from(al);
  }
}
