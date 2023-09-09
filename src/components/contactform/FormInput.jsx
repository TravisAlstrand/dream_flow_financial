import { SuccessIcon } from "../../assets/SuccessIcon";

export function FormInput({
  labelName,
  type,
  idName,
  placeholder,
  changeState,
  isValid,
}) {
  return (
    <>
      <label
        htmlFor={idName}
        className="flex font-semibold leading-6 text-ltrGray-dark"
      >
        {labelName}
        {isValid === undefined ? (
          <span className="mx-1 text-error text-xl">*</span>
        ) : isValid === true ? (
          <SuccessIcon fill={"#4ade80"} />
        ) : (
          <>
            <span className="mx-1 text-error text-xl">*</span>
            <span className="text-error">Please fill this field</span>
          </>
        )}
      </label>

      <div className="mt-2.5">
        {isValid === true || isValid === undefined ? (
          <input
            type={type}
            name={idName}
            id={idName}
            placeholder={placeholder}
            onChange={(e) => changeState(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-ltrGray-dark shadow-sm ring-1 ring-inset ring-ltrGray-light placeholder:text-ltrGray-light focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6 transition-colors duration-300"
          />
        ) : (
          <input
            type={type}
            name={idName}
            id={idName}
            placeholder={placeholder}
            onChange={(e) => changeState(e.target.value)}
            className="block w-full rounded-md border-error px-3.5 py-2 text-ltrGray-dark shadow-sm ring-1 ring-inset ring-ltrGray-light placeholder:text-ltrGray-light focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6 bg-error-light transition-colors duration-300"
          />
        )}
      </div>
    </>
  );
}
