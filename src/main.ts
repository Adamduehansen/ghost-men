import * as ex from "excalibur";
import "./style.css";
import { Ghost } from "./ghost";
import { ControlSchema1 } from "./utils/control-schema";

const engine = new ex.Engine();

const ghost = new Ghost({
  pos: ex.vec(100, 100),
  controlSchema: ControlSchema1,
});

await engine.start();
engine.add(ghost);
