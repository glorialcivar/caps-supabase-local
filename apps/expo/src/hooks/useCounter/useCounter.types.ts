//useCounter Type and Interfaces

export interface UseCounterConfig {
  onChange?: (value: number) => void;
  initialValue?: number;
  min?: number;
  max?: number;
  onSubstract?: (value: number) => void;
  onAdd?: (value: number) => void;
}
