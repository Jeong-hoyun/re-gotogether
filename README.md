# 🔍정호윤 프로젝트 모노레포

🪄 개요
웹사이트를 팀 프로젝트로 작성 뒤 jsx 파일을 tsx 파일로 마이그레이션 작업을 진행하면서 리팩토링을 진행하였으며
백엔드의 기한이 끝이나서 mock으로 작성 예정중입니다. 그 뒤 github action을 통한 CI/CD 배포 구현을 진행할 예정이며 완성 예정기한은 12월 16일까지 입니다.

### es-lint and prettier

.vscode 를 통해 일원화하였습니다.

### packages and apps

packages의 lib 폴더를 통해 공통화된 분야를 재사용할 수 있도록 하고
packages의 ui 폴더를 통해서는 ui를 개별 프로젝트에서도 재사용 할수 있도록 설정하고자 합니다.

## Script (웹 사이트 실행)

```
$ yarn workspace @jeong/web run dev
```

## format

```
$ yarn run format:fix
```
