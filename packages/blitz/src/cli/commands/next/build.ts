import arg from "arg"
import {CliCommand} from "../../index"
import {ServerConfig} from "../../utils/config"

const build: CliCommand = async () => {
  const nextArgs = arg(
    {
      "--inspect": Boolean,
    },
    {
      permissive: true,
    },
  )

  const config: ServerConfig = {
    rootFolder: process.cwd(),
    inspect: nextArgs["--inspect"],
    env: process.env.NODE_ENV === "production" ? "prod" : "dev",
  }

  await import("../../utils/next-commands").then((i) => i.build(config))
}

export {build}
