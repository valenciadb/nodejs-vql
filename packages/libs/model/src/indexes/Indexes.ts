import Index from "./Indx"

/**
 * A collection of indexes.
 */
export default class Indexes {
  /**
   * Creates the collection using the given arguments.
   */
  constructor(protected readonly indexes: Index[] = []) {}

  /**
   * The primary index.
   *
   * @remarks
   * The first index added is considered the primary index.
   */
  get primary(): Index {
    return this.indexes[0]
  }

  /**
   * The number of indexes.
   */
  get length(): number {
    return this.indexes.length
  }

  /**
   * Adds an index to the collection.
   *
   * @param index - The index to add.
   * @returns The collection for chaining if needed.
   */
  addIndex(index: Index): this {
    this.indexes.push(index)
    return this
  }

  /**
   * Finds the index to use with the given field names.
   *
   * @param fieldNames - The field names to check.
   * @returns The index found or undefined if not found.
   */
  getIndexUsableWith(fieldNames: string[]): Index | undefined {
    // (1) find
    let index: Index | undefined

    for (const idx of this.indexes) {
      if (idx.isUsableWith(fieldNames)) {
        index = idx
        break
      }
    }

    // (2) return result
    return index
  }
}
