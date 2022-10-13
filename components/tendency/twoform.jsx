import { FormWrapper } from "./formwrapper"

export function TwoForm({two, updateFields,}) {
  return (
    <FormWrapper title="어떤 것을 좋아하시나요">
      <div  className="active:shadow-xl text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 "  onClick={e => updateFields({ two: e.target.dataset.img })}>
       <img src="/img/women.png" alt="women" data-img='women' className="rounded-lg"  />      
      </div>
      <div className="active:shadow-xl text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1" onClick={e => updateFields({ two: e.target.dataset.img })}>
       <img src="/img/men.png" alt="men" data-img='men' className="rounded-lg"/>      
      </div>
      <div className="active:shadow-xl text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 " onClick={e => updateFields({ two: e.target.dataset.img })}>
       <img src="/img/men.png" alt="men" data-img='men' className="rounded-lg"/>      
      </div>
        
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <p className="text-gray-400 text-xl">{two&&`${two}를 선택하셨습니다`}</p>  
      </div>  
    </FormWrapper>
  )
}