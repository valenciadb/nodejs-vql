import PipelineOp from "./PipelineOp"

/**
 * A collection of operations to perform one after the other.
 */
export default class Pipeline {
  /**
   * The operations to perform.
   */
  protected readonly ops: PipelineOp[] = []

  /**
   * The number of operations that this pipeline contains.
   */
  get length(): number {
    return this.ops.length
  }

  /**
   * Appends a new operation.
   *
   * @param op - The operation to add.
   * @returns This pipeline for chaining if needed.
   */
  addOperation(op: PipelineOp): this {
    this.ops.push(op)
    return this
  }

  /**
   * Runs the pipeline on a given value.
   *
   * @param value - The value.
   * @returns The value returned by the pipeline.
   */
  async run(value: Record<string, any>): Promise<Record<string, any>> {
    for (const op of this.ops) {
      value = await op(value)
    }

    return value
  }
}
