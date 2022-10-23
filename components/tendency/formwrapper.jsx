export function FormWrapper({ title, children }) {
  return (
    <div className="py-0 mx-auto w-2/3">
      <h2 className="tracking-widest text-lg title-font font-medium text-black-500 mb-5 text-center ">
        {title}
      </h2>
      <div className="flex items-center flex-wrap">{children}</div>
    </div>
  );
}
