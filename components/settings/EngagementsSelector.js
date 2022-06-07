import { PopoverBtns, PopoverBtnText } from "../Popover";

import {
  ShowDateTime,
  ShowLikes,
  ShowReplies,
  ShowRetweets,
  ShowSource,
} from "./EngagementFunctions";

export const EngagementsSelector = ({ props }) => {
  return (
    <div className="p-2 flex md:flex-wrap flex-nowrap md:justify-center ml-auto mr-auto overflow-x-auto whitespace-nowrap items-center">
      <ShowLikes props={props} />
      <ShowRetweets props={props} />
      <ShowReplies props={props} />
      <ShowDateTime props={props} />
      <ShowSource props={props} />
    </div>
  );
};
