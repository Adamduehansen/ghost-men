import * as ex from "excalibur";

type Args = Pick<ex.ActorArgs, "pos">;

export class Ghost extends ex.Actor {
  constructor({ pos }: Args) {
    super({
      color: ex.Color.White,
      pos: pos,
      width: 16,
      height: 16,
    });
  }
}
