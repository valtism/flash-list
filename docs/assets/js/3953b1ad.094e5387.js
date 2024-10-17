"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[323],{5680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>c});var n=i(6540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(i),c=a,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return i?n.createElement(h,r(r({ref:t},d),{},{components:i})):n.createElement(h,r({ref:t},d))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var m=2;m<o;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2939:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var n=i(8168),a=i(8587),o=(i(6540),i(5680)),r=["components"],s={id:"estimated-item-size",title:"Estimated Item Size Prop",slug:"/estimated-item-size",sidebar_position:2},l=void 0,m={unversionedId:"fundamentals/estimated-item-size",id:"fundamentals/estimated-item-size",title:"Estimated Item Size Prop",description:"estimatedItemSize is a single numeric value that hints FlashList about the approximate size of the items before they're rendered. FlashList can then use this information to decide how many items it needs to draw on the screen before initial load and while scrolling. If most of the items are of different sizes, you can think of an average or median value and if most items are of the same size, just use that number. A quick look at Element Inspector can help you determine this. If you're confused between two values, the smaller value is a better choice.",source:"@site/docs/fundamentals/estimated-item-size.md",sourceDirName:"fundamentals",slug:"/estimated-item-size",permalink:"/flash-list/docs/estimated-item-size",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/fundamentals/estimated-item-size.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1729182037,formattedLastUpdatedAt:"10/17/2024",sidebarPosition:2,frontMatter:{id:"estimated-item-size",title:"Estimated Item Size Prop",slug:"/estimated-item-size",sidebar_position:2},sidebar:"autoSidebar",previous:{title:"Performance troubleshooting",permalink:"/flash-list/docs/performance-troubleshooting"},next:{title:"Writing performant components",permalink:"/flash-list/docs/fundamentals/performant-components"}},d=[{value:"How to calculate",id:"how-to-calculate",children:[],level:3},{value:"Deep dive",id:"deep-dive",children:[{value:"Impact on scroll",id:"impact-on-scroll",children:[],level:3},{value:"Impact of number of items drawn on responsiveness",id:"impact-of-number-of-items-drawn-on-responsiveness",children:[],level:3},{value:"Impact of having wrong <code>estimatedItemSize</code>",id:"impact-of-having-wrong-estimateditemsize",children:[],level:3},{value:"Future Revisions",id:"future-revisions",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,i=(0,a.A)(e,r);return(0,o.yg)("wrapper",(0,n.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"estimatedItemSize")," is a single numeric value that hints ",(0,o.yg)("inlineCode",{parentName:"p"},"FlashList")," about the approximate size of the items before they're rendered. ",(0,o.yg)("inlineCode",{parentName:"p"},"FlashList")," can then use this information to decide how many items it needs to draw on the screen before initial load and while scrolling. If most of the items are of ",(0,o.yg)("strong",{parentName:"p"},"different sizes"),", you can think of an average or median value and if most items are of ",(0,o.yg)("strong",{parentName:"p"},"the same size"),", just use that number. A quick look at ",(0,o.yg)("inlineCode",{parentName:"p"},"Element Inspector")," can help you determine this. If you're confused between two values, the smaller value is a better choice."),(0,o.yg)("h3",{id:"how-to-calculate"},"How to calculate"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Use the average item size from the first render - this will be a part of the warning if you don't specify ",(0,o.yg)("inlineCode",{parentName:"li"},"estimatedItemSize"),"."),(0,o.yg)("li",{parentName:"ul"},"If most items are of ",(0,o.yg)("strong",{parentName:"li"},"similar heights")," or ",(0,o.yg)("strong",{parentName:"li"},"widths")," (if horizontal), just open up element inspector from ",(0,o.yg)("inlineCode",{parentName:"li"},"react-native's")," dev menu, check the size of one of the items, and use it. Don't worry about different devices. We have enough tolerance to work around it."),(0,o.yg)("li",{parentName:"ul"},"If the items ",(0,o.yg)("strong",{parentName:"li"},"have a lot of different sizes"),", choose a few that are pretty different, use element inspector, read their sizes, and calculate an average. This average will work great, don't worry about solving for different devices sizes. There's enough tolerance internally."),(0,o.yg)("li",{parentName:"ul"},"If you run into a situation where more than one value seems like a good fit, pick the smaller one.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://user-images.githubusercontent.com/7811728/159806998-ce6b0c27-576c-4fe1-8170-cfa23788cfae.png",width:"700"})),(0,o.yg)("h2",{id:"deep-dive"},"Deep dive"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"FlashList")," doesn't know the size of its children before they're rendered. When the list is loading, it needs to decide how many items to render. There are only few choices here:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Render a fixed number of items:")," A default number of items to render on load may not be right for all devices and it should ideally depend on screen size. Drawing smaller number of items will show up blank space on load and drawing too many will increase load time."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Use a default value for ",(0,o.yg)("inlineCode",{parentName:"strong"},"estimatedItemSize"),":")," If we use a default size for items on launch, we still run into problems. Let's say we use ",(0,o.yg)("inlineCode",{parentName:"li"},"50px")," as the default, without you being aware of this, and you're rendering a list with large items like a news feed where items are complex. Let's say the actual rendered size is around ",(0,o.yg)("inlineCode",{parentName:"li"},"500px"),". Based on this assumption, we will draw ",(0,o.yg)("inlineCode",{parentName:"li"},"20")," items on load if the screen size is ",(0,o.yg)("inlineCode",{parentName:"li"},"1000px")," while we should only draw 2. This result is not optimal, and you may not even realize how much faster loads can be."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Take ",(0,o.yg)("inlineCode",{parentName:"strong"},"estimatedItemSize")," from developers:")," Instead of trying to hide away this requirement, we're letting you make the decision. We have decided to use a size estimate and not an initial count to render because size is a more stable value across device sizes.")),(0,o.yg)("p",null,"We currently keep ",(0,o.yg)("inlineCode",{parentName:"p"},"estimatedItemSize")," optional but ",(0,o.yg)("strong",{parentName:"p"},"strongly")," recommend you to set it. If you don't, you will get a warning with suggestion to set it to a value equal to the average item size from the first render."),(0,o.yg)("h3",{id:"impact-on-scroll"},"Impact on scroll"),(0,o.yg)("p",null,"During very quick scrolls, if offsets are changing very quickly, ",(0,o.yg)("inlineCode",{parentName:"p"},"FlashList")," might run into a situation where it needs to prepare more than one item. This is just another version of the same problem. If your estimates are too big compared to actual sizes, ",(0,o.yg)("inlineCode",{parentName:"p"},"FlashList")," might think that a small number of items is enough to fill the screen and you might see blanks. ",(0,o.yg)("em",{parentName:"p"},"This is the primary reason we suggest using a smaller value if you're confused between the two of them.")," Drawing a few more items is better than showing blanks. With ",(0,o.yg)("inlineCode",{parentName:"p"},"FlashList"),", we don't expect blanks unless components are very slow or ",(0,o.yg)("inlineCode",{parentName:"p"},"estimatedItemSize")," is too big compared to actual sizes."),(0,o.yg)("h3",{id:"impact-of-number-of-items-drawn-on-responsiveness"},"Impact of number of items drawn on responsiveness"),(0,o.yg)("p",null,"Having a few items on the screen is great for performance and responsiveness. Small render tree is much faster to update. Let's say there's a checkbox within your list items and you store their selected state in a store. You'd want this checkbox to be extremely responsive while changing states and having a large render tree will prevent that from happening. Many of you might have seen this problem in ",(0,o.yg)("inlineCode",{parentName:"p"},"FlatList"),"."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"FlatList")," has a default ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/optimizing-flatlist-configuration#windowsize"},(0,o.yg)("inlineCode",{parentName:"a"},"windowSize"))," of ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/optimizing-flatlist-configuration#windowsize"},(0,o.yg)("inlineCode",{parentName:"a"},"21"))," which means that, on a ",(0,o.yg)("inlineCode",{parentName:"p"},"1000px")," tall device, it will draw about ",(0,o.yg)("inlineCode",{parentName:"p"},"10,000px")," at the bottom and at the top of currently visible window. ",(0,o.yg)("inlineCode",{parentName:"p"},"FlashList")," in comparison will only draw ",(0,o.yg)("inlineCode",{parentName:"p"},"250px")," extra on the top and bottom irrespective of the screen size. You will be amazed with how responsive things become when we have a very small number of items and that's why we care so much about it."),(0,o.yg)("h3",{id:"impact-of-having-wrong-estimateditemsize"},"Impact of having wrong ",(0,o.yg)("inlineCode",{parentName:"h3"},"estimatedItemSize")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Please note ",(0,o.yg)("inlineCode",{parentName:"li"},"FlashList")," will not overlap or show gaps between items due to incorrect values provided here."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"If the estimate is much higher than actual values"),", you may see few items load on screen and then immediately more will show up. During fast scroll you may see some blank area. It's not because things have become slow. The list just doesn't know that it has not drawn enough. Once the list knows the actual sizes of items it won't rely on estimates and that's why on scrolling up you may not see the same problem.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://user-images.githubusercontent.com/7811728/159801541-5540820d-4d90-491d-9645-dd43b684c437.png",width:"700"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"If the estimate is much smaller than actual values"),", not much will change visibly but you will be drawing more than necessary. If your components are complex, load times might increase.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://user-images.githubusercontent.com/7811728/159801594-51a26edc-8f5b-4fb5-a268-c138b525bd3c.png",width:"700"})),(0,o.yg)("h3",{id:"future-revisions"},"Future Revisions"),(0,o.yg)("p",null,"We're looking at ways to remove this requirement by leveraging ",(0,o.yg)("inlineCode",{parentName:"p"},"Fabric"),". In the short term, we plan to compute this average after the initial load to prevent issues during quick scrolls. The value provided will be also more relevant for load time optimization."))}p.isMDXComponent=!0}}]);