import { Component } from "excalibur";
import { ControlSchema } from "../utils/control-schema";

export class ControlsComponent extends Component {
  #controlScema: ControlSchema;

  constructor(controlSchema: ControlSchema) {
    super();
    this.#controlScema = controlSchema;
  }

  wasPressed(key: keyof ControlSchema): boolean {
    return this.owner?.scene?.engine.input.keyboard.wasPressed(
      this.#controlScema[key],
    ) || false;
  }
}
