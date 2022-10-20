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
  ContainerType.table,
  "albums",
  undefined,
  new Indexes().addIndex(new Index("primary", [new KeyField("band"), new KeyField("album")])),
  {preWrite: new Pipeline(), postRead: new Pipeline()}
)
