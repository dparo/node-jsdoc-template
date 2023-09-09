#!/usr/bin/env node
"use strict";

import assert from "node:assert";
import { test } from "node:test";
import { sum } from "../src/index.js";

test("1 === 1", (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(1, 1);
});

test("sum(1, 2) === 3", (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(sum(1, 2), 3);
});
