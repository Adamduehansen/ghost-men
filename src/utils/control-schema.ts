import { Keys } from "excalibur";

export type ControlSchema = {
  up: Keys;
  right: Keys;
  down: Keys;
  left: Keys;
};

export const ControlSchema1: ControlSchema = {
  up: Keys.Up,
  right: Keys.Right,
  down: Keys.Down,
  left: Keys.Left,
};
