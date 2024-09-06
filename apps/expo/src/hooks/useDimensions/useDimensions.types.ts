// useDimensions hook types and interfaces

export interface UseDimensionsConfig {
  container: ContainerOptions;
  offsets?: Offsets;
}

export interface Offsets {
  width?: number;
  height?: number;
}

export type ContainerOptions = "screen" | "window";

export interface UseDimensionsReturn extends Required<Offsets> {}
