export default function Footer(){
    return (
        <>
        <footer className="text-gray-600 body-font ">  
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
         <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
           <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">안심카드결제</span>
           <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">이용약관</span>
           <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">개인정보처리방침</span> 
           <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">여행약관</span>  
        </div>
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">       
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/img/company_logo.png" alt="company_logo"/>            
            </a>         

          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">고객센터</h2>
              <ul className="list-none mb-10">
                <li>02-6105-7711</li>
                <li>영업시간 : 09:00 ~18:00</li>
                <li>토/일요일 및 공휴일  휴무</li>           
                
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">입금계좌</h2>
              <ul className="list-none mb-10">
              <li>KEB하나은행</li>
              <li>267-910020-36604</li>
              <li>(주)더샤이니</li>        
              
            </ul>
            </div>         
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
          
          </div>
        </div>
      </footer>
        </>
    );
}
