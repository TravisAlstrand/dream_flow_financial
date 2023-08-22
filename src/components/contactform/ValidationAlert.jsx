import { Alert } from "@material-tailwind/react";

import { SuccessIcon } from "../../assets/SuccessIcon";
import { FailureIcon } from "../../assets/FailureIcon";

// eslint-disable-next-line react/prop-types
export function ValidationAlert({ isValid }) {
  return isValid ? (
    <Alert
      icon={<SuccessIcon fill={"currentColor"} />}
      className="flex items-center rounded-md border-l-4 border-light-green-600 bg-light-green-500/10 font-medium text-light-green-600 max-w-xl mx-auto my-8"
    >
      Message sent successfully!
    </Alert>
  ) : (
    <Alert
      icon={<FailureIcon />}
      className="flex items-center rounded-md border-l-4 border-red-500 bg-red-500/10 font-medium text-red-500 max-w-xl mx-auto my-8"
    >
      Please fill all required fields!
    </Alert>
  );
}
