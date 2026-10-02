#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "web3career",
  boardId: "web3career-official",
  domain: "web3.career",
  npmName: "zc-web3career-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
