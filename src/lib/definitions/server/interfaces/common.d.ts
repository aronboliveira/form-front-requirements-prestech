export interface Timesout {
  timedout: boolean;
}
export interface Optional {
  req: boolean;
}
export interface MinMax extends Optional {
  min: number;
  max: number;
}
export interface MinMaxPattern extends MinMax {
  exp: RegExp;
}
