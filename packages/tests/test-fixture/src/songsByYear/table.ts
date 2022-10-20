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
  "songsByYear",
  undefined,
  new Indexes().addIndex(
    new Index("primary", [new KeyField("band"), new KeyField("year"), new KeyField("song")])
  ),
  {preWrite: new Pipeline(), postRead: new Pipeline()}
)
