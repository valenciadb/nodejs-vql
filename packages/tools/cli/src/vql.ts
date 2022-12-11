#!/usr/bin/env -S node --es-module-specifier-resolution=node

import yargs from "yargs/yargs"

import handleErrors from "./handleErrors"
import FsShell from "./commands/FsShell"
import RedisShell from "./commands/RedisShell"

const lfs = new FsShell()
const redis = new RedisShell()

yargs(process.argv.slice(2))
  .help("help")
  .epilogue(
    "Copyright © 2022 Sia Codelabs. All rights reserved.\nProduct of Spain, EU, made in Valencia."
  )
  .fail(handleErrors)
  .command(["fs <baseDirPath>"], lfs.desc, lfs.options, lfs.handler)
  .command(["redis"], redis.desc, redis.options, redis.handler).argv
