(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__1RaiU",description:"Profile_description__1bv44",avatar:"Profile_avatar___4rAC",name:"Profile_name__3odro",tag:"Profile_tag__35l97",stats:"Profile_stats__1t9B0",statsItem:"Profile_statsItem__2WR0O",label:"Profile_label__18_wt",quantity:"Profile_quantity__1Y46y"}},function(e,a,t){e.exports={pricingItem:"PricingItem_pricingItem__3kB3x",icon:"PricingItem_icon__3U8cI",label:"PricingItem_label__2QTXE",capacity:"PricingItem_capacity__oOVTW",description:"PricingItem_description__3OkhD",price:"PricingItem_price__1-8aO",button:"PricingItem_button__1MCtU",Bronze:"PricingItem_Bronze__2mHbe",Silver:"PricingItem_Silver__3VQmR",Gold:"PricingItem_Gold__5l3lB"}},function(e,a,t){e.exports={statsSection:"Stats_statsSection__1GFNR",title:"Stats_title__1kdIf",statList:"Stats_statList__ELTxC",item:"Stats_item__muweh"}},function(e,a,t){e.exports={pricingPlan:"PricingPlan_pricingPlan__hpii8",item:"PricingPlan_item__3YTKU"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__FAvlx",transactionItem:"TransactionHistory_transactionItem__ffc6c"}},,,function(e){e.exports=[{id:"00000001",label:"Bronze",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png",capacity:"2TB",price:39,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{id:"00000002",label:"Silver",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png",capacity:"20TB",price:99,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{id:"00000003",label:"Gold",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png",capacity:"400TB",price:499,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]},function(e){e.exports=[{id:"1e0700a2-5183-4291-85cc-2065a036a683",type:"invoice",amount:"964.82",currency:"LRD"},{id:"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",type:"payment",amount:"686.50",currency:"WST"},{id:"44dca67a-8e5a-4798-bf8e-b15efd4e1abd",type:"invoice",amount:"828.62",currency:"UGX"},{id:"ea8ed3dc-2b68-4a53-905a-53ecb0adef33",type:"withdrawal",amount:"527.80",currency:"ALL"},{id:"ea76146a-0b00-4b80-bc02-a8c822176712",type:"withdrawal",amount:"371.43",currency:"MUR"},{id:"63ca02f9-d637-46b5-9237-f3b24425e029",type:"payment",amount:"862.44",currency:"AUD"},{id:"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",type:"withdrawal",amount:"907.00",currency:"GEL"},{id:"6013bad0-750c-4691-8bc2-d8f2b43969c4",type:"withdrawal",amount:"352.52",currency:"UGX"},{id:"252c7be4-8b06-4fa7-8d42-61fb835b70d5",type:"payment",amount:"388.98",currency:"TOP"},{id:"4eaab41b-b967-40ac-82ed-85fc66f646f1",type:"deposit",amount:"103.10",currency:"BWP"},{id:"9648a350-8469-42d5-8bf3-18090de5fe67",type:"withdrawal",amount:"322.32",currency:"MRO"},{id:"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",type:"invoice",amount:"14.79",currency:"PYG"},{id:"43ef232c-80e9-4d6f-b48a-b22405620de3",type:"payment",amount:"904.86",currency:"CHF"},{id:"5161682e-e620-4019-ab0a-24ceb10fbd20",type:"withdrawal",amount:"307.08",currency:"NOK"},{id:"7b119d71-42e6-4c42-a141-6818b07bb9ff",type:"invoice",amount:"275.07",currency:"AWG"},{id:"a4f65722-65c4-4c28-b1f4-b8ed988bb205",type:"deposit",amount:"213.10",currency:"STD"},{id:"c6e5784b-0ca3-48d6-86e5-b5128af5a523",type:"invoice",amount:"116.11",currency:"CUP CUC"},{id:"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",type:"invoice",amount:"878.67",currency:"HKD"},{id:"a4a98b0e-b22c-438b-9f83-de2df52110c8",type:"invoice",amount:"725.03",currency:"UYU UYI"},{id:"b39bfa7a-0166-4c47-94d6-87d20590f746",type:"payment",amount:"405.45",currency:"MDL"}]},function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(7),r=t.n(i),l=(t(16),t(1)),s=t.n(l),o=function(e){var a=e.user;return c.a.createElement("div",{className:s.a.profile},c.a.createElement("div",{className:s.a.description},c.a.createElement("img",{src:a.avatar,alt:"user avatar",className:s.a.avatar}),c.a.createElement("p",{className:s.a.name},a.name),c.a.createElement("p",{className:s.a.tag},a.tag),c.a.createElement("p",{className:s.a.location},a.location)),c.a.createElement("ul",{className:s.a.stats},c.a.createElement("li",{className:s.a.statsItem},c.a.createElement("span",{className:s.a.label},"Followers "),c.a.createElement("span",{className:s.a.quantity},a.stats.followers)),c.a.createElement("li",{className:s.a.statsItem},c.a.createElement("span",{className:s.a.label},"Views "),c.a.createElement("span",{className:s.a.quantity},a.stats.views)),c.a.createElement("li",{className:s.a.statsItem},c.a.createElement("span",{className:s.a.label},"Likes "),c.a.createElement("span",{className:s.a.quantity},a.stats.likes))))};o.defaultProps={user:{name:"UserName",tag:"@UserTag",location:"Earth",followers:0,views:0,likes:0}};var m=o,u=t(2),d=t.n(u),p=function(e){var a=e.label,t=e.icon,n=e.capacity,i=e.price,r=e.description;return c.a.createElement("div",{className:["".concat(d.a.pricingItem," ")+"".concat(d.a[a])]},c.a.createElement("i",{className:d.a.icon,style:{backgroundImage:"url(".concat(t,")")}}),c.a.createElement("h2",{className:d.a.label},a),c.a.createElement("p",{className:d.a.capacity},n),c.a.createElement("p",{className:d.a.description},r),c.a.createElement("p",{className:d.a.price},"$",i,"/MO"),c.a.createElement("button",{className:d.a.button,type:"submit"},"Get Started"))},b=t(4),f=t.n(b),_=function(e){var a=e.items,t=void 0===a?[]:a;return c.a.createElement("ul",{className:f.a.pricingPlan},t.map(function(e){return c.a.createElement("li",{className:f.a.item,key:e.id},c.a.createElement(p,e))}))},y=t(8),g=t(5),E=t.n(g),v=function(e){var a=e.items,t=void 0===a?[]:a;return c.a.createElement("table",{className:E.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,t.map(function(e){return c.a.createElement("tr",{className:E.a.transactionItem,key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))})))},h=t(9),w=t(3),N=t.n(w);var P=function(e){var a=e.title,t=e.stats,i=void 0===t?{}:t;return c.a.createElement(n.Fragment,null,c.a.createElement("section",{className:N.a.statsSection},c.a.createElement("h2",{className:N.a.title},a),c.a.createElement("ul",{className:N.a.statList},i.map(function(e){return c.a.createElement("li",{className:N.a.item,key:e.id,style:{backgroundColor:["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080"][Math.floor(20*Math.random()+1)]}},c.a.createElement("span",{className:N.a.label},e.label),c.a.createElement("span",{className:N.a.percentage},e.percentage,"%"))}))))};P.defaultProps={title:"Upload stats"};var I=P,k=(t(17),y),U={name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg",stats:{followers:5603,views:4827,likes:1308}},S=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],T=function(){return c.a.createElement("div",null,c.a.createElement(m,{user:U}),c.a.createElement(_,{items:k}),c.a.createElement(v,{items:h}),c.a.createElement(I,{title:"Upload stats",stats:S}))};r.a.render(c.a.createElement(T,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e8619ab6.chunk.js.map