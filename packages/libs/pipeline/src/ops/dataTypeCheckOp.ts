import PipelineOp from "../PipelineOp"
import PipelineValue from "../PipelineValue"
import DataTypeId from "./DataTypeId"

/**
 * Checks whether the field value is of a given data type.
 *
 * @param fieldName - Field name to check.
 * @param dataType - Data type to check.
 *
 * @returns Op function.
 * @throws {@link Error} If data type is not valid.
 */
export default function dataTypeCheckOp(fieldName: string, dataType: DataTypeId): PipelineOp {
  return function (value: PipelineValue): PipelineValue {
    // (1) check
    const v = value[fieldName]
    let valid = false

    switch (dataType) {
      case "text":
        valid = typeof v == "string"
        break

      case "ts":
      case "num":
        valid = typeof v == "number"
        break
    }

    if (!valid) {
      throw new Error(`The field '${fieldName}' must be '${dataType}'. Got: ${v}.`)
    }

    // (2) return map
    return value
  }
}
