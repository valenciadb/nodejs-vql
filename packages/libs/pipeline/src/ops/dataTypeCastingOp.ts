import PipelineOp from "../PipelineOp"
import PipelineValue from "../PipelineValue"
import DataTypeId from "./DataTypeId"

/**
 * Ensures that a field will be instance of a given data type,
 * casting if needed.
 *
 * @param fieldName - Field name to check.
 * @param dataType - Data type to cast.
 *
 * @returns Op function.
 * @throws {@link TypeError} If data type is not valid.
 */
export default function dataTypeCastingOp(
  fieldName: string,
  dataType: DataTypeId
): PipelineOp {
  return function (value: PipelineValue): PipelineValue {
    // (1) cast field
    let v = value[fieldName]

    switch (dataType) {
      case "text":
        v = String(v)
        break

      case "ts":
      case "num": {
        const aux = Number(v)
        if (isNaN(aux)) {
          throw new TypeError(
            `Value of '${fieldName}' expected to be castable to number (num or ts). Got: ${v}.`
          )
        }

        v = aux

        break
      }
    }

    value[fieldName] = v

    // (2) return value
    return value
  }
}
