
import { useEffect,useState } from 'react';

const MainScroll = ({itemList}) => {
    const [list,setItemList]=useState(itemList)
    const [target, setTarget] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!target) return;
    
        let observer;
    
        if (target) {
          observer = new IntersectionObserver(onIntersect, {
            threshold: 0.4,//margin이라고 생각하면 편합니다.
          });
          observer.observe(target);
        }
    
        return () => observer && observer.disconnect();
      }, [target]);
    const onIntersect = async (
      [entry],
      observer,
    ) => {
      if (entry.isIntersecting && !isLoading) {
        //관찰대상 끊기
        observer.unobserve(entry.target);
        //로딩컴포넌트 on
        setIsLoading(true);
        // 데이터를 가져오는 부분
        await new Promise((resolve) => setTimeout(resolve, 1000));
        let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        setItemList((itemLists) => itemLists.concat(Items));
        setIsLoading(false);
        //새로운 관찰대상 target
        observer.observe(entry.target);
      }
    };
   return (
      <div>
        <ItemWrap>
          {itemList.map((item, index) => {
            return <Styled.Item>{index + 1}</Styled.Item>;
          })}
        </ItemWrap>
        {isLoading ? (
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        ) : (
          ''
        )}
        <div ref={setTarget} />
      </div>
    );
  };
    
   
    return (
      <div>
        <ItemWrap>
  
          {itemList.map((item, index) => {
            return <Item>{index + 1}</Item>;
          })}
        </ItemWrap> 
        {isLoading ? (
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        ) : (
          ''
        )}
        //감시하는곳
        <div ref={setTarget} />
      </div>
    );
  };