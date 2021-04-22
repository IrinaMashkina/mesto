(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i=n.selector,a=n.handleCardClick,u=n.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._image=t.link,this._caption=t.name,this._likes=t.likes,this._selector=i,this.handleCardClick=a,this.handleCardDelete=u,this.owner=t.owner._id,this.myId=r._id,this._id=t._id,this._api=o,this.card=t}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(".template").content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners(),this._countLikes=this._element.querySelector(".card__likes-count"),this._countLikes.textContent=this._likes.length,this._checkMyLike(this._likes);var e=this._element.querySelector(".card__image");return e.src=this._image,e.alt=this._alt,this._element.querySelector(".card__title").textContent=this._caption,this.owner===this.myId&&this._element.querySelector(".card__delete").classList.add("card__delete_visible"),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__delete").addEventListener("click",(function(){return e.handleCardDelete(e._id,e._element)})),this._element.querySelector(".card__like").addEventListener("click",(function(){e._handleCardLike()})),this._element.querySelector(".card__image").addEventListener("click",(function(){e.handleCardClick()}))}},{key:"_handleCardLike",value:function(){var e=this,t=this._element.querySelector(".card__like");t.classList.contains("card__like_active")?this._api.deleteLike(this._id).then((function(n){e._countLikes.textContent=n.likes.length,t.classList.remove("card__like_active")})).catch((function(e){return console.log(e)})):this._api.putLike(this._id).then((function(n){e._countLikes.textContent=n.likes.length,t.classList.add("card__like_active")})).catch((function(e){return console.log(e)}))}},{key:"_checkMyLike",value:function(e){var t=this;this._likeButton=this._element.querySelector(".card__like"),e.some((function(e){return e._id===t.myId}))?this._likeButton.classList.add("card__like_active"):this._likeButton.classList.remove("card__like_active")}}])&&n(t.prototype,r),e}(),o=document.querySelector(".popup_place_card-add"),i=document.querySelector(".profile__add-button"),a=document.querySelector(".popup_place_edit"),u=document.querySelector(".popup_place_avatar"),c=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__avatar-container"),s=document.querySelector(".popup__input_type_name"),f=document.querySelector(".popup__input_type_job"),p=document.querySelector(".popup__image"),h=document.querySelector(".popup__title_place_pic"),d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=t,this._element=document.querySelector(this._selector),this._closeButton=this._element.querySelector(".popup__close-button"),this._handleEscCloseEl=function(e){return n._handleEscClose(e)},this._handleOverlayCloseEl=function(e){return n._handleOverlayClose(e)}}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),this._element.removeEventListener("click",this._handleOverlayCloseEl),document.removeEventListener("keydown",this._handleEscCloseEl)}},{key:"_handleEscClose",value:function(e){27==e.keyCode&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._element.addEventListener("click",this._handleOverlayCloseEl),document.addEventListener("keydown",this._handleEscCloseEl)}}])&&_(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n,r=t.link,o=t.name;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._image=r,n._caption=o,n}return t=a,(n=[{key:"open",value:function(){b(k(a.prototype),"open",this).call(this),p.src=this._image,p.alt=this._caption,h.textContent=this._caption}}])&&m(t.prototype,n),a}(y);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n,r=t.handleFormSubmit,o=t.inputValues,u=t.validator;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._element.querySelector(".popup__container"),n._handleFormSubmit=r,n._buttonSubmit=n._formElement.querySelector(".popup__submit"),n._inputList=Array.from(n._formElement.querySelectorAll(".popup__input")),n._inputValues=o,n._validator=u,n._buttonTextContent=n._buttonSubmit.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){C(R(a.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",this._handleFormSubmit)}},{key:"close",value:function(){C(R(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"open",value:function(){C(R(a.prototype),"open",this).call(this),this._validator(),this._inputValues(),this.setEventListeners()}},{key:"renderLoading",value:function(e){e?(this._buttonSubmit.classList.add("popup__submit_loading"),this._buttonSubmit.textContent="Сохранение..."):(this._buttonSubmit.classList.remove("popup__submit_loading"),this._buttonSubmit.textContent=this._buttonTextContent)}}])&&L(t.prototype,n),a}(y);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent,avatar:this._userAvatar.style.backgroundImage}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,e.avatar&&(this._userAvatar.style.backgroundImage="url(".concat(e.avatar,")"))}},{key:"setNewAvatar",value:function(e){this._userAvatar.style.backgroundImage="url(".concat(e,")")}}])&&I(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"clearValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}}])&&B(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._URL=n,this._headers=r}var t,n;return t=e,(n=[{key:"handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._URL,"/cards"),{headers:this._headers}).then(this.handleResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._URL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this.handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this.handleResponse)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._URL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this.handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._URL,"/users/me"),{headers:this._headers}).then(this.handleResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._URL,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this.handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._URL,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this.handleResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._URL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this.handleResponse)}}])&&T(t.prototype,n),e}();function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._element=document.querySelector(n._selector),n.handleFormSubmit=r,n}return t=a,(n=[{key:"setEventListeners",value:function(){D(J(a.prototype),"setEventListeners",this).call(this),this._element.querySelector(".popup__submit_place_delete").addEventListener("click",this.handleFormSubmit)}},{key:"open",value:function(e,t){this._id=e,this.card=t,D(J(a.prototype),"open",this).call(this),this.setEventListeners()}},{key:"close",value:function(){D(J(a.prototype),"close",this).call(this)}}])&&A(t.prototype,n),a}(y);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return($="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W,X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function a(e,t){var n,r=t.handleFormSubmit,o=t.inputValues,u=t.validator;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e,{handleFormSubmit:r,inputValues:o,validator:u}))._element=document.querySelector(e),n._buttonSubmit=n._element.querySelector(".popup__submit"),n._input=n._element.querySelector(".popup__input"),n}return t=a,(n=[{key:"setEventListeners",value:function(){$(Q(a.prototype),"setEventListeners",this).call(this)}},{key:"_getInputValues",value:function(){return this._input.value}}])&&z(t.prototype,n),a}(P);function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new V(d,a);Z.enableValidation();var ee=new V(d,o);ee.enableValidation();var te=new V(d,u);te.enableValidation();var ne=new x({baseUrl:"https:/mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"8096f474-afa5-4224-80da-83335499b6b6","Content-Type":"application/json"}}),re=new P(".popup_place_edit",{handleFormSubmit:function(e){e.preventDefault(),re.renderLoading(!0),ne.editUserInfo(re._getInputValues()).then((function(){ce.setUserInfo(re._getInputValues()),s.value="",f.value=""})).catch((function(e){return console.log(e)})).finally((function(){re.renderLoading(!1),re.close()}))},inputValues:function(){s.value=ce.getUserInfo().name,f.value=ce.getUserInfo().job},validator:function(){Z.clearValidationErrors(),Z.toggleButtonState()}}),oe=new M(".popup_place_delete",{handleFormSubmit:function(e){e.preventDefault(),ne.deleteCard(oe._id).then((function(){return oe.card.remove()})).catch((function(e){return console.log(e)})).finally((function(){oe.close()}))}}),ie=new t({renderer:function(e){return ae(e)}},".elements");function ae(e){return new r(e,{selector:".template",handleCardClick:function(){new E(".popup_place_pic",e).open()},handleCardDelete:function(e,t){return oe.open(e,t)}},W,ne).generateCard()}var ue=new P(".popup_place_card-add",{handleFormSubmit:function(e){e.preventDefault(),ue.renderLoading(!0),ne.addNewCard(ue._getInputValues()).then((function(e){ie.addItem(ae(e)),console.log(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){ue.renderLoading(!1),ue.close()}))},inputValues:function(){},validator:function(){ee.clearValidationErrors(),ee.toggleButtonState()}}),ce=new q({nameSelector:".profile__name",jobSelector:".profile__profession",avatarSelector:".profile__avatar-container"}),le=new X(".popup_place_avatar",{handleFormSubmit:function(e){e.preventDefault(),le.renderLoading(!0),ne.editAvatar(le._getInputValues()).then((function(e){return ce.setNewAvatar(e.avatar)})).catch((function(e){return console.log(e)})).finally((function(){le.renderLoading(!1),le.close()}))},inputValues:function(){},validator:function(){te.clearValidationErrors(),te.toggleButtonState()}});c.addEventListener("click",(function(){re.open()})),i.addEventListener("click",(function(){ue.open()})),l.addEventListener("click",(function(){le.open()})),Promise.all([ne.getUserInfo(),ne.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W=o,ce.setUserInfo(W),ie.renderItems(i)})).catch((function(e){console.log(e)}))})();