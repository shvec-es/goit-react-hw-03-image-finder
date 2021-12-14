(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__vKe8D",SearchForm:"Searchbar_SearchForm__3zZg7","SearchForm-button":"Searchbar_SearchForm-button__2jFgO","SearchForm-button-label":"Searchbar_SearchForm-button-label__uyMsK","SearchForm-input":"Searchbar_SearchForm-input__2RH-A"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3C7W1",Modal:"Modal_Modal__2aHdR"}},17:function(e,t,a){e.exports={Button:"Button_Button__rEFFk"}},22:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a.n(r),c=(a(22),a(3)),o=a(4),s=a(6),i=a(5),l=a(0),u=a(8),h=(a(23),a(10)),m=a.n(h),d=a(1),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchName:""},e.handleChange=function(t){e.setState({searchName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchName;""!==a.trim()?(e.props.onSubmit(a),e.setState({searchName:""})):u.b.warning("Enter word for search")},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:m.a.Searchbar,children:Object(d.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:m.a["SearchForm-button"],children:Object(d.jsx)("span",{className:m.a["SearchForm-button-label"],children:"Search"})}),Object(d.jsx)("input",{className:m.a["SearchForm-input"],type:"text",value:this.state.searchName,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(l.Component),p=b,j=a(9),g=a.n(j),f=a(12),v=a(15),y=a(16),O=a.n(y),_=(a(46),a(7)),x=a.n(_);function S(){return S=Object(f.a)(g.a.mark((function e(t){var a,r,n,c=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"1",r="key=23963114-6d0d5d874ae460d9125bacd21",e.prev=2,e.next=5,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12&").concat(r));case 5:if(!(n=e.sent).ok){e.next=10;break}return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",Promise.reject(new Error("Something wrong...")));case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])}))),S.apply(this,arguments)}var k={fetchPictures:function(e){return S.apply(this,arguments)}},w=k,I=function(e){var t=e.imgUrl,a=e.bigImgUrl;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{className:x.a["ImageGalleryItem-image"],src:t,alt:"","data-source":a})})},N=a(17),C=a.n(N),F=function(e){var t=e.onClick;return Object(d.jsx)("button",{className:C.a.Button,type:"button",onClick:t,children:"Load more"})},M=a(14),G=a.n(M),U=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleModal=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.props.onClose()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleModal)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:G.a.Overlay,onClick:this.handleModal,children:Object(d.jsx)("div",{className:G.a.Modal,children:this.props.children})})}}]),a}(l.Component),B=U,E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={pictures:[],page:1,visible:!1,bigImg:"",error:null,status:"idle"},e.handleClick=function(){w.fetchPictures(e.props.searchName,e.state.page+1).then((function(t){return e.setState((function(e){var a=e.page,r=e.pictures;return{page:a+1,pictures:[].concat(Object(v.a)(r),Object(v.a)(t.hits))}}))}))},e.openModal=function(t){t.target!==t.currentTarget&&(e.setState({visible:!0,bigImg:t.target.dataset.source}),document.body.style.overflow="hidden")},e.closeModal=function(){e.setState({visible:!1}),document.body.style.overflow="scroll"},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(f.a)(g.a.mark((function e(t,a){var r,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.searchName,n=this.props.searchName,r===n){e.next=14;break}return this.setState({status:"pending"}),e.prev=4,e.next=7,w.fetchPictures(n);case 7:(c=e.sent).hits.length>0?this.setState({pictures:c.hits,status:"resolved"}):(this.setState({status:"idle"}),u.b.error("Enter correct querry")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),this.setState({error:e.t0,status:"rejected"});case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.visible,r=e.bigImg,n=e.error,c=e.status;return"idle"===c?Object(d.jsx)(d.Fragment,{}):"pending"===c?Object(d.jsxs)("div",{className:x.a.Loader,children:[Object(d.jsx)(O.a,{type:"Rings",color:"#00BFFF",height:100,width:100}),";"]}):"rejected"===c?Object(d.jsx)("h1",{children:n.message}):"resolved"===c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:x.a.ImageGallery,onClick:this.openModal,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(d.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(d.jsx)(I,{imgUrl:a,bigImgUrl:r})},t)}))}),Object(d.jsx)(F,{onClick:this.handleClick}),a&&Object(d.jsxs)(B,{onClose:this.closeModal,children:[Object(d.jsx)("button",{className:x.a.Button,type:"button",onClick:this.closeModal}),Object(d.jsx)("img",{src:r,alt:"",width:"560"})]})]}):void 0}}]),a}(l.Component),L=E,D=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchName:""},e.handleSearchbar=function(t){e.setState({searchName:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this.state.searchName;return Object(d.jsxs)("div",{children:[Object(d.jsx)(u.a,{autoClose:3e3,theme:"colored"}),Object(d.jsx)(p,{onSubmit:this.handleSearchbar}),Object(d.jsx)(L,{searchName:e})]})}}]),a}(l.Component),A=D;n.a.render(Object(d.jsx)(A,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__jYfP_",ImageGalleryItem:"ImageGallery_ImageGalleryItem__2CgaV","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__3lHET",Button:"ImageGallery_Button__1W-TU",Loader:"ImageGallery_Loader__14ctb"}}},[[47,1,2]]]);
//# sourceMappingURL=main.87b734b7.chunk.js.map