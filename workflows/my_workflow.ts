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

MsgWorkflow.addStep(Schema.slack.functions.SendMessage, {
  user_id: MsgWorkflow.inputs.user_id,
  channel_id: MsgWorkflow.inputs.channel_id,
  message: "Hello World!",
});

export default MsgWorkflow;