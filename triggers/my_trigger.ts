import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";

const myTrigger: Trigger<any> = {
  type: TriggerTypes.Event,
  name: "Trigger the example workflow",
  workflow: "#/workflows/reply-to-message-workflow",
  event: {
    event_type: TriggerEventTypes.MessagePosted,
    channel_ids: ["C05BVT8V5T9"],
    filter: {
      root: {
        statement: "{{data.text}} == 'help'",
      },
      version: 0,
    },
  },

  inputs: {
    channel_id: { value: "{{data.channel_id}}" },
    user_id: { value: "{{data.user_id}}" },
    message_ts: { value: "{{data.message_ts}}" },
  },
};

export default myTrigger;