type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, 3, [1, 2, [1, 2, 3, [1, 2, 3]]]];
nums.push(1);
nums.push([1, 2, 3]);
nums.push([1, 2, 3, [1, 2]]);

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: any };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON("hehe");
isJSON(123);
isJSON({});
isJSON([]);
