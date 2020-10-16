---
Category : Libft
Id : 1
Title : Libft 개요
Description : Libft 프로젝트에 대한 기본적인 내용
Date : 2020, 10, 16 (Fri)
Auther : seolim
---

# Libft 개요
> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.</br></br>

> 목적

Libft는 c library중 `<string.h>`, `<stdlib.h>`, `<ctype.h>`에 포함된 함수를 직접 구현하고 custom library로 compile해보는 과제이다.</br></br>해당 과제에서 필수로 구현해야 하는 함수들은 아래와 같다.

```c
void* memset (void* ptr, int value, size_t num );

void bzero(void *s, size_t n);

void* memcpy(void* destination, const void* source, size_t num);

void* memccpy(void *dest, const void *src, int c, size_t n);

void* memmove(void* destination, const void* source, size_t num);

void* memchr(const void* ptr, int value, size_t num);

int memcmp(const void* ptr1, const void* ptr2, size_t num);

size_t strlen(const char* str);

size_t strlcpy(char* dst, const char* src, size_t size);

size_t strlcat(char* dst, const char* src, size_t size);

char* strchr(char* str, int character);

char* strrchr(char* str, int character);

int atoi(const char* str);

int isalpha(int c);

int isdigit(int c);

int isalnum(int c);

int isascii(int c);

int isprint(int c);

int toupper(int c);

int tolower(int c);

void* calloc(size_t elt_count, size_t elt_size)

char* strdup(const char* str);
```

Piscine을 통과한 교육생이라면 이미 작성해보았거나 한번쯤 보았던 함수들이 있을 것이다. 해당 과제에선 각각의 함수를 이해해보고 이러한 함수들이 언제 어디에서 사용될 수 있을지 생각해보는 과정을 가지도록 하자.

