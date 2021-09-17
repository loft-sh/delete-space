import * as core from '@actions/core'
import {exec} from '@actions/exec'
import {which} from '@actions/io'

import {ArgsBuilder} from './args-builder'

async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name', {required: true})

    // Check that the loft CLI is installed
    await which('loft', true)

    const args: ArgsBuilder = new ArgsBuilder()
    args.addSubcommand('delete')
    args.addSubcommand('space')
    args.addSubcommand(name)
    args.add('cluster', core.getInput('cluster'))
    args.addFlag('delete-context', true)

    // Execute the delete space command
    await exec('loft', args.build())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
