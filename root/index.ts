import * as path from 'path';

import { readPackage } from './utils.js';

//import got from 'got';

console.log(`you are in typescript!`);
console.log(`path: ${path.join('./')}`);

class TestTable {
    id?: string;
    name?: string;
    tags?: string[];
    is_active?: boolean;
}

class TestChair {
    id?: string;
    name?: string;
    tags?: string[];
    is_active?: boolean;
    test_table?: TestTable;
}

// main code
const run = async () => {
    /*const result = await got.get('http://localhost:3000/tables/test-chair').json<TestChair[]>();
    for (const chair of result) {
        console.log(chair?.test_table?.tags);
    }*/
    console.log(await readPackage());
};

// run it
(async () => {
    try {
        await run();
    } catch (e) {
        console.error(e);
    }
})();
