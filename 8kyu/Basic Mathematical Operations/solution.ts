export function basicOp(operation: string, value1: number, value2: number): number {
    if(operation === '+') {
      return value1 + value2;
    } 
    else if(operation === '-') {
      return value1 - value2;
    }
    else if(operation === '*') {
      return value1 * value2;
    }
    else if(operation === '/' && value2 !== 0) {
      return value1 / value2;
    }
  }