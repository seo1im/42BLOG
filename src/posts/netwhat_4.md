---
Category : netwhat
Id : 4
Title : "netwhat : network - part2"
Description : "DHCP와 DNS에 대해 알아보자"
Date : 2020, 10, 26 (Mon)
Auther : seolim
pre : 3
next : 5
tags : netwhat
---

### Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

1. DHCP를 이해한다.
2. DNS를 이해한다.

> DHCP

Internet에 접속하려면 Host는 IP 주소를 가지고 있어야 한다. 하지만 모든 Host에게 고유한 IP를 할당한다면, IP가 부족해질 것이다. 따라서 동적(dynamic)으로 IP를 할당하는 시스템이 요구되었고 DHCP가 개발되었다.</br></br>DHCP는 응용(Application) 계층에서 운용되며 UDP를 사용하여 각각의 Host에게 자동(automatic)으로 비어있는 IP를 할당해준다.</br></br>DHCP는 Discover, offer, Request, Ack의 과정을 거쳐서 IP를 host에게 할당해 주는데, 이를 관리하는 것이 DHCP server이다. 해당 내용이 궁금하다면 [위키](https://ko.wikipedia.org/w/index.php?title=%EB%8F%99%EC%A0%81_%ED%98%B8%EC%8A%A4%ED%8A%B8_%EA%B5%AC%EC%84%B1_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C&action=edit&section=5#DHCP_%EB%8F%99%EC%9E%91_%EC%9B%90%EB%A6%AC)를 참고하자.

> DNS

인터넷 url을 접속할때, 우리는 IP 주소로 접속하지 않고 특정한 url을 통해 접속한다. 이러한 사이트 주소의 이름을 **domain**이라고 한다. local host인 127.0.0.1을 loaclhost로 접속할 수 있는것도 일종의 domain system이다.</br></br>따라서 특정 IP에 특정 Domain을 매칭시키고 보관하는 system이 필요한데, 이를 **DNS(Domain Name System)** 라고 한다.</br></br>자세한 내용은 [위키](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)를 참고하자.

