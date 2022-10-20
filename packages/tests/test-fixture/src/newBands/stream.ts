import {
  Connector,
  ContainerType,
  Index,
  Indexes,
  KeyField,
  ReadWriteContainer
} from "@vql/model"
import {Pipeline} from "@vql/pipeline"

export default new ReadWriteContainer(
  {} as Connector,
  ContainerType.stream,
  "newBands",
  undefined,
  new Indexes().addIndex(new Index("primary", [new KeyField("ts"), new KeyField("seq")])),
  {preWrite: new Pipeline(), postRead: new Pipeline()}
)
