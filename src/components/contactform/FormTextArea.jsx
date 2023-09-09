import { SuccessIcon } from "../../assets/SuccessIcon";

export function FormTextArea({
  labelName,
  idName,
  placeholder,
  changeState,
  isValid,
}) {
  return (
    <>
      <label
        htmlFor={idName}
        className="flex font-semibold leading-6 text-gray-900"
      >
        {labelName}
        {isValid === undefined ? (
          <span className="mx-1 text-red-500 text-xl">*</span>
        ) : isValid === true ? (
          <SuccessIcon fill={"lightGreen"} />
        ) : (
          <>
            <span className="mx-1 text-red-500 text-xl">*</span>
            <span className="text-red-500">Please provide a message</span>
          </>
        )}
      </label>
      <div className="mt-2.5">
        {isValid === true || isValid === undefined ? (
          <textarea
            name={idName}
            id={idName}
            rows={4}
            onChange={(e) => changeState(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue-600 sm:leading-6"
            placeholder={placeholder}
          />
        ) : (
          <textarea
            name={idName}
            id={idName}
            rows={4}
            onChange={(e) => changeState(e.target.value)}
            className="block w-full rounded-md border-red-500 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue-600 sm:leading-6 bg-red-50"
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  );
}
