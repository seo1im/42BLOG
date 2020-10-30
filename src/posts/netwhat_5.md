---
Category : netwhat
Id : 5
Title : "netwhat : ip 계산"
Description : "IP 주소와 관련된 계산법들을 알아보자"
Date : 2020, 10, 30 (Fri)
Auther : seolim
pre : 4
next : 0
tags : netwhat
---

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

1. Subnet mask를 통해 host범위, network주소 를 계산할 수 있다.

> 서브넷 마스크 계산

192.168.32.16/24라는 IP가 주어져 있다고 생각해 보자. /24의 의미는 서브넷 마스크의 비트수가 24라는 의미이다. 이를 비트로 표현하면</br></br><span style="font-size:2rem; font-weight:bold">11111111.11111111.11111111.00000000(255.255.255.0)</span> 이다.</br>이 반대로 비트나 마스크 IP가 주어졌을 때, CDIR 표기를 구할 수 도 있어야 한다.

> 네트워크 주소 계산

앞서 subnet mask는 네트워크주소의 위치를 알려준다고 이야기하였다. 이를 통해 network주소를 계산할 수 있다. 아래 그림을 보자.

![netwhat_5_1](https://raw.githubusercontent.com/seo1im/42BLOG/master/src/images/posts/netwhat_5_1.png)

위 호스트의 IP는 192.168.32.16이고 subnet mask의 비트수는 24이다. subnet mask와 ip의 비트 and 연산을 한 아래 계산값이 network주소이다. 따라서 network 주소는 192.168.32.0이다.

> Host 수 계산 / broad cast

위처럼 네트워크 IP를 계산한다면 나머지 IP는 개개인의 Host에게 할당할 수 있는 범위를 구할 수 있다. 즉**192.168.32.0 ~ 192.168.32.255**의 총 256개가 할당 가능한 범위가 된다.</br></br>앞에 잘 읽어왔다면 해당 주소에서 broadcast주소와 local host 2개를 빼야함을 알고 있을 것이다.
