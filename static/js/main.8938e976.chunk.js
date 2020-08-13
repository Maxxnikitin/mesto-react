(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=(a(5),a(10)),s=a(1),l=a(7),u=a.n(l);var m=function(){return r.a.createElement("header",{className:"header page__header"},r.a.createElement("img",{className:"logo header__logo",src:u.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430."}))};var d=function(){return r.a.createElement("footer",{className:"footer page__footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Maxim Nikitin"))},f=r.a.createContext();var p=function(e){var t=r.a.useContext(f),a=e.card.owner._id===t._id,n="button ".concat(a?"button_del":"button_del button_del-invisible"),o=e.card.likes.some((function(e){return e._id===t._id})),c="button ".concat(o?"button_like button_like-active":"button_like");return r.a.createElement("article",{className:"photo",key:e.card._id,id:e.card._id},r.a.createElement("img",{className:"photo__image",src:e.card.link,alt:e.card.name,"data-name":"",onClick:function(){e.onCardCick(e.card)}}),r.a.createElement("div",{className:"photo__title"},r.a.createElement("h2",{className:"photo__name"},e.card.name),r.a.createElement("div",{className:"photo__like"},r.a.createElement("button",{className:c,onClick:function(){e.onCardLike(e.card)},type:"button"}),r.a.createElement("p",{className:"photo__like-counter"},e.card.likes.length))),r.a.createElement("button",{className:n,onClick:function(){e.onCardDelete(e.card)},type:"button"}))};var _=function(e){var t=r.a.useContext(f);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440."}),r.a.createElement("div",{className:"profile__ava-change",onClick:e.onEditAvatar}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__title"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("button",{className:"button button_edit",type:"button",onClick:e.onEditProfile})),r.a.createElement("p",{className:"profile__about"},t.about)),r.a.createElement("button",{className:"button button_add",type:"button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"photos content__photos"},e.cards.map((function(t){return r.a.createElement(p,{key:t._id,card:t,onCardCick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))};var h=function(e){return r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.name},r.a.createElement("div",{className:"popup__overlay"}),r.a.createElement("form",{className:"form form_place_".concat(e.name),id:"form-".concat(e.name),name:e.name,method:"post",action:"#",onSubmit:e.onSubmit},r.a.createElement("button",{className:"button button_close-item",id:"button_close-item",type:"button",onClick:e.onClose}),r.a.createElement("fieldset",{className:"form__fieldset"},r.a.createElement("legend",{className:"form__title form__title_place_".concat(e.name)},e.title),e.children),r.a.createElement("button",{onClick:e.onSubmit,type:"submit",className:"button button_submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var b=function(e){return r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.name},r.a.createElement("div",{className:"popup__overlay"}),r.a.createElement("figure",{className:"popup__big-image"},r.a.createElement("button",{onClick:e.onClose,className:"button button_close-big",id:"button_close-item",type:"button"}),r.a.createElement("img",{className:"big-image",src:e.image.link,alt:e.image.name}),r.a.createElement("figcaption",{className:"big-image__title"},e.image.name)))},v=a(8),E=a(9),k=new(function(){function e(t){Object(v.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(E.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))})).then((function(e){return e}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))})).then((function(e){return e}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",headers:{authorization:"83dedcdd-7e88-4905-85f7-b138aebc1b0b","Content-Type":"application/json"}});var g=function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(s.a)(c,2),l=i[0],u=i[1],m=r.a.useContext(f);return r.a.useEffect((function(){o(m.name),u(m.about)}),[m]),r.a.createElement(h,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:n,about:l})}},r.a.createElement("input",{className:"form__input form__input_name",id:"fullname",type:"text",name:"name",value:n||"",onChange:function(e){o(e.target.value)},minLength:"2",maxLength:"40",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451\\s-]+$"}),r.a.createElement("span",{className:"form__input-error form__input-error_place_name",id:"fullname-error"}),r.a.createElement("input",{className:"form__input form__input_link",id:"about",type:"text",name:"link",value:l||"",onChange:function(e){u(e.target.value)},minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_place_description",id:"about-error"}))};var C=function(e){var t=r.a.useRef(),a=r.a.useContext(f);return r.a.useEffect((function(){t.current.value=a.avatar}),[a]),r.a.createElement(h,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},r.a.createElement("input",{ref:t,className:"form__input form__input_link",id:"avatar-link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_place_avatar",id:"avatar-link-error"}))};var N=function(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.createElement(h,{name:"images",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdatePlace({name:t.current.value,link:a.current.value})}},r.a.createElement("input",{ref:t,className:"form__input form__input_name",id:"name",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451\\s-]+$"}),r.a.createElement("span",{className:"form__input-error form__input-error_place_name",id:"name-error"}),r.a.createElement("input",{ref:a,className:"form__input form__input_link",id:"link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_place_description",id:"link-error"}))};var y=function(){var e=r.a.useState({link:"",name:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(s.a)(o,2),l=c[0],u=c[1],p=r.a.useState(!1),v=Object(s.a)(p,2),E=v[0],y=v[1],j=r.a.useState(!1),O=Object(s.a)(j,2),U=O[0],x=O[1],P=r.a.useState(!1),S=Object(s.a)(P,2),L=S[0],T=S[1],w=r.a.useState({}),A=Object(s.a)(w,2),D=A[0],I=A[1],q=r.a.useState([]),J=Object(s.a)(q,2),z=J[0],R=J[1];function $(){y(!1),u(!1),x(!1),T(!1)}return r.a.useEffect((function(){Promise.all([k.getUserInfo(),k.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];I(a),R(n)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(f.Provider,{value:D},r.a.createElement(m,null),r.a.createElement(_,{onEditProfile:function(){u(!0)},onAddPlace:function(){x(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){T(!0),n({link:e.link,name:e.name})},cards:z,onCardLike:function(e){(e.likes.some((function(e){return e._id===D._id}))?k.deleteLike(e._id):k.putLike(e._id)).then((function(t){var a=z.map((function(a){return a._id===e._id?t:a}));R(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){var t=z.filter((function(t){return t._id!==e._id}));R(t)})).catch((function(e){console.log(e)}))}}),r.a.createElement(d,null),r.a.createElement(g,{isOpen:l,onClose:$,onUpdateUser:function(e){k.setUserInfo(e.name,e.about).then((function(e){I(e),$()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),r.a.createElement(N,{isOpen:U,onClose:$,onUpdatePlace:function(e){k.addNewCard(e.name,e.link).then((function(e){R([].concat(Object(i.a)(z),[e])),$()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),r.a.createElement(C,{isOpen:E,onClose:$,onUpdateAvatar:function(e){k.setUserAvatar(e.avatar).then((function(e){I(e),$()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),r.a.createElement(h,{name:"del",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),r.a.createElement(b,{isOpen:L,onClose:$,image:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){},7:function(e,t,a){e.exports=a.p+"static/media/logo.e889e45f.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.8938e976.chunk.js.map