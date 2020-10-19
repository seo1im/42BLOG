---
Category : Libft
Id : 4
Title : "Libft : str function"
Description : mem function
Date : 2020, 10, 17 (Sat)
Auther : seolim
pre : 3
next : 5
---

# Libft str function
> Link

[https://github.com/seo1im/Libft](https://github.com/seo1im/Libft)

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.

> 목적

str 관련 함수들을 알아보자. 이번 과정에서 알아볼 함수들은 아래와 같다.

```c
size_t strlen(const char* str);

char* strchr(const char* str, int character);

char* strrchr(const char* str, int character);

size_t strlcpy(char* dst, const char* src, size_t size);

size_t strlcat(char* dst, const char* src, size_t size);
```

> str 함수들

str함수는 char 포인터를 조작하는 함수들이며 기본적으로는 `<string.h>`에 정의되어있다.(뒤에 서술하겠지만 `strlcat`, `strlcpy`는 bsd system에 추가된 함수이다. 따라서 os에 따라서 library를 include해야할 필요가 있다)</br></br>
mem 함수와 size를 받지 않는데, 문자열은 반드시 null로 종료된다는 기준이 있기 때문이다. 따라서 마지막이 null로 끝나지 않는 char 포인터나 배열을 받으면 정상적으로 동작하지 않게 된다.

### strlen
```c
size_t strlen(const char* str);
```

<table>
    <tr>
        <td class="title">str</td>
        <td>문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>문자열의 길이</td>
    </tr>
</table>

문자열(str)의 총 길이를 반환한다. 문자열의 길이는 주소 시작점으로부터 null문자(0)를 만날 때까지 바이트수를 말한다.

### strchr
```c
char* strchr(const char* str, int character);
```
<table>
    <tr>
        <td class="title">str</td>
        <td>문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">character</td>
        <td>찾을 문자</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>성공 : 찾은 문자의 주소 / 실패 : NULL</td>
    </tr>
</table>

문자열에서 특정한 문자가 가장 먼저 나타나는 곳의 위치를 찾는다. 


### strrchr
```c
char* strrchr(const char* str, int character);
```

<table>
    <tr>
        <td class="title">str</td>
        <td>문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">character</td>
        <td>찾을 문자</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>성공 : 찾은 문자의 주소 / 실패 : NULL</td>
    </tr>
</table>

`strchr`과 마찬가지로 문자를 찾지만 가장 마지막으로 나타나는 위치를 찾는다. 

> bsd function

`strlcat`과 `strlcpy`는 openBSD에 정의되어 있다.(OpenBSD에 대한 내용은 [여기](https://www.openbsd.org/)) 이 둘은 BSD의 취지에 걸맞게 보안 목적으로 개발되었다.</br></br>os에 따라 compile에서 동작하지 않을 수 있는데 os상의 `bsd/string.h`의 위치를 확인하고 include하고 libs를 포함시켜야 할 수 있다.
```c
/* 이는 하나의 example 이고 정상동작하지 않으면 bsd/string.h의 정확한 위치를 찾아야 한다 */
#include <bsd/string.h>
```
```bash
gcc *.c -lbsd
```

### strlcpy

```c
size_t strlcpy(char* dst, const char* src, size_t size);
```

<table>
    <tr>
        <td class="title">dst</td>
        <td>복사될 문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">src</td>
        <td>복사할 문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">size</td>
        <td>복사<span style="color : #b5251b"><b>될</b></span> 문자의 최종 길이</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>복사된 문자열의 길이</td>
    </tr>
</table>

특정 문자열을 특정 문자열에 복사하는 함수이다.</br></br>`strlcpy`를 보기전 `strcpy`살펴보자. `strcpy`는 source문자열을 destination에 복사하는 함수이다. 아래와 같은 상황에서 문제가 발생한다.

```c
typedef struct s_strs {
    char s1[5];
    char s2[5];
}             t_strs;

t_strs strs;

strcpy(strs.s2, "12345");
strcpy(strs.s1, "12345678");
```

위 코드에서 s2값을 확인해보면 값이 정상적이지 않음을 확인할 수 있을 것이다.(통상 67845가 출력될 것이다) 이는 strcpy는 메모리 영역을 그저 채우기만 하기 때문이다.</br>따라서 overflow된 값인 678이 이어져있던 buffer의 123을 덮어버리기 때문이다. 이러한 문제를 해결하기 위해 `strncpy`와 문자열의 크기를 정확히 알고 활용해야함에 주의를 둔다.</br></br>`strncpy`도 문제가 발생할 수 있는데, 아래를 살펴보자

```c
char src[] = "tester";
char dest[6];

strncpy(dest, src, 3);
```

위 코드는 동작에 아무런 이상이 없을 것 같지만, 실제로는 dest가 null문자로 종료되었다는 보장이 없다. dest의 0, 1, 2 buffer에는 t, e, s가 각각 복사되었지만 3번째 buffer가 NULL이라는 보장이 없다. `strlcat`은 이러한 위험성을 최대한 배제하기 위해 만들어졌다.</br></br>`strlcpy`는 복사**될**문자열의 NULL문자를 포함한 최종길이를 파라미터로 받는데, 반드시 마지막 문자는 NULL문자로 종료된다. 따라서 `strncpy`와 같은 문제가 발생하지 않는다. 

### strlcat

```c
size_t strlcat(char* dst, const char* src, size_t size);
```

<table>
    <tr>
        <td class="title">dst</td>
        <td>연결될 문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">src</td>
        <td>연결할 문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">size</td>
        <td>복사<span style="color : #b5251b"><b>될</b></span> 문자의 최종 길이</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>연결된 문자열의 길이</td>
    </tr>
</table>

문자열에 특정 문자열을 정해진 길이까지 연결하는 함수이다.</br></br>`strlcat`도 `strcat`의 overflow를 해결하기 위해 개발된 `strncat`의 null문자를 보완하기 위해 만들어졌다. `strlcat`은 규정된 방식에 따라 동작하는데 그 규칙을 명확히 해야 함수를 구현할 때 오류가 없이 동작하게끔 만들 수 있다. 예를 들어 size가 dest의 길이보다 작다면 아예 연결이 되지 않고 dest가 그대로 반환된다. 
