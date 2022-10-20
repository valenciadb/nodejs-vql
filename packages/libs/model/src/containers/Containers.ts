import Container from "./Container"
import ContainerType from "./ContainerType"

/**
 * A collection of data containers.
 */
export default class Containers {
  /**
   * The containers.
   */
  readonly containers: Record<string, Container> = {}

  /**
   * Returns the containers by type.
   *
   * @param kind - The container type to use in the search.
   * @returns The containers.
   */
  getContainersByType(kind: ContainerType): Container[] {
    // (1) find
    const items: Container[] = []

    for (const container of Object.values(this.containers)) {
      if (container.kind == kind) {
        items.push(container)
      }
    }

    // (2) return
    return items
  }

  /**
   * Returns a container by its name.
   *
   * @param name - The container name to find.
   * @returns The container or undefined if not found.
   */
  getContainer(name: string): Container | undefined {
    return this.containers[name]
  }

  /**
   * Adds a given container to the collection.
   *
   * @param container - The container to add.
   * @returns The collection for chaining if needed.
   */
  addContainer(container: Container): this {
    this.containers[container.name] = container
    return this
  }
}
