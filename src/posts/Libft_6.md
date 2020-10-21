---
Category : Libft
Id : 6
Title : "Libft : stdlib function"
Description : "stdlib의 함수들을 알아보자"
Date : 2020, 10, 20 (Tue)
Auther : seolim
pre : 5
next : 0
---
> Link

[https://github.com/seo1im/Libft](https://github.com/seo1im/Libft)

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

stdlib 함수를 구현해보자.

```c
int atoi(const char* str);

void* calloc(size_t elt_count, size_t elt_size)

char* strdup(const char* str);
```

> stdlib 함수

### atoi
```c
int atoi(const char* str);
```

<table>
    <tr>
        <td class="title">str</td>
        <td>변경할 문자열의 첫번째 주소</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>성공 : 변환된 숫자</td>
    </tr>
</table>


문자열(str)을 숫자로 반환한다. 앞자리에는 공백문자, 문자열의 맨앞자리에는 부호가 올 수 있으며 숫자를 제외한 문자를 만나는 순간부터 무시된다. 아래 코드를 확인하자

```c
atoi("123");
/* result : 123 */

atoi("+123")
/* result : 123 */

atoi("-123");
/* result : -123 */

atoi("  \t    123")
/* result : 123 */
/* 공백문자는 ascii에서 whitespace에 해당하는 모든 문자를 지칭한다. */

atoi("   -123tt123")
/* result : -123 */

atoi("   ++++123")
/* result : 0 */
```

overflow되는 값에 대해서는 자동으로 int casting되므로 알아두자.

### calloc
```c
void* calloc(size_t elt_count, size_t elt_size)
```
<table>
    <tr>
        <td class="title">elt_count</td>
        <td>할당할 데이터 개수</td>
    </tr>
    <tr>
        <td class="title">elt_size</td>
        <td>할당할 데이터 크기</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>메모리가 할당된 변수 포인터</td>
    </tr>
</table>

`malloc`과 동일하게 메모리를 동적으로 할당하는 함수이고, 최초에 값을 0으로 초기화한다. `malloc`과 달리 넣을 데이터형의 크기와 개수를 받으므로 훨씬 직관적이다.

##### 왜 필요할까?
`malloc`함수로 할당을 진행하면 os는 사용되지 않던 메모리를 변수에 할당하기만 한다. 따라서 해당 메모리에 어떤값이 있을지 아무도 알 수 없다. 이러한 값을 쓰레기값(gabage value)라 하고 상황에따라 문제를 야기할 수 있다. calloc은 항상 이 값들을 0으로 초기화 한다.

### strdup
```c
char* strdup(const char* str);
```
<table>
    <tr>
        <td class="title">str</td>
        <td>복사할 문자열 첫 주소</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>복사된 문자열 첫 주소</td>
    </tr>
</table>

문자열(str)을 동적 할당된 배열에 복사하여 반환한다. 

##### 왜 필요할까?
strdup은 아래 코드를 하나의 함수로 만든것과 같다.
```c
char src[] = "example";
char *dest;

dest = malloc(sizeof(char) * strlen(src));

strcpy(dest, src);

/* dest = strdup(src); */
```

프로그램을 작성하다보면 문자열을 동적할당하는 경우가 상당히 많고 그러한 부분을 간단히 하기 위해서 만들어졌다.