import { Alert } from "@material-tailwind/react";

import { SuccessIcon } from "../../assets/SuccessIcon";
import { FailureIcon } from "../../assets/FailureIcon";

// eslint-disable-next-line react/prop-types
export function ValidationAlert({ isValid }) {
  return isValid ? (
    <Alert
      icon={<SuccessIcon fill={"currentColor"} />}
      className="flex items-center rounded-md border-l-4 border-secondary bg-green-50 font-medium text-ltrGray max-w-xl mx-auto my-8"
    >
      Message sent successfully!
    </Alert>
  ) : (
    <Alert
      icon={<FailureIcon />}
      className="flex items-center rounded-md border-l-4 border-error bg-error-light font-medium text-ltrGray max-w-xl mx-auto my-8"
    >
      Please fill all required fields!
    </Alert>
  );
}
