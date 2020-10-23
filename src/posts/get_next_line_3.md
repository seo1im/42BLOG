---
Category : get_next_line
Id : 3
Title : "get_next_line : EOF"
Description : "get_next_line에서 주의할 부분들을 알아보자"
Date : 2020, 10, 21 (Wed)
Auther : seolim
pre : 2
next : 4
---
> Link

[link not yet]()

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

get_next_line의 구현에 있어 주의해야 할 부분들을 알아보자.

```c
int get_next_line(int fd, char **line);
```

> EOF

unix file system에서 file의 마지막은 EOF로 정의가 되어있다. read file을 통해 파일의 마지막인 EOF에 도달하게되면 0을 반환하게 된다.</br></br>명확히 해야하는 것은 EOF는 character가 아니라는 점이다 따라서 EOF는 파일의 내용이 전부 읽힌 후 다음에 출력되며 내용과 함께 출력되지않는다. 아래 코드를 보자

```c
/*
* file :
* 1
* 12
* 123
*/

int main()
{
    char buf[100];
    
    int len = read(file, buf, 20);
    printf("%d\n", len); /* 8 */
    len = read(file, buf, 20);
    printf("%d\n", len); /* 0 */
}
```

file의 길이보다 큰 값으로 파일을 읽어도 EOF는 file을 전부 읽은 다음에 호출된다. 이는 `get_next_line`에서 어떤 문제를 야기할까. file의 개행종료랑 관련되어 생각해 볼 수 있다. 파일의 마지막엔 개행이 있을수도 없을 수 도 있다. 두 파일의 결과를 비교해보자.

```c
/* 완성된 get_next_line으로 가정한다. */

/*
* file 1은
* "1\n12\n123\n"
* 으로 개행으로 종료되었고
* 
* file 2는
* "1\n\12\n123"
* 으로 개행으로 종료되지 않았다. 
*/
int main()
{
    char *line;
    int file1 = open("file1", O_RDONLY);
    int file2 = open("file2", O_RDONLY);
    
    line = NULL;
    while (get_next_line(file1, &line))
    {
        printf("%s\n", line); //while 내부에서 1 12 123 출력
        free(line);
        line = NULL;
    }
    printf("%s\n", line); //출력 없음("" 출력)
    free(line);
    
    line = NULL;
    while (get_next_line(file2, &line))
    {
        printf("%s\n", line); //while 내부에서 1 12 출력
        free(line);
        line = NULL;
    }
    printf("%s\n", line); //출력 있음("123" 출력)
    free(line);
}
```

개행으로 종료된 file은 get_next_line이 검사하는 개행이 마지막 문자이기 때문에 마지막까지 출력이 다 끝난 후 EOF를 만나게 되므로 아무런 문제가 발생하지 않는다. 반면 개행으로 종료되지 않은 파일에 대해서 get_next_line은 개행을 만날때만 출력을 하기 때문에 마지막줄이 출력되기 전 EOF를 만나게 되고 마지막 출력이 되기 전 0을 반환하고 while문을 탈출하게 된다.</br></br>`gets`나 `get_line`은 해당 경우에 대해서 마지막 줄을 line에 저장하는 동작을 수행한다. 이 부분은 프로그램의 첫 구조를 어떻게 규정했냐에 따라 다를 수 있는 부분이지만, `get_next_line`의 평가는 물리넷이 진행하므로 42 seoul을 진행하고있는 분이라면 위와 같이 동작하게끔 만드는게 정답이다. 필자는 해당 부분을 아예 다른 함수로 구성해서 진행했고 프로젝트를 진행할 때, 가장 유념해야 할 부분이다.
