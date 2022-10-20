import {Model} from "@vql/model"

/**
 * A query runner.
 */
export default abstract class Runner {
  /**
   * Creates a runner with the given arguments.
   *
   * @param model - The model to use with this runner.
   */
  protected constructor(protected readonly model: Model) {}
}
