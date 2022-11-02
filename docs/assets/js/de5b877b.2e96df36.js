"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[554],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2194:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"reanimated",title:"React Native Reanimated"},l=void 0,c={unversionedId:"guides/reanimated",id:"guides/reanimated",title:"React Native Reanimated",description:"React Native Reanimated is an alternative animation library to the LayoutAnimation API provided by React Native.",source:"@site/docs/guides/reanimated.md",sourceDirName:"guides",slug:"/guides/reanimated",permalink:"/flash-list/docs/guides/reanimated",editUrl:"https://github.com/shopify/flash-list/edit/main/docusaurus/docs/guides/reanimated.md",tags:[],version:"current",lastUpdatedBy:"Talha Naqvi",lastUpdatedAt:1667426569,formattedLastUpdatedAt:"11/2/2022",frontMatter:{id:"reanimated",title:"React Native Reanimated"},sidebar:"autoSidebar",previous:{title:"Masonry Layout",permalink:"/flash-list/docs/guides/masonry"},next:{title:"SectionList",permalink:"/flash-list/docs/guides/section-list"}},u=[{value:"Layout Animations",id:"layout-animations",children:[],level:2},{value:"Hooks",id:"hooks",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Performance",id:"performance",children:[],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.reanimated2.com/"},"React Native Reanimated")," is an alternative animation library to the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/layoutanimation"},(0,i.kt)("inlineCode",{parentName:"a"},"LayoutAnimation"))," API provided by React Native."),(0,i.kt)("p",null,"We support view animations and most of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/layout_animations/"},"layout animations"),"."),(0,i.kt)("h2",{id:"layout-animations"},"Layout Animations"),(0,i.kt)("p",null,"For layout animations, similarly to the React Native API, you need to call ",(0,i.kt)("a",{parentName:"p",href:"/usage#prepareforlayoutanimationrender"},(0,i.kt)("inlineCode",{parentName:"a"},"prepareLayoutAnimationRender()"))," before removing or inserting an element that you want to animate. Note that we currently support only ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"},"entering")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/exitAnimations"},"exiting")," animations. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/layoutTransitions"},"Layout transitions")," are not supported")," as of now."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can use hooks such as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/hooks/useSharedValue"},(0,i.kt)("inlineCode",{parentName:"a"},"useSharedValue"))," as you would in a normal view. The difference is that since views get recycled, a value can transfer to an unrelated component. You will need to reset such values when a view is recycled - for this, you can pass a prop that uniquely identifies the cell (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of an item) and run a callback via ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),". You can take inspiration from the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect } from "react";\nimport Animated, { useSharedValue } from "react-native-reanimated";\nimport { FlashList } from "@shopify/flash-list";\n\nconst MyList = () => {\n  const Item = ({ item }: { item: { id: string } }) => {\n    const myValue = useSharedValue(0);\n    useEffect(() => {\n      // Reset value when id changes (view was recycled for another item)\n      myValue.value = 0;\n    }, [item.id, myValue]);\n    return <Animated.View />;\n  };\n\n  return <FlashList renderItem={Item} estimatedItemSize={100} />;\n};\n')),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("p",null,"If you use hooks that accept a dependencies array, make sure to leverage it and include only the minimal set of dependencies."))}d.isMDXComponent=!0}}]);