import { readFile } from 'fs/promises';

export async function readPackage(): Promise<any> {
    return JSON.parse((await readFile('./package.json')).toString());
}
