export type BooleanInputType = '' | boolean | 'true' | 'false';

export function booleanInput(val: BooleanInputType): boolean {
  return val === '' || val === 'true' || val === true;
}
