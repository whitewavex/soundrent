$(document).ready(function(){$(".open-nav").click(function(){$(".page").toggleClass("nav-open"),$(".burger").toggleClass("open"),$(".page__wrap").toggleClass("open"),$(this).toggleClass("open")}),$(".slider").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:5e3,arrows:!1}),$(".slider-work__container").slick({dots:!0,arrows:!1,speed:1e3,slidesToShow:2,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]}),$(".slider-reviews").slick({dots:!0,arrows:!1,speeed:3e3,slidesToShow:2,vertical:!0}),$(".clients-slider").slick({slidesToShow:6,prevArrow:'<button type="button" class="clients-slider__arrow"></button>',nextArrow:'<button type="button" class="clients-slider__arrow clients-slider__arrow_next"></button>',responsive:[{breakpoint:1199,settings:{slidesToShow:5}},{breakpoint:1040,settings:{slidesToShow:4}},{breakpoint:860,settings:{slidesToShow:3}},{breakpoint:680,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1}}]}),$(".btn-up__link").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)}),$(".open-sidebar").click(function(e){e.preventDefault(),$(".overlay").fadeIn(300,function(){$(".sidebar-popup").css({display:"block"}).animate({opacity:1},300)})}),$(".sidebar-popup__close").click(function(){$(".sidebar-popup").animate({opacity:0},300,function(){$(".sidebar-popup").css({display:"none"}),$(".overlay").fadeOut(300)})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwidGhpcyIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiY3NzRWFzZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJzcGVlZWQiLCJ2ZXJ0aWNhbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjc3MiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBSWRGLEVBQUUsYUFBYUcsTUFBTSxXQUNqQkgsRUFBRSxTQUFTSSxZQUFZLFlBQ3ZCSixFQUFFLFdBQVdJLFlBQVksUUFDekJKLEVBQUUsZUFBZUksWUFBWSxRQUM3QkosRUFBRUssTUFBTUQsWUFBWSxVQUt4QkosRUFBRSxXQUFXTSxNQUFNLENBQ2ZDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxNQUFPLElBQ1BDLE1BQU0sRUFDTkMsUUFBUyxTQUNUQyxVQUFVLEVBQ1ZDLGNBQWUsSUFDZkMsUUFBUSxJQUtaZCxFQUFFLDJCQUEyQk0sTUFBTSxDQUMvQkMsTUFBTSxFQUNOTyxRQUFRLEVBQ1JMLE1BQU8sSUFDUE0sYUFBYyxFQUNkQyxXQUFZLENBQ1IsQ0FDSUMsV0FBWSxJQUNaQyxTQUFVLENBQ05ILGFBQWMsT0FROUJmLEVBQUUsbUJBQW1CTSxNQUFNLENBQ3ZCQyxNQUFNLEVBQ05PLFFBQVEsRUFDUkssT0FBUSxJQUNSSixhQUFjLEVBQ2RLLFVBQVUsSUFLZHBCLEVBQUUsbUJBQW1CTSxNQUFNLENBQ3ZCUyxhQUFjLEVBQ2RNLFVBQVcsZ0VBQ1hDLFVBQVcsMkZBQ0hOLFdBQVksQ0FDaEIsQ0FDSUMsV0FBWSxLQUNaQyxTQUFVLENBQ05ILGFBQWMsSUFHdEIsQ0FDSUUsV0FBWSxLQUNaQyxTQUFVLENBQ05ILGFBQWMsSUFHdEIsQ0FDSUUsV0FBWSxJQUNaQyxTQUFVLENBQ05ILGFBQWMsSUFHdEIsQ0FDSUUsV0FBWSxJQUNaQyxTQUFVLENBQ05ILGFBQWMsSUFHdEIsQ0FDSUUsV0FBWSxJQUNaQyxTQUFVLENBQ05ILGFBQWMsT0FTOUJmLEVBQUUsaUJBQWlCRyxNQUFNLFNBQVNvQixHQUM5QkEsRUFBRUMsaUJBRUZ4QixFQUFFLGNBQWN5QixRQUFRLENBQ3BCQyxVQUFXLEdBQ1osT0FNUDFCLEVBQUUsaUJBQWlCRyxNQUFNLFNBQVNvQixHQUM5QkEsRUFBRUMsaUJBQ0Z4QixFQUFFLFlBQVkyQixPQUFPLElBQUssV0FDdEIzQixFQUFFLGtCQUFrQjRCLElBQUksQ0FDcEJDLFFBQVcsVUFDWkosUUFBUSxDQUNQSyxRQUFXLEdBQ1osU0FNWDlCLEVBQUUseUJBQXlCRyxNQUFNLFdBQzdCSCxFQUFFLGtCQUFrQnlCLFFBQVEsQ0FDeEJLLFFBQVcsR0FDYixJQUFLLFdBQ0g5QixFQUFFLGtCQUFrQjRCLElBQUksQ0FBQ0MsUUFBVSxTQUNuQzdCLEVBQUUsWUFBWStCLFFBQVEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbi8vICAgIEJVUkdFUiBNRU5VXHJcbiAgICBcclxuICAgICQoJy5vcGVuLW5hdicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XHJcbiAgICAgICAgJCgnLmJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnLnBhZ2VfX3dyYXAnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbi8vICAgIFNMSUNLIFNMSURFUiBUSVRMRSAgIFxyXG4gICAgXHJcbiAgICAkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBcclxuLy8gICAgU0xJQ0sgU0xJREVSIFdPUktcclxuICAgIFxyXG4gICAgJCgnLnNsaWRlci13b3JrX19jb250YWluZXInKS5zbGljayh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIFxyXG4vLyAgICBSRVZJRVdTIFNMSURFUlxyXG4gICAgXHJcbiAgICAkKCcuc2xpZGVyLXJldmlld3MnKS5zbGljayh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVlZDogMzAwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgdmVydGljYWw6IHRydWVcclxuICAgIH0pO1xyXG4gICAgXHJcbi8vICAgIENMSUVOVFMgU0xJREVSXHJcbiAgICBcclxuICAgICQoJy5jbGllbnRzLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGllbnRzLXNsaWRlcl9fYXJyb3dcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xpZW50cy1zbGlkZXJfX2Fycm93IGNsaWVudHMtc2xpZGVyX19hcnJvd19uZXh0XCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwNDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA4NjAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzUsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuLy8gICAgU0NST0xMIFVQXHJcbiAgICBcclxuICAgICQoJy5idG4tdXBfX2xpbmsnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICB9KTtcclxuICAgIFxyXG4vLyAgICBPUEVOIFNJREVCQVItUE9QVVBcclxuICAgIFxyXG4gICAgJCgnLm9wZW4tc2lkZWJhcicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5mYWRlSW4oMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLnNpZGViYXItcG9wdXAnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snIFxyXG4gICAgICAgICAgICB9KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSBcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbi8vICAgIENMT1NFIFNJREVCQVItUE9QVVBcclxuICAgIFxyXG4gICAgJCgnLnNpZGViYXItcG9wdXBfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNpZGViYXItcG9wdXAnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ29wYWNpdHknOiAwXHJcbiAgICAgICAgfSwzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuc2lkZWJhci1wb3B1cCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgICAkKCcub3ZlcmxheScpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTsiXX0=
