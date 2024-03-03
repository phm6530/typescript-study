//union 타입?
//String과 INT 다 받을때 유니언 타입으로 선언
type Combinalbe = number | string;
type literalDescriptor = 'me' | 'you';


const conbine = (
        a : Combinalbe,
        b : Combinalbe,
        literal : literalDescriptor
    ) =>{
        if(literal === 'me'){
            if( typeof a === 'number' && typeof b === 'number'){
                const result = a + b ;
                console.log(result);
                return result;
            }
            else{
                const result = '' + a + b ;
                console.log(result);
                return result;
            }
        }else{
            console.log('권한이 없습니다.')
        }
    }
    conbine('5',2 ,'me')

    // 객체
    type USER = { name : string | number , age : number};
    const obj : USER = {
        name : '50',
        age : 30
    }


    const user = {
        name: 'Hyunmin',
        age: 34
    };
    
    type TEST = { name: string, age: number };
    function greet(user: TEST) {
        console.log('Hi, I am ' + user.name);
    }
    
    function isOlder(user: TEST, checkAge: number) {
        return checkAge > user.age;
    }
    
    greet(user); // 올바르게 user 객체 전달
    
    // isOlder 함수 사용 예시 (선택적)
    const isUserOlder = isOlder(user, 30);
    console.log(isUserOlder); // user의 나이가 30보다 큰지 비교 결과 출력