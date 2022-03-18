/** Make an assertion, if not `true`, then throw. */
export function assert(expr: unknown, msg = ""): asserts expr {
  if (!expr) {
    throw new TypeError(msg);
  }
}
