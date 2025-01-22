import * as ex from "excalibur";
import { ControlsComponent } from "./components/controls-component";
import { ControlSchema } from "./utils/control-schema";

type Args = Pick<ex.ActorArgs, "pos"> & {
  controlSchema: ControlSchema;
};

type Direction = "up" | "right" | "down" | "left";

const Speed = 100;

export class Ghost extends ex.Actor {
  #controlsComponent: ControlsComponent;
  #direction?: Direction;

  constructor({ pos, controlSchema }: Args) {
    super({
      color: ex.Color.White,
      pos: pos,
      width: 16,
      height: 16,
    });

    this.#controlsComponent = new ControlsComponent(controlSchema);

    this.addComponent(this.#controlsComponent);
  }

  onPreUpdate(engine: ex.Engine, elapsed: number): void {
    super.onPreUpdate(engine, elapsed);
    this.#handleInput();
    this.#handleMovement();
  }

  #handleInput(): void {
    if (this.#controlsComponent.wasPressed("up")) {
      this.#direction = "up";
    } else if (this.#controlsComponent.wasPressed("right")) {
      this.#direction = "right";
    } else if (this.#controlsComponent.wasPressed("down")) {
      this.#direction = "down";
    } else if (this.#controlsComponent.wasPressed("left")) {
      this.#direction = "left";
    }
  }

  #handleMovement(): void {
    this.vel = this.#getVelocityByDirection().scale(Speed);
  }

  #getVelocityByDirection(): ex.Vector | never {
    switch (this.#direction) {
      case undefined:
        return ex.Vector.Zero;
      case "up":
        return ex.Vector.Up;
      case "right":
        return ex.Vector.Right;
      case "down":
        return ex.Vector.Down;
      case "left":
        return ex.Vector.Left;
    }
  }
}
