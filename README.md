# React Component Library Adaptation for Ant Design

##Instalation
- install both projects, custom-antd-libs and react-app
- link custom-antd-libs: 
  - cd custom-antd-libs
  - yarn link
- link custom-antd-libs to react-app
  - cd react-app
  - yarn link "custom-antd-libs"

#Run
- cd react-app
- yarn start
    
##Error
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
   See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
