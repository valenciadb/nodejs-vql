import crypto from "node:crypto"
import PipelineOp from "../PipelineOp"
import PipelineValue from "../PipelineValue"

/**
 * Returns an operation for setting a default value if needed.
 *
 * @param fieldName - Field name to set.
 * @param defaultValue - DefaultValue to set when needed.
 * @param op - Set operation to perform.
 *
 * @returns Op function.
 */
export default function defaultValueOp(
  fieldName: string,
  defaultValue: any,
  op: "?=" | "=" | ":="
): PipelineOp {
  return function (value: PipelineValue): PipelineValue {
    if (op == ":=") {
      value[fieldName] = evalExp(defaultValue)
    } else if (op == "?=") {
      if (!(fieldName in value)) {
        value[fieldName] = evalExp(defaultValue)
      }
    } else {
      if (value[fieldName] == null) {
        value[fieldName] = evalExp(defaultValue)
      }
    }

    return value
  }
}

/**
 * Evaluates an expression an returns its value.
 *
 * @param exp - The expression to evaluate.
 * @returns The result.
 */
function evalExp(exp: boolean | number | string | {name: string}): any {
  // (1) evaluate expression
  let result: any

  if (["boolean", "number", "string"].includes(typeof exp)) {
    result = exp
  } else {
    const globalProp = (exp as any).name

    if (globalProp == "uuid") {
      result = crypto.randomUUID()
    } else if (globalProp == "ts") {
      result = new Date().valueOf().toString()
    } else {
      throw new Error(`Unknown global property name: ${globalProp}.`)
    }
  }

  // (2) return result
  return result
}
