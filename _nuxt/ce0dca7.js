(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4],{370:function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,required:!0}}},o=n(25),l=n(48),c=n.n(l),v=n(131),m=n(206),d=n(364),f=n(373),h=n(361),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[t._v("Author")]),t._v(" "),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.author.name))]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.author.bio))])],1),t._v(" "),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}},[n("v-img",{staticClass:"elevation-6",attrs:{alt:"Profile Picture",src:t.author.image}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:n(207).default}),c()(component,{VCard:v.a,VImg:m.a,VListItem:d.a,VListItemAvatar:f.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},371:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);var r=n(86),o=n(7),l=n(16),c=(n(69),n(197)),v=n(132),m={components:{VImg:c.a},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,v,m,d,f,h,_,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,l=t.$content,e.prev=1,c="/posts/".concat(n.slug),e.next=5,l("posts",{deep:!0}).where({dir:c}).fetch();case 5:return v=e.sent,m=Object(o.a)(v,1),d=m[0],e.next=10,l("posts/writing-html-in-content").only(["title","slug"]).sortBy("createdAt","asc").surround(n.slug).fetch();case 10:return f=e.sent,h=Object(o.a)(f,2),_=h[0],x=h[1],console.log(_,x),e.abrupt("return",{post:d,prev:_,next:x});case 18:e.prev=18,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 21:case"end":return e.stop()}}),e,null,[[1,18]])})))()},computed:{postInfo:function(){var t=this.post||{};t.body;return Object(r.a)(t,["body"])}},mounted:function(){v.a.highlightAll()},methods:{filterContents:function(){console.log("Log")},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.description}],link:[{rel:"canonical",href:"https://nuxt-blog.com/"+this.post.dir}]}}},d=n(25),f=n(48),h=n.n(f),_=n(357),x=n(206),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"ma-2"},[n("div",{staticClass:"post"},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.post.description))]),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.formatDate(t.post.createdAt)))]),t._v(" "),n("v-tags",{attrs:{tags:t.post.tags}}),t._v(" "),n("v-img",{staticClass:"img",attrs:{src:t.post.image,alt:"Featured image"}}),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),n("author",{attrs:{author:t.post.author}}),t._v(" "),n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,"0fa50a8e",null);e.default=component.exports;h()(component,{VTags:n(116).default,VImg:n(207).default,Author:n(370).default,PrevNext:n(371).default}),h()(component,{VContainer:_.a,VImg:x.a})}}]);