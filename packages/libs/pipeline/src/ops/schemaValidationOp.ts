import PipelineOp from "../PipelineOp"
import PipelineValue from "../PipelineValue"

/**
 * Performs a custom schema validation.
 *
 * @param validator - Validator function to run.
 * @returns Op function.
 */
export default function schemaValidationOp(
  validator: (value: PipelineValue) => void
): PipelineOp {
  return function (value: PipelineValue): PipelineValue {
    validator(value)
    return value
  }
}
