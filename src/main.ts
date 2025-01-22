import * as ex from "excalibur";
import "./style.css";
import { Ghost } from "./ghost";
import { ControlSchema1 } from "./utils/control-schema";

const engine = new ex.Engine({
  resolution: {
    width: 224,
    height: 288,
  },
  displayMode: ex.DisplayMode.FitScreen,
  fixedUpdateFps: 60,
  pixelRatio: 4,
  pixelArt: true,
});

const ghost = new Ghost({
  pos: ex.vec(100, 100),
  controlSchema: ControlSchema1,
});

await engine.start();
engine.add(ghost);
