---
Category : Libft
Id : 3
Title : "Libft : memcpy와 memmove"
Description : "memmove와 memcpy의 차이를 구별해보자"
Date : 2020, 10, 19 (Mon)
Auther : seolim
pre : 2
next : 4
---


# Libft memcpy memmove
> Link

[https://github.com/seo1im/Libft](https://github.com/seo1im/Libft)

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

mem 함수들 중 유사한 함수인 memcpy와 memmove의 차이를 명확히 해보자

##### 주의점
실제 환경에서 `memcpy`와 `memmove`를 아래 예제와 같이 진행하면 전혀 문제없이 동일한 결과가 나올 수 있다. 이는 현재 대부분의 환경에서 `memcpy`의 overlapping 문제를 해결했기 때문이다. 그러나 42 seoul의 물리넷을 포함한 일부 환경에선 아직 `memcpy`의 개선이 이루어지지 않았음을 알아두자.


> memcpy와 memmove

`memcpy` 와 `memmove`는 둘다 메모리의 값을 복사하는 함수이다. 실제로 기능적으로 두 함수는 전혀 차이가 없다.</br></br>두 함수의 차이는 `memcpy`는 메모리를 직접 copy를 진행하고 `memmove`는 값을 임시 버퍼에 저장한 후 복사를 진행한다. 아래 코드를 보자

```c
char str[] = "1234567890"

memcpy(str + 1, str, 9);

printf("%s\n", str);
/* result : 1111111111" */
```

위 코드와 같이 오버래핑(overlapping)이 발생한다. 아래 그림을 보면 이해가 될 것이다.

##### TODO : 그림 위치

`memmove`는 이러한 문제를 해결하기 위해 임시 버퍼공간에 복사할 데이터를 이동한 후 복사를 진행한다. 따라서 위와같은 문제는 발생하지 않는다.</br></br>쉽게 생각해서 memcpy는 문제가 발생할 수 있지만 속도가 빠르고, memmove는 느리지만 안전하다.

### memmove의 개선
memmove는 memcpy에 대비해서 느리다는것을 위에서 알았다. 그렇다면 memmove를 조금이라도 빠르게 하려면 어떻게 해야할까?</br></br>overlap이 발생하는 경우는 source가 destination 보다 앞선 경우(작은 경우)에 대해 발생할 수 있다. 따라서 해당 경우를 제외하고는 memcpy와 동일하게 동작하여도 아무런 문제가 없다.

```c
if (dest <= src)
{
    /* cpy와 동일하게 직접 복사 */
}
else
{
    /* 임시버퍼에 저장하거나 뒤에서 부터 복사 */
}
```

