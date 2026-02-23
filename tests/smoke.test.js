import assert from "node:assert/strict";
import { assess } from "../src/main.js";

const result = assess("critical outage detected");
assert.ok(result.project);
assert.ok(result.score >= 0 && result.score <= 1);
