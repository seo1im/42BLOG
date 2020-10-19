---
Category : Libft
Id : 5
Title : "Libft : str function 2 / ctype function"
Description : "str 함수들과 ctype의 is 함수들을 알아본다"
Date : 2020, 10, 19 (Mon)
Auther : seolim
pre : 4
next : 0
---


# Libft str function / ctype function
> Link

[https://github.com/seo1im/Libft](https://github.com/seo1im/Libft)

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

str 관련 함수들와 ctype함수들을 알아보자. 이번 과정에서 알아볼 함수들은 아래와 같다.

```c
char *strnstr(const char *big, const char *little, size_t len);

int strncmp(const char* str1, const char* str2, size_t num);

int isalpha(int c);

int isdigit(int c);

int isalnum(int c);

int isascii(int c);

int isprint(int c);

int toupper(int c);

int tolower(int c);
```

> str 함수들

### strnstr
```c
char *strnstr(const char *str, const char *find, size_t len);
```

<table>
    <tr>
        <td class="title">str</td>
        <td>탐색될 문자열의 첫번째 주소</td>
    </tr>
    <tr>
        <td class="title">find</td>
        <td>탐색할 문자열의 첫번째 주소</td>
    </tr>
    <tr>
        <td class="title">len</td>
        <td>탐색될 문자열의 길이</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>성공 : 찾은 문자열의 시작 위치 / 실패 : NULL</td>
    </tr>
</table>


문자열(str)내에 특정 문자열(find)과 같은 첫번째 문자열을 찾는다. 성공할시 같은 문자열의 첫 주소를 반환한다. 아래와 같이 동작된다.

```c
char str[] = "Hello Hello World";
char find[] = "lo"

printf("result : %s\n", strnstr(str, find, strlen(str)));
/* result : lo Hello World */
```

### strncmp
```c
int strncmp(const char* str1, const char* str2, size_t num);
```
<table>
    <tr>
        <td class="title">str1</td>
        <td>비교할 문자열</td>
    </tr>
    <tr>
        <td class="title">str2</td>
        <td>비교할 문자열</td>
    </tr>
    <tr>
        <td class="title">num</td>
        <td>비교할 길이</td>
    </tr>
    <tr>
        <td class="title">return</td>
        <td>동일 : 0 / 다름 : *str1 - *str2</td>
    </tr>
</table>

동작은 memcmp와 다를것이 없고 char 포인터만을 받는다는 점이 다르다.

> ctype function

ctype에 정의된 함수들은 ascii문자를 검사, 조작하는 함수들이다.</br>대체로 **is~** 함수는 조건을 검사하는 함수들이고 **to~** 함수는 값을 조작하는 함수들이다.

### isalpha / isdigit / isalnum / isascii / isprint
모두 int값을 범위로 받는데 받는 범위는 ascii에 정의된 0 ~ 127까지만 가능하다. 다만 운영체제에는 255번 ascii code가 있는데 이는 확장 ascii code(extended ascii code)로 표준으로 지정된 값은 아니다.</br></br>각각의 값의 범위는 아래와 같다.

```c
isalpha : 65 ~ 90 / 97 ~ 122

isdigit : 48 ~ 57

isalnum : 48 ~ 57 / 65 ~ 90 / 97 ~ 122

isascii : 0 ~ 127

isprint : 32 ~ 126
```

모든 함수는 조건에 맞으면 1, 틀리면 0을 반환한다.

##### extende ascii code
extended ascii code는 7 bit(128개 문자) code의 표현 한계(모든 문자의 표기 불가)로 인해 8 bit로 확장된 코드이다. 다만 국가마다 넣어야 할 문자가 다른 문제로 인해 국가마다 그 영역이 다르기 때문에 정확한 표준이 아니며 여전히 표기법이 많은 문자에는 한계가 발생한다. 이에대해서 **unicode**가 등장하게 된다. 이 글에선 해당 내용은 생략한다.

### toupper / tolower
각각 알파벳의 소문자를 대문자로, 대문자를 소문자로 바꾸는 함수이다. 해당되지 않는 문자는 그대로 반환된다.