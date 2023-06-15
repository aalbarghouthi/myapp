import { GetManifest } from "deno-slack-sdk/functions";
import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const MsgWorkflow = DefineWorkflow({
  callback_id: "reply-to-message-workflow",
  title: "Reply to Message Workflow",
  input_parameters: {
    properties: {
      channel_id: { type: Schema.slack.types.channel_id },
      user_id: { type: Schema.slack.types.user_id },
      message_ts: { type: Schema.types.string },
    },
    required: ["channel_id", "user_id", "message_ts"],
  },
});

let lastHelpEvent = 0;

rtm.on('message', (payload) => {
  const now = Date.now();
  if (payload.text === "help" && now - lastHelpEvent > 30000) {
    lastHelpEvent = now;
    handleMessage(payload);
  }
});

async function handleMessage(payload) {
  const now = Date.now();
  if (payload.text === "help" && now - lastHelpPost > 30000) {
    lastHelpPost = now;
    
    MsgWorkflow.addStep(Schema.slack.functions.SendMessage, {
      channel_id: PostWorkflow.inputs.channel_id,
      user_id: PostWorkflow.inputs.user_id,
      message: "Hi",
    });
  }  
}

export default MsgWorkflow;