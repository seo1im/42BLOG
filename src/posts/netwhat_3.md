---
Category : netwhat
Id : 3
Title : "netwhat : network - part1"
Description : "TCP UDP와 network layer에 대해 알아보자"
Date : 2020, 10, 26 (Mon)
Auther : seolim
pre : 2
next : 4
tags : netwhat
---

> Caution

본 문서를 포함한 블로그의 모든 내용은 <b>42 innovation academy</b>의 과제의 작성자의 해석 및 풀이 등으로 이루어져 있습니다.</br>본인이 42 교육생이거나 42 교육을 희망하는 분이라면 글을 먼저 보기보다는 고민해보고 읽어보기를 추천드립니다.


> 목적

1. 7계층 모델이 무엇인지 안다.
2. TCP / UDP를 이해할 수 있다.

> OSI 7계층 모델
<span style="color:#777777; font-weight:bold; background-color:#eeeeee; padding:5px">컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것이다.</span>[\<위키디피아\>](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)</br></br>각각의 계층은 네트워크 상에서 하나의 단계를 설명하고 있다. 간단히 살펴보면 아래와 같다.

1. 물리(Physical) 계층
    - 하드웨어 단위
2. 데이터 링크(Data Link) 계층 
    - 물리적 주소(MAC 주소) 단위 (ex> Ethernet)
3. 네트워크(Network) 계층 
    - IP 주소 단위 (route)
4. 전송(Transport) 계층
    - 데이터 단위 (end to end data communicaion) (ex> TCP/UDP)
5. 세션(Session) 계층
    - 통신을 관리하는 계층
6. 표현(Presentaion) 계층
    - 코드간의 번역을 담당
7. 응용(Application) 계층
    - 사용자(client)의 I/O 단위

각 계층이 어떤 역할을 하는지만 알아두고 만약 자세한 내용이 궁금하다면 [해당 문서](https://standards.iso.org/ittf/PubliclyAvailableStandards/s020269_ISO_IEC_7498-1_1994(E).zip)를 다운로드 받아 읽어보자.

> TCP / UDP

네트워크 통신간에 데이터를 주고받는 방식 중 가장 대중화된 2개의 프로토콜이다. 각각의 프로토콜이 어떤 방식으로 어떤 상황에서 활용되는지를 알아두면 좋다. 데이터를 통신하는 단계이므로 **전송(Transport) 계층**에서 활용된다.

### TCP

TCP의 가장 큰 특징은 **"데이터의 신뢰성이 높다"** 이다. TCP는 데이터를 패킷(packet)이라는 단위로 쪼개서 전송하는데, 이에따른 확인메시지(ACK)를 지속적으로 요청하기 때문에 데이터 손실없이 전송이 가능하다. 다만 해당 데이터를 Header에 써서 보내기 때문에 용량이 거대하다. 아래와 같은 특징을 알아두자.

1. TCP는 연결 지향형(connection-oriented)이다.
2. TCP는 브로드캐스트(broadcast) 통신을 할 수 없다.
3. TCP는 확장된(extended) checksum을 통해 데이터 송신 오류를 검출할 수 있다.
4. TCP는 연속된 데이터(Sequence data)를 사용한다.

TCP는 대부분의 데이터 송신에 활용되며 일반적으로 양방향 통신은 모두 TCP를 따른다고 생각하면 된다.

### UDP

UDP의 가장 큰 특징은 **"빠르다"** 이다. UDP는 TCP와 다르게 데이터를 한방향으로 보내기만 한다. 수신자(reciver)도 송신자(sender)도 데이터가 정상적으로 보내졌는지 확인할 수 없다. 따라서 데이터의 신뢰성이 없다. 아래와 같은 특징을 알아두자.

1. UDP는 데이터 지향형(datagram-oriented)이다.
2. UDP는 기본적인(basic) checksum만드로 데이터 오류를 검사한다.

주로 빠른 데이터 송신이 필요한 실시간 방송등에 활용한다. 