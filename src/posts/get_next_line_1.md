---
Category : get_next_line
Id : 1
Title : "get_next_line 개요"
Description : "get_next_line 개요"
Date : 2020, 10, 20 (Tue)
Auther : seolim
pre : 0
next : 0
---


# get_next_line 개요
> Link

[link not yet]()

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

input stream의 데이터를 한줄(개행문자 기준)씩 읽어오는 함수를 만들어 보자

```c
int get_next_line(int fd, char **line);
```

> 선수 지식


### file 조작

unix에선 file을 조작하기위한 기본함수인 `open`, `close`, `seek`등을 제공한다. 명확히 해야할 것은 이들은 c standard가 아니라 unix에 정의된 시스템함수(2)라는 점이다.</br></br>먼저 unix의 파일시스템을 간단히 알아두자.</br>`open`을 통해 파일을 open하면 해당 file의 descriptor를 반환한다. file descriptor는 unix커널이 파일을 열면서 해당 파일에 접근하기위한 id를 할당해주는것이다. unix에선 0(표준 입력), 1(표준 출력), 2(표준 에러)를 미리 할당해두고 3부터 file을 순차적으로 할당한다. 다만 os에 따라서 이미 일부 descriptor에 미리 할당된 파일들이 있을 수 있다.</br></br>file desciptor를 통해 file table에 접근할 수 있는데, 기본적으로 Mode와 Offset을 가지고 있다. Mode는 file에 대한 수정/읽기 권한정보이고, offset은 현재 파일에서 가르키고 있는 위치이다. offset을 잘 기억해두자.

### 정적(static) 변수

static 변수는 scope에서 할당되고 파괴되는 변수가 아니라 프로그램이 시작될 때 초기화되고 프로그램이 종료할때 까지 남아있게된다. 아래 코드를 보자

```c
void increaseNumber()
{
    int num = 0;
    
    num++;
    
    printf("%d ", num);
}

void staticIncreaseNumber()
{
    static int num = 0;
    
    num++;
    
    printf("%d ", num);
}

int main()
{
    printf("normal : ");
    for (int i = 0; i < 4; i++)
        increaseNumber();
    printf("\nstatic : ");
    for (int i = 0; i < 4; i++)
        staticIncreaseNumber();
    printf("\n");
}
/* 
*    normal : 1 1 1 1 
*    static : 1 2 3 4
*/
```
어떻게 동작되는지 알 수 있을것이다.

> get_next_line

### 함수의 기능

get_next_line과 같이 input stream에 대하여 한줄씩 데이터를 읽어오는 함수는 어떠한 framework에도 구현이 되어있다.(c에는 `fgets`와 `getline` ...)</br></br>실제로 한줄씩 데이터를 읽어오는 기능은 굉장히 유용하게 활용된다.

### 함수의 조건

1. 읽어오는 BUFFER의 사이즈를 동적으로 변경할 수 있다.
2. return값은 성공시 1 / 파일을 다 읽었을 시 0 / 실패시 -1을 반환한다.

각각 조건에 따른 내용을 다음장에서 알아보자

