#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/4832d3c0a1e11ffaa25eecf04415fae08cca48b1ef72a34bb31fa7ff572d0b9e/contract';
import endContract from '../../snapshots/4832d3c0a1e11ffaa25eecf04415fae08cca48b1ef72a34bb31fa7ff572d0b9e/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/b1a8734d842613d3d915317b86bc81b64860da5e03da7b86bddddebe2b74818e/contract';
import startContract from '../../snapshots/b1a8734d842613d3d915317b86bc81b64860da5e03da7b86bddddebe2b74818e/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropColumn({ schema: 'public', table: 'User', column: 'updatedAt' })];
  }
}

MigrationCLI.run(import.meta.url, M);
