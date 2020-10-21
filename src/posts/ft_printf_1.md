---
Category : ft_printf
Id : 1
Title : "ft_printf 개요"
Description : "ft_printf 개요"
Date : 2020, 10, 20 (Tue)
Auther : seolim
pre : 0
next : 0
---
> Link

[link not yet]()

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

`<stdio.h>`의 printf()를 구현해 본다.

```c
int ft_printf(const char *fmt, ...);
```

1. 가변 인수(variable argument)를 이해하고 활용할 수 있게끔 한다.
2. 기능별로 분리하여 code 구성할 수 있게끔 한다.
3. parsing의 개념을 이해하고 구성할 수 있게끔 한다.

> 선수 지식

### 가변 인수(variable argument)

printf를 생각해보면 함수의 파라미터의 타입도 개수도 정해져있지 않고 실행이 가능하다. 이를 가능하게 해 주는 인수가 가변인수(variable argument)이며 <stdarg.h>의 정의를 통해 조작할 수 있다. 아래 코드를 보자.

```c
#include <stdarg.h>

int argsTest(int args, ...)
{
    va_list ap;
    
    va_start(ap, args);
    for (int i = 0; i < args; i++)
        printf("%d ", va_arg(ap, int));
    printf("\n");
    va_end(ap);
}

int main()
{
    argsTest(4, 1, 2, 3, 4);
    argsTest(2, 5, 6);
}
/* result  :
*   1 2 3 4
*   5 6
*/
```

위 코드에서 `...`이 가변인자를 받는 함수이다. 각각의 기능을 간단히 설명하면 아래와 같다.</br></br>
 - **va_list** : 가변인자 목록 포인터
 - **va_start(va_list, void)** : 가변인자 목록 포인터를 두번째 파라미터 다음 주소로 할당한다.
 - **va_arg(va_list, type)** : 가변인자 목록 포인터를 선언된 타입의 크기만큼 캐스트하고 진행시킨다. 즉 cast된 변수 다음 변수로 포인터가 이동한다.
 - **va_end(va_list)** : 가변인자 목록 포인터의 메모리 처리를 하는데, 대부분의 운영체제에서는 자동으로 회수되므로 사용하지 않아도 상관없는 경우가 많다.


### parsing

언어학에선 *구문분석*으로 해석되어있고 프로그래밍상에선 어떠한 구분은 원하는 형태로 분석하여 원하는 형태의 데이터로 조립하는 방법이나 과정을 말한다.</br></br>모든 프로그램에서 데이터 통신은 규격 문서와 규격문서에 대한 parsing으로 진행된다. 대표적인 예로 url을 들 수 있다. 현 과제단계에선 간단히 이해하고 자세한 내용은 [wiki](https://en.wikipedia.org/wiki/Parsing)를 참고하도록 하자.

### printf

printf는 첫번째 파라미터와 가변인자를 받는 함수로 첫번째 파라미터의 구문은 specifier와 flag, 일반 출력구문으로 이루어진 규격을 가진 char 포인터 문자열이다.

**Specifier**
printf에서 보던 "%s", "%d" 등이 specifier이고 가능한 spcifier는 아래와 같다.
```c
printf("%d", 10);        // 부호 있는 정수
printf("%i", 10);        // 부호 있는 정수
printf("%u", 10);        // 부호 없는 정수
printf("%o", 10);        // 부호 있는 8진 정수
printf("%x", 10);        // 부호 있는 16진 정수 (소문자 표기)
printf("%X", 10);        // 부호 없는 16진 정수 (대문자 표기)
printf("%c", 'a');       // char 문자
printf("%s", "string");  // char 포인터 문자열
printf("%p", &var);      // pointer 주소
printf("%f", 1.2);       // 부동 소수 (십진 출력)
printf("%e", 1.2);       // 부동 소수 (지수 출력, 소문자 표기)
printf("%E", 1.2);       // 부동 소수 (지수 출력, 대문자 표기)
printf("%g", 1.2);       // 부동 소수 (e, f중 간단한 것 출력, 소문자 표기)
printf("%G", 1.2);       // 부동 소수 (e, f중 간단한 것 출력, 대문자 표기)
printf("%%");            // '%' 문자 출력

printf("%n", n)          // int 형 변수 n에 현재까지 출력된 문자 수를 저장, 출력 없음
```

**Flag**
각각의 specifier에는 출력과 관련된 flag를 지정할 수 있다. 플래그는 크게 width, decimal, etc로 구분될 수 있고 각각의 내용은 양이 많으므로 [여기](https://modoocode.com/35)를 참고하도록 하자.

> ft_printf

### 함수의 기능

첫번째 파라미터 구문을 분석하여 특정한 형태의 구문을 stdout에 출력하는 함수. 요구하는 구문의 specifer와 flag는 아래와 같다.(bonus 제외)

 - **specifier** : cspdiuxX%
 - **flag** : -0.*


