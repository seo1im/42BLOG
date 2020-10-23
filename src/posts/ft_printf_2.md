---
Category : ft_printf
Id : 2
Title : "ft_printf : 기본 Structure"
Description : "ft_printf의 구조를 어떻게 할지 고민해보자"
Date : 2020, 10, 23 (Fri)
Auther : seolim
pre : 1
next : 0
tags : ft_printf
---

> Link

[link not yet]()

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

ft_printf의 구조를 어떻게 구성할 것인지 고민해보자.

1. 프로그램을 짜기 전 프로그램을 어떻게 구성할 지 고민해본다.


> ft_print의 구성을 어떻게 할까?

`printf`의 기능은 크게 파싱(parsing)과 출력(print)로 볼 수 있다. input으로 받은 string을 파싱하고 지정된 방식으로 output을 화면에 출력한다.</br></br>2가지 방법을 일단 생각할 수 있다.

1. **input을 전체 다 파싱하는 동안 변경된 문자열을 저장해 두다가 파싱이 끝난 후 완성된 문자열을 출력하는 방법**
2. **input을 파싱하면서 변경된 문자열을 바로바로 출력하는 방법**

두 방법 모두 방식은 파싱을 진행하고 출력을 하는것은 동일하나 구성에 차이가 존재한다. 아래 수도코드(persudo code)를 보면 차이를 대략 눈치챌 것이다.

```javascript
/*
* print = 출력 기능
* parsing = 파싱 기능
* input = 들어온 str
* output = 파싱된 str
* temp = 저장된 임시 str
*/
// 1 방법
loop :
    output = parsing(*input)
    input++;
    temp += output;
    
print(temp)
    
// 2 방법
loop :
    output = parsing(*input)
    input++;
    print(output)

```

1 방법은 parsing이 진행되는 scope와 print가 진행되는 scope가 분리되어 기능적으로 분리가 잘 되어있으나, 메모리를 하나 더 사용하여 자원이 더 필요하다.</br>2 방법은 한 loop안에 parsing과 print가 한번에 진행되므로 더 간단히 작성할 수 있으나 기능 분리가 약해 디버그나 프로그램 확장시 서로 영향을 미칠 가능성이 높다.</br></br>어떠한 방식을 채택하던 그 이유가 명확해야하고 상황에 따라 개발자는 구조를 어떤식으로 하는것이 효율적인지 고민을 많이 하여야 한다.앞으로의 설명은 방법 2를 기준으로 진행된다.

> 기본 골조

```c
int ft_printf(const char *str, ...)
{
    va_list args;
    char *output;
    int len;
    
    va_start(args, str);
    while (str)
    {
        if (*str == '%')
        {
            output = parsing(&str, args);
            len += write(1, output, strlen(output));
        }
        else 
            len += write(1, str, 1);
        str++;
    }
    return (len);
}
```

Main process를 위와 같이 구조화 해 보았다. 해당 코드를 살펴보면 input으로 받은 문자열에 %가 발견되지 않으면 출력(`write`)를 바로 진행하고 발견되면 parsing을 통해 원하는 형태로 문자열을 만든 후 출력을 진행한다. 다음번엔 parsing내부를 어떻게 구현할 지 고민해보자