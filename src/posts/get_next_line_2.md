---
Category : get_next_line
Id : 2
Title : "get_next_line : Static"
Description : "get_next_line에서 주의할 부분들을 알아보자"
Date : 2020, 10, 21 (Wed)
Auther : seolim
pre : 1
next : 3
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

> read, offset, static의 연관성

앞서 말했듯이 get_next_line은 정해진 버퍼사이즈가 어떻던간에 한줄씩의 문자열을 읽어야 한다. 한번 아래 코드를 살펴보자.

```c
/*
*  아래코드는 과제의 정답 코드가 아니다.
*  EOF에도 동작하지 않고 return 처리도 되어있지 않다. 참고만 하길 바란다.
*
*  file 내용은 아래와 같다고 가정한다.
*    1
*    12
*    123
*/
void get_next_line(int fd, char **line)
{
    char temp[100];
    char buf;
    int  i = 0;
    int  read_size = 1;
    
    bzero(temp, 100);
    while (read(fd, &buf, read_size))
    {
        if (buf == '\n')
        {
            *line = strdup(temp);
            return (1);
        }
        temp[i++] = buf;
    }
    *line = strdup("");
    return (0);
}

int main()
{
    int fd = open("file_name", O_RDONLY);
    char *line = NULL;
    get_next_line(fd, &line); /* line = 1 */
    free(line);
    get_next_line(fd, &line); /* line = 12 */
    free(line)
}
```

위 코드는 EOF를 만나기 전까지한줄씩 문자열을 읽는데에 아무런 문제없이 동작한다. 문자를 한개씩 읽기 때문에 개행을 넘어갈 일이 없기 때문이다. 이번엔 아래 코드를 살펴보자

```c
/*
*  아래코드는 과제의 정답 코드가 아니다.
*  EOF에도 동작하지 않고 return 처리도 되어있지 않다. 참고만 하길 바란다.
*
*  file 내용은 아래와 같다고 가정한다.
*    1
*    12
*    123
*/
void get_next_line(int fd, char **line)
{
    char file[100];    
    char buf[5];
    char *cursor;
    int  i = 0;
    int  read_size = 5;
    
    while (read(fd, buf, read_size))
    {
        if ((cusor = memchr(buf, '\n', 5))
        {
            memcpy(file + i, buf, cursor - buf);
            line = strdup(file);
            return (1);
        }
        memcpy(file + i, buf, 5);
        i += 5;
    }
    *line = strdup("");
    return (0);
}

int main()
{
    int fd = open("file_name", O_RDONLY);
    char *line = NULL;
    get_next_line(fd, &line); /* line = 1 */
    free(line);
    get_next_line(fd, &line); /* line = 123 */
    free(line)
}
```

위 코드는 read_size를 5로 바꾸었을 뿐이지만 정상적으로 동작하지 않는다. `read`와 file의 offset을 알고있다면 왜 이렇게 동작하는지 알 수 있을것이다. `read`함수는 파일을 읽은만큼 offset을 이동시킨다. 따라서 처음 `get_next_line`이 동작하였을 때, read함수는 파일에서 "1\n12\n"까지 읽어냈기에 descriptor는 이미 그 뒤인 "1"을 가르키고 있게 된다. 따라서 다음 get_next_line은 "123"을 읽어내는 것이다. 아래 그림을 참고하자.

##### TODO : 그림 넣기

위를 해결하기 위해선 2가지 방법이 있을 수 있다. 첫번째는 offset을 매번 제 위치로 돌려놓는 것이고 두번째는 이전에 읽었던 내용을 계속 담고 있는 것이다. 첫번째 방법은 `lseek`를 통해 구현이 가능하나 과제에선 허용되지 않으며 성능도 좋지않다.</br></br>두번째 방법을 위해 static 변수를 활용하는 것이다. 아래 코드를 보자

```c
/*
*  아래코드는 과제의 정답 코드가 아니다.
*  EOF에도 동작하지 않고 return 처리도 되어있지 않다. 참고만 하길 바란다.
*
*  file 내용은 아래와 같다고 가정한다.
*    1
*    12
*    123
*/
void get_next_line(int fd, char **line)
{
    static char file[100]; //make static
    char temp[100]; //임시 버퍼, 이미 복사한 파일의 내용을 삭제하기 위함
    char buf[5];
    char *cursor;
    int  i = 0;
    int  read_size = 5;
    
    //읽은 내용에 이미 개행이 존재하면 file을 읽지 않음
    if ((cursor = memchr(file, '\n', strlen(file)))
    {
        line = strdup();
        return (1);
    }
    else
    {
        while (read(fd, buf, read_size))
        {
            if ((cusor = memchr(buf, '\n', 5))
            {
                memcpy(file + i, buf, cursor - buf);
                line = strdup(file);
                // 이미 복사된 내용을 제거하는 코드
                memcpy(temp, cursor strlen(cursor));
                bzero(file);
                memcpy(file, temp, strlen(temp));
                return (1);
            }
            memcpy(str + i, buf, 5);
            i += 5;
        }
    }
    *line = strdup("");
    return (0);
}

int main()
{
    int fd = open("file_name", O_RDONLY);
    char *line = NULL;
    get_next_line(fd, &line); /* line = 1 */
    free(line);
    get_next_line(fd, &line); /* line = 12*/
    free(line)
}
```

위코드는 static과 일부 조건만 추가했음에도 정상적으로 동작한다. static으로 선언된 `file`이 프로그램(main)이 종료되기 전까지 저장된 값을 계속 유지한다. 따라서 처음에 "1\n12\n"를 읽고 출력한 "1\n"을 지워두면 두번째 get_next_line이 호출될 때, file에는 "12\n"이 남아있고 원하는 결과를 얻을 수 있게된다.
