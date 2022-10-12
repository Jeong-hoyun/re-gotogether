export const questions = [
    {
        'question': '당장 떠나고 싶은 날 어떤 여행을 가고싶으세요?',
        'answers': [
            {
                text: '여기저기 보고 느끼는 여행이 좋아!',                
                score: 3,
                active:0,
            },
            {
                text: '쉬고 싶다... 힐링 여행이 최고지',
                score: 7,
                active:1,
            }
        ],
        'weight': 0.7
    },
    {
        'question': '출발하기 전에 정해야해! 어떻게 갈까요?',
        'answers': [
            {
                text: '렌트해서 가는게 정답!🤓',
                score: 1,
                length:1,
            },
            {
                text: '기차가 최고야 KTX! 유럽철도!',
                score: 2,
                length:2,
            },
            {
                text: '지하철만 타도 괜찮아',
                score: 4,
                length:4,
            },
            {
                text: ' 여행은 반드시 비행기로!',
                score: 3,
                length:5,
            }
        ],
        'weight': 0.3
    },
    {
        'question': '앗 내 물건 어디갔지?',
        'answers': [
            {
                text: '썬크림 필수인데 이런..🙈',
                score: 6,                
            },
            {
                text: '비상시 쓸 상비약을 안챙겼네..',
                score: 4
            },
            {
                text: '설마 내 장비가 없는건 아니겠지🥺',
                score: 4
            },
            {
                text: '컵라면🍜을 까먹었나 어떻게하지..',
                score: 4
            }
        ],
        'weight': 0.5
    },
    {
        'question': '자 드디어 도착!🐾어떤 코스를 즐겨볼까?',
        'answers': [
            {
                text: '이날을 위해 스크린에서 연습했다! 바로 라운딩으로!',
                score: 8,
                golf:1
            },
            {
                text: '멋진 풍경을 배경삼아 한번 걸어볼까?',
                score: 2,
                trakking:1
            },
            {
                text: '일단 그래도 이 곳 문화가 어떤지 알아봐야지',
                score: 0,
                culture:1
            },
            {
                text: '성소에 가서 기도를 하고 싶어',
                score: 0,
                pilgrimage:1
            }
        ],
        'weight': 0.3
    },
    {
        'question': '',
        'answers': [
            {
                text: '',
                score: 0
            },
            {
                text: '',
                score: 0
            }
        ],
        'weight': 0
    }
]





