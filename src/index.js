#!/usr/bin/env node
'use strict';
import { parseArgs } from 'node:util';

/**
 * @param {number} a
 * @param {number} [b]
 * @returns {number|string}
 */
export function sum(a, b) {
    if (a === 0) {
        return 10;
    }
    return a + (b ?? 0);
}

/** @type {import('node:util').ParseArgsConfig} */
const config = {
    allowPositionals: true,
    options: {
        foo: {
            type: 'boolean',
            short: 'f',
            default: false
        },
        bar: {
            type: 'string'
        }
    }
};

const args = parseArgs(config);
main(args);

/**
 * @param {typeof args} args
 */
function main(args) {
    console.log(args);
    sum(10);
    sum(10, 20);
}
