---
Category : get_next_line
Id : 4
Title : "get_next_line : 구현"
Description : "get_next_line을 실제로 만들어 보자"
Date : 2020, 10, 23 (Fri)
Auther : seolim
pre : 3
next : 0
tags : get_next_line
---

> Link

[link not yet]()

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

get_next_line을 실제로 구현해보자

```c
int get_next_line(int fd, char **line);
```

> get_next_line

이 글은 완전히 완성된 코드에 대한 이야기가 아니며, 완성된 코드는 위 링크를 통해 직접 해석해보자. 혹은 다른 분들의 완성 git을 참고하는것도 좋은 방법이다. 이 글에선 대략적 구조와 구성을 설명할 것이며, 이를 완벽한 코드로 변경하는것은 직접 할 수 있도록 하자.

### Structure
기본적인 gnl의 구조는 아래와 같이 두고 진행한다.
```c
int get_next_line(int fd, char **line)
{
    static char *file = NULL;
    int code;
    
    while (strchr(file, '\n') == 0) //개행을 찾을 때 까지 파일을 읽는다..
    {
        code = read_file(fd, &file); //file을 읽고 read가 반환한 값을 반환한다.
        if (code == -1)
            return (error_handling()); //error case에 대한 처리를 한다.
        if (code == 0)
            break;
    }
    /*
    * 만약 마지막에 도달했는데, file에 문자가 남아있다면 개행으로 종료되지 않은 파일이고
    * 이를 line에 담는다.
    */
    if (code == 0 && file) 
        fill_last_line(line, &file);
    // 개행이 발견된다면 file에 쓴다.
    else
        fill_line(line, &file);
    return(code < 1 ? code : 1);
}
```

위 함수를 살펴보면 개행을 찾을때까지 파일을 읽고(`read_file`) file변수에 저장한다. 개행을 찾거나 파일을 전부 읽으면 (`code == 0`) line에 file의 값을 채운다. 이때, 파일에서 line에 쓴값은 file에서 지운다.

### 파일을 읽는법
```c
int read_file(int fd, char **file)
{
    char buf[BUFFER_SIZE + 1]; //BUFFER_SIZE는 외부에서 -D옵션을 통해 정해진 임의의 값이다.
    char *temp = *file;
    /* 만약 파일이 단 한번도 쓰인적이 없다면 최초의 할당을 진행한다. */
    if (!file)
        temp = strdup("");
    /*  */
    if ((code = read(fd, buf, BUFFER_SIZE)) > 0)
        strcat(temp, buf, code); //실제로는 해당 과정을 하기 전 file에 realloc을 진행해야 한다.
    *file = temp; //추가된 내용을 읽은 값을 file에 할당
    return (code);
}
```

##### 왜 file을 2차 포인터로 받아올까?
변수의 지역성을 생각해보자. 어떠한 scope내에서 선언된 변수는 scope외부에서 접근할 수 없다. 마찬가지로 scope내부에서 할당된 메모리는 scope외부에서 접근할 수 없다. 따라서 이를 return거나, double 포인터를 통해 할당된 위치의 주소를 넣어둠으로써 외부에서 이를 사용할 수 있게끔 하는것이다.

### file을 read에 쓰는법
```c
void fill_line(char **line, char **file)
{
    char *f_temp = *file;
    char *l_temp;
    char *new_file;
    int len;
    
    /* line의 file의 개행 전까지를 복사 */
    len = strchr(f_temp, '\n') - f_temp; //line에 쓸 개행까지의 길이
    l_temp = malloc((sizeof(char) * len) + 1);
    memncpy(l_temp, file, len);
    l_temp[len] = 0;
    *line = l_temp;
    
    /* file에서 line에 쓴 내용을 지우고 재 할당 */
    new_file = malloc(sizeof(char) * (strlen(f_temp) - len) + 1);
    new_file = strcpy(strchr(f_temp,  '\n') + 1); //개행 하나 뒤부터 마지막까지 내용을 복사
    free(f_temp);
    *file = new_file;
}
```

위 코드들은 앞서 말했듯이 의사코드에 가깝다. 대략적으로 동작을 하지만 malloc protection도 걸려있지 않고 코드도 전혀 정리되지 않았다. 구조적으로만 이해하고 본인의 프로젝트에 도움이 될 수 있도록 참고하자.