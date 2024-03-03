
enum Role { ADMIN = 0 , USER = 1 };

const person = {
    name : 'hyunmin',
    age : 34,
    hobbies : ['Coding' , 'javaSciprt'],
    role : Role.ADMIN
}

if(Role.ADMIN === person.role){
    console.log('나는 admin 입니다.');
}

