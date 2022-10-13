import { FormWrapper } from "./formwrapper"
export function ThreeForm({three,updateFields}) {

   const onClick= e =>{  
    updateFields({ three: e.target.dataset.img })
   }

  return (
    <FormWrapper title="어떤 것을 좋아하시나요">
       <div onClick={onClick} className="active:shadow-xl text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
       <img src="/img/women.png" alt="women" data-img='women' className="rounded-lg" />
       </div>
      <div onClick={onClick} className="active:shadow-xl text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
       <img src="/img/men.png" alt="men" data-img='men' className="rounded-lg" />      
      </div>
      <div onClick={onClick} className="active:shadow-xl text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
       <img src="/img/women.png" alt="women" data-img='women' className="rounded-lg" />      
      </div>
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <p className="text-gray-400 text-xl">{three&&`${three}를 선택하셨습니다`}</p> 
      </div>  
    
    </FormWrapper>
  )
}