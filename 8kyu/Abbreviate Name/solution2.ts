export function abbrevName(name: string): string {
    return name
        .split(" ")
        .map((item)=> item[0].toUpperCase())
        .join('.');
}