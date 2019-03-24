export function basicOp(operation: string, value1: number, value2: number): number {
    return eval(value1.toString()+operation+value2.toString());
  }