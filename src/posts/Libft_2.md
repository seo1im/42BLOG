---
Category : Libft
Id : 2
Title : "Libft : mem function"
Description : mem function
Date : 2020, 10, 16 (Fri)
Auther : seolim
pre : 1
next : 3
---


# Libft mem function
> Link

[https://github.com/seo1im/Libft](https://github.com/seo1im/Libft)

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

mem 관련 함수들을 알아보자. 이번 과정에서 알아볼 함수들은 아래와 같다.

```c
void* memset (void* ptr, int value, size_t num );

void bzero(void *s, size_t n);

void* memcpy(void* destination, const void* source, size_t num);

void *memccpy(void *dest, const void *src, int c, size_t n);

void* memmove(void* destination, const void* source, size_t num);

void* memchr(const void* ptr, int value, size_t num);

int memcmp(const void* ptr1, const void* ptr2, size_t num);
```

> mem 함수들

mem함수는 메모리를 조작하는 함수들이며 `<string.h>`에 정의되어있다.(정확히는 memset, memcmp등은 `<memory.h>`에 정의되어 있으며 `<string.h>`에서 include 되어있다)</br></br>
mem함수들은 모두 사이즈(`size_t`)를 파라미터로 받는데, 문자열과 같이 마지막이 null문자라는 규칙같은게 없기 때문에 메모리의 마지막을 판단 할 수 없기 때문이다.</br></br>mem함수들은 string에 정의되어있기는 하지만 pointer면 어떤값이든 받아서 동작할 수 있다. 아래와 같이 int 배열에서도 동작한다.

```c
int nums[3] = {1, 2, 3};
int copy[3];

memcpy(copy, nums, sizeof(int) * 3);
/* int 배열은 한칸당 4bit의 크기를 가지기 때문에 위 같은 배열에선 12(sizeof(int) * 3)만큼의 크기를 복사해야 정상적으로 동작함을 꼭 기억하자
```


### memset
```c
void* memset(void* ptr, int value, size_t num);
```

<table>
    <tr>
        <td class="title">ptr</td>
        <td>메모리 블럭의 첫번째 주소</td>
    </tr>
    <tr>
        <td class="title">value</td>
        <td>할당할 값</td>
    </tr>
    <tr>
        <td class="title">num</td>
        <td>할당할 크기</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>성공 : ptr / 실패 : NULL</td>
    </tr>
</table>

메모리 블럭(ptr)에 특정 값(value)를 특정 길이(size)만큼 할당한다. 성공하면 ptr을 반환하고 실패하면 NULL을 반환한다.

주로 초기화를 할 때 사용한다. 예를 들어 아래와 같이 활용한다.
```c
char  ptr[10];

memset(ptr, 0, 10);
```

위 코드가 실행되면 배열 ptr의 모든 값은 0으로 초기화 된다.

##### 왜 필요할까?
일반적으로 배열의 할당은 위처럼 선언을 통해 할당하거나 malloc등의 allocation함수를 통해 메모리를 할당한다. 해당 할당은 그저 일정 메모리를 변수에 할당해 주는것이기 때문에 그 값이 일정치 않다. 그러한 값을 쓰레기값(garbage value)라 한다. memset을 통해 최초의 값들을 모두 null값(0)등으로 초기화하여 에러를 방지한다.

### bzero
```c
void bzero(void *s, size_t n);
```
<table>
    <tr>
        <td class="title">s</td>
        <td>메모리 블럭의 첫번째 주소</td>
    </tr>
    <tr>
        <td class="title">n</td>
        <td>할당할 사이즈</td>
    </tr>
</table>

memset과 동일하게 동작하며 단 값이 모두 0이다. memset 예제와 동일하게 동작한다.

### memcpy
```c
void* memcpy(void* destination, const void* source, size_t num);
```
<table>
    <tr>
        <td class="title">destination</td>
        <td>복사될 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">source</td>
        <td>복사할 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">num</td>
        <td>복사할 크기</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>destination</td>
    </tr>
</table>

지정된 크기만큼의 메모리의 값을 다른 메모리에 복사한다. 복사범위가 같으면 overflow문제가 발생할 수 있으며 관련내용은 [다음 글]()을 참고하자

##### 왜 필요할까?
포인터에 대한 이해가 명확하다면 값 복사가 왜 필요한지 알고 있을것이다. 아래 코드를 봤을 때, 결과가 어떻게 다를지를 생각해보자.

```c
char str1[] = "sample";
char *str2;
char *str3;

str2 = str;
memcpy(str3, str, 7);
/* 위 코드는 str3에 메모리가 할당되지 않아 strict한 환경에선 동작하지 않는다. 동작시키려면 str3에 미리 크기 7 이상의 동적할당을 하도록 하자*/
```
str2는 str1의 포인터를 그대로 할당받는다. 따라서 str1의 값이 변경되면 str2의 값도 함께 바뀐다. 즉 str1과 str2가 가르키고 있는 주소는 동일하다. 

### memccpy
```c
void *memccpy(void *dest, const void *src, int c, size_t n);
```
<table>
    <tr>
        <td class="title">dest</td>
        <td>복사될 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">src</td>
        <td>복사할 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">c</td>
        <td>복사를 멈출 플래그 문자</td>
    </tr>
    <tr>
        <td class="title">n</td>
        <td>복사할 메모리 크기</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>desc</td>
    </tr>
</table>

`memcpy`와 동일하나 정해준 특정 값(c)을 발견하면 복제를 멈춘다.

### memmove
```c
void* memmove(void* destination, const void* source, size_t num);
```
<table>
    <tr>
        <td class="title">destination</td>
        <td>복사될 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">source</td>
        <td>복사할 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">num</td>
        <td>복사할 크기</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>destination</td>
    </tr>
</table>

`memcpy`와 기능은 완전히 동일하다. 다만 메모리 중간에 버퍼를 이용해 `memcpy`의 overflow 문제는 없다. [다음 글]()을 참고하자.

### memchr
```c
void* memchr(const void* ptr, int value, size_t num);
```
<table>
    <tr>
        <td class="title">ptr</td>
        <td>복사될 메모리 시작점</td>
    </tr>
    <tr>
        <td class="title">value</td>
        <td>찾을 값</td>
    </tr>
    <tr>
        <td class="title">num</td>
        <td>찾아볼 메모리 범위</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>성공 : 일치되는 값의 주소 / 실패 : NULL</td>
    </tr>
</table>

주어진 메모리내에 원하는 특정값을 찾아 그 주소를 반환한다. 

### memcmp
```c
int memcmp(const void* ptr1, const void* ptr2, size_t num);
```
<table>
    <tr>
        <td class="title">ptr1</td>
        <td>비교 메모리 블록 시작점</td>
    </tr>
    <tr>
        <td class="title">ptr2</td>
        <td>비교 메모리 블록 시작점</td>
    </tr>
    <tr>
        <td class="title">num</td>
        <td>비교할 범위</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>일치 : 0 / 불일치 : 다른값의 차(*ptr1 - *ptr2)</td>
    </tr>
</table>

두 메모리블록들의 값이 일치하는지를 비교하는 함수이다. 

##### 왜 필요할까?
메모리의 값을 비교하는데에 주의하면 된다. 아래 코드를 보자
```c
char str1[] = "test";
char str2[] = "test";

int equl = str1 == str2 ;
int cmp = memcmp(str1, str2, 4) == 0;
/*cmp는 값이 같으면 0을 반환하기 때문에 통일성을 위와 같이 작성하였다.*/
```

`eqaul`의 값은 0(`false`)이지만 `cmp`의 값은 1(`true`)이다. 포인터의 비교는 포인터의 주소가 동일한지 확인하는 것이기 때문에 위와같이 동작하게 된다. 앞서 말했던 값과 포인터의 차이를 잘 생각해보자.

