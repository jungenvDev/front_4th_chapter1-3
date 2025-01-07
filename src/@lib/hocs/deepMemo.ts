import { ComponentType, memo } from "react";
import { deepEquals } from "../equalities";

export function deepMemo<P extends object>(Component: ComponentType<P>) {
  return memo(Component, deepEquals);
}
