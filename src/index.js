#!/usr/bin/env node
'use strict';

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

sum(10);
sum(10, 20);
