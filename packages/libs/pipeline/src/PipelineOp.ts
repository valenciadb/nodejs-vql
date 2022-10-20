import PipelineValue from "./PipelineValue"

/**
 * A pipeline operation.
 */
type PipelineOp = (value: PipelineValue) => Promise<PipelineValue> | PipelineValue

export default PipelineOp
