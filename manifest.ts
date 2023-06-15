import { Manifest } from "deno-slack-sdk/mod.ts";
import  MsgWorkflow  from "./workflows/my_workflow.ts";

export default Manifest({
  name: "my-app",
  description: "A template for building Slack apps with Deno",
  icon: "assets/default_new_app_icon.png",
  workflows: [MsgWorkflow],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
    "channels:history",
    "channels:join",
    "channels:manage",
    "channels:read",
    "groups:history",
    "groups:write",
    "im:write",
    "im:history",
    "im:read",
    "mpim:read",
    "mpim:write",
    "mpim:history",
    "triggers:write",
    "triggers:read",
  ],
});
