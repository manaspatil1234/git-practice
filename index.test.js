import { addTask } from "./index.js";
import {test} from "node:test";
import assert from "node:assert";

test("addTask return the correct message",()=>{
    const result = addTask("Learn Git");
    assert.strictEqual(result,"Task added: Learn Git")
})
