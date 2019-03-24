const ops = {
    "+": (l, r) => l + r, // key: operation, value: function declaration
    "-": (l, r) => l - r,
    "*": (l, r) => l * r,
    "/": (l, r) => l / r,
} // object
export const basicOp = (operation: keyof typeof ops, value1: number, value2: number): number => (
    ops[operation](value1, value2) //invoking inner functions in ops object based on which operator.
    //object [key](function invocation with value parameters)
)