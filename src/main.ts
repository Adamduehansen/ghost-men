import * as ex from "excalibur";
import "./style.css";
import { Ghost } from "./ghost";

const engine = new ex.Engine();

const ghost = new Ghost({
  pos: ex.vec(100, 100),
});

await engine.start();
engine.add(ghost);
