export function abbrevName(name: string): string {
    let names = name.split(' ');
    return (`${names[0][0]}.${names[1][0]}`).toUpperCase();
 }