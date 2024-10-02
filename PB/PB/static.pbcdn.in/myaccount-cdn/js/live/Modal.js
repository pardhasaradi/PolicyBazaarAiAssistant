function createCaptcha(e) {
    var t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#recaptcha-container"),
        n = (document.getElementById("recaptcha-container"), document.createElement("script")),
        a = "6Lfj2SQoAAAAADetFil9bieMNQLjHGzpitgmEK7_";
    n.src = "https://www.google.com/recaptcha/enterprise.js?render=" + a + ";render=explicit", document.head.appendChild(n), n.onload = function() {
        grecaptcha.enterprise.ready((function() {
            grecaptcha.enterprise.render(t[0], {
                sitekey: e && 91 !== parseInt(e) ? "6LdEaLIpAAAAAPHsi7KHIcFLoVsPN2MhnwyXD-G9" : a,
                action: "LOGIN"
            })
        }))
    }, reCAPTCHALoaded = !0
}

function getCapchaResponse() {
    grecaptcha.enterprise.getResponse()
}! function() {
    function e() {
        this.closeButton && this.closeButton.addEventListener("click", this.close.bind(this)), this.overlay && this.overlay.addEventListener("click", this.close.bind(this))
    }

    function t(e = null, t = null, n = null) {
        var a, s, o, i = '<div class="central-login-card" loginfrom="' + n + '"><div class="header">Verify OTP</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="popup-title-wrapper-not"><div class="text-wrapper"> <h6 class="info-content-title">Please enter 6 digit OTP <span class="line-breaker-u">sent on <span class="font-bold" id="sent-mobile" countryCode="' + e + '" mobileNumber="' + t + '">' + maskingAndhideMobileNumber.call(this, t) + '</span></span></h6></div> </div> </div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="number" name="" id="central-login-module-resendOtp-otp-id"> <label for="">Enter OTP</label> </div> </div> <span id="error-sentotp-in"></span> </div> <div class="otp-controls"> <p class="central-login-Receive-OTP">Didn&apos;t receive the OTP yet? <a href="javascript:void(0);" id="central-login-module-resendOtp" class="no-line-break">Resend OTP</a> <small id="central-login-timer" class="central-login-timer-small-tag"> </small> <span id="centarla-login-module-resentotp-message" class="centarla-login-module-resentotp-message-class"></span></p> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0);" class="cl-btn sr-btn-primary central-login-sign-in-with-otp-class" id="sentOTPnwithOTP"><span id="span-sign-in-varify-otp" >Confirm OTP</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a>  </div> <div class="otp-send-alert" id="central-login-resend-otp-message"> </div></div> </div>';
        "string" == typeof this.options.content ? a = this.options.content : (this.options.content.innerHTML = i, a = this.options.content.innerHTML), o = document.createDocumentFragment(), this.modal = document.createElement("div"), this.modal.className = "login-module-container " + this.options.className, this.options.closeButton, !0 === this.options.overlay && (this.overlay = document.createElement("div"), this.overlay.className = "login-module-backdrop " + this.options.className, o.appendChild(this.overlay)), (s = document.createElement("div")).className = "login-module-inner", s.id = "central-login-module-inner", s.innerHTML = a, this.modal.appendChild(s), o.appendChild(this.modal), document.body.appendChild(o), sendGaForOTPScreenShown()
    }

    function n(e = null) {
        removeGoogleToken();
        var t = "",
            n = "";
        e && "insurance" === e && (t = "", n = "");
        var a = getForGaRanFn(),
            s = "",
            o = "";
        a && 3 === parseInt(a) ? (gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_screen_shown",
            eventLabel: "shown_with_google_CTA",
            eventValue: ""
        }), s = '<div class="divider-or"><span class="left"></span><span class="text">or</span><span class="right"></span></div>', o = '<div id="google-signin-component"></div>') : gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_screen_shown",
            eventLabel: "shown_without_google_CTA",
            eventValue: ""
        });
        var i = "",
            r = new URL(window.location.href);
        !r || r.pathname && "/" !== r.pathname && "" !== r.pathname || !["www.policybazaar.com", "localhost", "pbqa.policybazaar.com"].includes(this.hostName) || (i = '<div id="central-login-whatsapp_block" class="whatsapp_block btn-control-block"><button" id="central-login-whatsapp-btn" onclick="" type="button" class="whatsapp_button"><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div><img src="https://static.pbcdn.in/myaccount-cdn/images/imagesv3/filled_whatsapp.svg" alt="whatsapp icon"><span>Sign in with WhatsApp</span> </button></div>');
        var l = '<div class="central-login-card google-sign-in-container" loginfrom="' + e + '"><div class="header">Sign-in to Policybazaar</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"><p class="info-content">For a more personalised experience, sign in with your registered mobile number </p></div> </div> <div class="central-login-card-body"> <div class="form-wrapper"><div class="input-block"> <div class="custom-dropdown-floating-placeholder" id="central-login-input-block-div-id"> <input class="custom-dropdown-list-trigger central-login-custom-dropdown-list-open" type="checkbox" id="custom-dropdown-list-open"> <div class="custom-dropdown-floating-placeholder-inner"> <input type="number" name="" id="central-login-module-sign-mobile" placeholder=" "> <label class="float-placeholder" for="">Mobile Number</label> <div class="custom-dropdown-country-icon-wrapper"> <ul> <li> <label for="custom-dropdown-list-open"> <div class="country-icon-wrapper"> <img id="centralLoginCountryIcon" src="https://static.pbcdn.in/myaccount-cdn/images/Content/countryIcon/in.svg" alt=""> </div> <div class="dropdown-arrow-icon central-login-custom-dropdown-list-open" id="central-login-drop-down-arrow"> <img class="central-login-custom-dropdown-list-open" src="https://static.pbcdn.in/myaccount-cdn/images/assets/dropdownIconBlack.svg" alt="arrow-down"> </div> </label> </li> <li> <div class="country-code-wrapper"> <p id="countryCodeP" countryCode="91">+91</p> </div> </li> </ul> </div> </div> <div class="custom-dropdown-list"><div class="dropdown-list-title"> <h6>Select country</h6> <img id="close-by-image-county-list" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> </div> <div class="search-bar"> <div class="floating-placeholder"> <input type="text" name="centralLoginSearchCountryCode" id="centralLoginSearchCountryCode" placeholder=" "> <label for="centralLoginSearchCountryCode">Search</label> <img src="https://static.pbcdn.in/myaccount-cdn/images/Search.svg" alt=""> </div> </div> <div class="dropdown-list"> <ul id="central-login-country-list"> </ul> </div> </div> </div><span id="error-sign-in"></span> </div> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0)" class="cl-btn sr-btn-primary central-login-sign-in-with-otp-calss customBtn-otp" id="central-login-sign-in-with-otp"><span class="central-login-sign-in-with-otp-span-class ">Sign in with OTP</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> ' + t + s + "</div> " + i + o + ' <span id="error-google-sign-in"></span>' + n + " </div> </div>";
        "string" == typeof this.options.content ? content = this.options.content : (this.options.content.innerHTML = l, content = this.options.content.innerHTML), docFrag = document.createDocumentFragment(), this.modal = document.createElement("div"), this.modal.className = "login-module-container " + this.options.className, this.options.closeButton, !0 === this.options.overlay && (this.overlay = document.createElement("div"), this.overlay.className = "login-module-backdrop " + this.options.className, docFrag.appendChild(this.overlay)), contentHolder = document.createElement("div"), contentHolder.className = "login-module-inner", contentHolder.id = "central-login-module-inner", contentHolder.innerHTML = content, this.modal.appendChild(contentHolder), docFrag.appendChild(this.modal), document.body.appendChild(docFrag), !window || window.google && void 0 !== window.google || onWindowLoadFunction("G_API_LOAD"), loadGoogleSignInScript()
    }

    function a(e = null, t) {
        this.modal.children[0].children[0].innerHTML = s(e, t), loadGoogleSignInScript()
    }

    function s(e, t) {
        return '<div class="central-login-card" loginfrom="' + e + '">  <div class="header">Secure your account</div><div class="central-login-card-header">  <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""><div class="central-login-card-header-block"><h6 class="info-content-title">Link email ID with mobile number</h6><p class="info-content">To link email ID with your account, please confirm your mobile number</p></div> </div>  <div class="central-login-card-body"> <div class="form-wrapper"><div class="input-block"><div class="disabled-email-field"><span class="email-text">' + t.email + '</span><img alt="lock icon" src="https://static.pbcdn.in/myaccount-cdn/images/assets/lock_sharp.svg"></div></div><div class="input-block"> <div class="custom-dropdown-floating-placeholder" id="central-login-input-block-div-id"> <input class="custom-dropdown-list-trigger central-login-custom-dropdown-list-open" type="checkbox" id="custom-dropdown-list-open"> <div class="custom-dropdown-floating-placeholder-inner"> <input type="number" name="" id="central-login-module-sign-mobile" placeholder=" "> <label class="float-placeholder" for="">Mobile Number</label> <div class="custom-dropdown-country-icon-wrapper"> <ul> <li> <label for="custom-dropdown-list-open"> <div class="country-icon-wrapper"> <img id="centralLoginCountryIcon" src="https://static.pbcdn.in/myaccount-cdn/images/Content/countryIcon/in.svg" alt=""> </div> <div class="dropdown-arrow-icon central-login-custom-dropdown-list-open" id="central-login-drop-down-arrow"> <img class="central-login-custom-dropdown-list-open" src="https://static.pbcdn.in/myaccount-cdn/images/arrow-down.svg" alt="arrow-down"> </div> </label> </li> <li> <div class="country-code-wrapper"> <p id="countryCodeP" countryCode="91">+91</p> </div> </li> </ul> </div> </div> <div class="custom-dropdown-list"><div class="dropdown-list-title"> <h6>Select country</h6> <img id="close-by-image-county-list" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> </div> <div class="search-bar"> <div class="floating-placeholder"> <input type="text" name="centralLoginSearchCountryCode" id="centralLoginSearchCountryCode" placeholder=" "> <label for="centralLoginSearchCountryCode">Search</label> <img src="https://static.pbcdn.in/myaccount-cdn/images/Search.svg" alt=""> </div> </div> <div class="dropdown-list"> <ul id="central-login-country-list"> </ul> </div> </div> </div><span id="error-sign-in"></span> </div> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0)" class="cl-btn sr-btn-primary central-login-gsign-otp-calss" id="central-login-gsign-otp"><span class="central-login-gsign-otp" id="central-login-gsign-otp-span">Send OTP</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> </div> </div> </div></div>'
    }

    function o(e = null, t) {
        var n, a, o, i = s(e, t);
        "string" == typeof this.options.content ? n = this.options.content : (this.options.content.innerHTML = i, n = this.options.content.innerHTML), o = document.createDocumentFragment(), this.modal = document.createElement("div"), this.modal.className = "login-module-container " + this.options.className, this.options.closeButton, !0 === this.options.overlay && (this.overlay = document.createElement("div"), this.overlay.className = "login-module-backdrop " + this.options.className, o.appendChild(this.overlay)), (a = document.createElement("div")).className = "login-module-inner", a.id = "central-login-module-inner", a.innerHTML = n, this.modal.appendChild(a), o.appendChild(this.modal), document.body.appendChild(o), loadGoogleSignInScript(), gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: getPromptType(),
            eventLabel: "phone_no_shown",
            eventValue: ""
        })
    }
    this.Modal = function() {
        this.closeButton = null, this.modal = null, this.overlay = null, this.timerInterval, this.hideResendTimer, this.showResendTimer, this.hostName = window && window.location && window.location.hostname;
        arguments[0] && "object" == typeof arguments[0] && (this.options = function(e, t) {
            var n;
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }({
            autoOpen: !1,
            className: "fade-and-drop",
            closeButton: !0,
            content: "",
            overlay: !0
        }, arguments[0])), !0 === this.options.autoOpen && this.open()
    }, Modal.prototype.close5 = function() {
        try {
            var e = this;
            e.modal.parentNode.removeChild(e.modal), e.overlay.parentNode && e.overlay.parentNode.removeChild(e.overlay)
        } catch (e) {
            console.log("")
        }
    }, Modal.prototype.close = function() {
        var e = this;
        this.modal.className = this.modal.className.replace(" login-module-container", ""), this.overlay.className = this.overlay.className.replace(" login-module-container", ""), this.modal.addEventListener(this.transitionEnd, (function() {
            e.modal.parentNode.removeChild(e.modal)
        })), this.overlay.addEventListener(this.transitionEnd, (function() {
            e.overlay.parentNode && e.overlay.parentNode.removeChild(e.overlay)
        }))
    }, Modal.prototype.close2 = function() {
        var e = this;
        document.getElementById("central-login-module-content") && document.getElementById("central-login-module-content").setAttribute("ismobilefromcookies", !1), this.modal.className = this.modal.className.replace("login-module-container", ""), this.overlay.className = this.overlay.className.replace("login-module-container", ""), e.modal.parentNode.removeChild(e.modal), e.overlay.parentNode && e.overlay.parentNode.removeChild(e.overlay)
    }, this.Modal.prototype.resetPasswordHtml = function() {
        this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom=""><div class="header">Reset your password</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="popup-title-wrapper-not"> <div class="text-wrapper"> <h6 class="info-content-title">Reset password for your <span class="line-breaker">account</span></h6> </div> </div> </div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder password-hide"> <input type="password" name="" id="" placeholder=" "> <label for="">Enter Password</label>  <img class="pass-hide" src="https://static.pbcdn.in/myaccount-cdn/images/eye-slash-icon.svg" alt=""> </div> </div> </div> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="password" name="" id="" placeholder=" "> <label for="">Confirm Password</label> <img class="pass-hide" src="https://static.pbcdn.in/myaccount-cdn/images/eye-slash-icon.svg" alt=""> </div> </div> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0)" class="cl-btn sr-btn-primary central-login-save-password"><span class="central-login-save-password">Save password</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> </div> </div> </div>', gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_via_password",
            eventLabel: "reset_password_screen_shown"
        })
    }, this.Modal.prototype.verifyOTPHtml = function(e, t, n = null) {
        var a = maskingAndhideMobileNumber.call(this, e),
            s = "",
            o = "";
        n && "insurance" === n && (s = "", o = ""), this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom="' + n + '"> <div class="header">Verify OTP</div><div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="popup-title-wrapper-not">  <div class="text-wrapper"> <h6 class="info-content-title">Please enter 6 digit OTP <span class="line-breaker">sent on <span class="font-bold" id="sent-mobile" countryCode="' + t + '" mobileNumber="' + e + '">' + a + '</span></span></h6> <a href="javascript:void(0);" id="change_mobile_number" popupName="verifyOTPHtml">Change mobile number</a> </div> </div> </div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="number" name="" id="central-login-module-resendOtp-otp-id"> <label for="">Enter OTP</label> </div> </div> <span id="error-sentotp-in"></span> </div> <div class="otp-controls"> <p class="central-login-Receive-OTP">Didn&apos;t receive the OTP yet? <a href="javascript:void(0);" id="central-login-module-resendOtp" class="no-line-break">Resend OTP</a> <small id="central-login-timer" class="central-login-timer-small-tag"> </small> <span id="centarla-login-module-resentotp-message" class="centarla-login-module-resentotp-message-class"></span></p> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0);" class="cl-btn sr-btn-primary central-login-sign-in-with-otp-class" id="sentOTPnwithOTP"><span id="span-sign-in-varify-otp" >Confirm OTP</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> ' + o + " </div>" + s + ' <div class="otp-send-alert" id="central-login-resend-otp-message"> </div></div> </div>', sendGaForOTPScreenShown()
    }, this.Modal.prototype.HtmlCaptchaForNewUser = function(e, t, n = null, a = null) {
        var s = maskingAndhideMobileNumber.call(this, e);
        var o = localStorage.getItem("centralGSigntoken");
        o && "" != o && o.select_by && ["user", "fedcm"].includes(o.select_by ? .toLowerCase()) && gaFuncations("login_with_google_prompt", "recaptcha_screen", "shown"), o && "" != o && o.select_by && "btn" === o.select_by ? gaFuncations("login_with_google", "recaptcha_screen", "shown") : gaFuncations("login_via_OTP", "recaptcha_screen", "shown"), this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom="' + n + '"><div class="header">Almost there!</div><div class="central-login-card-header"><img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""><div class="central-login-card-header-block"><div class="popup-title-wrapper-not"><div class="text-wrapper"><h6 class="info-content-title">Please help us verify your number. <span style="display: none;" userType="' + a + '" class="font-bold" id="sent-mobile" countryCode="' + t + '" mobileNumber="' + e + '">' + s + '</span></h6><p class="bold"><a href="javascript:void(0);" id="change_mobile_number" popupName="HtmlCaptchaForNewUser">Change mobile number</a></p></div></div></div></div><div class="central-login-card-body"><div class="form-wrapper"><div class="input-block d-flex-center"><div class="captchaWrapper" <div class="g-recaptcha"><div id="recaptcha-container"></div></div> </div></div><div class="otp-controls"><span id="error-sentotp-in"></span></div><span id="error-sign-in"></span></div><div class="central-login-card-footer"><div class="btn-control-block"><a href="javascript:void(0);" class="cl-btn sr-btn-primary central-login-sign-in-with-otp-class" id="sendOtpWithCapcha"><span id="span-sign-with-recaptcha">Continue</span><div class="loader-dots"><ol><li></li><li></li><li></li><li></li></ol></div></a></div></div></div>', createCaptcha(t)
    }, this.Modal.prototype.loginWithPasswordHTML = function(e, t, n = null) {
        var a = maskingAndhideMobileNumber.call(this, e);
        this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom="' + n + '"><div class="header">Sign-in with Password</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="popup-title-wrapper-not"> <div class="img-wrapper"> </div> <div class="text-wrapper"> <h6 class="info-content-title">Please enter your password <span class="">for <span class="font-bold" id="sent-mobile" countryCode="' + t + '" mobileNumber="' + e + '">' + a + '</span></span></h6> <a href="javascript:void(0);" id="change_mobile_number" popupName="loginWithPasswordHTML">Change mobile number</a> </div> </div> </div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="password" name="password" id="central-login-password" placeholder=" "> <label for="">Password</label> <img id="central-login-password-eye" textId="central-login-password" class="pass-hide" src="https://static.pbcdn.in/myaccount-cdn/images/eye-slash-icon.svg" alt=""></div> </div> <span id="error-sentotp-in"> </div> <div class="otp-controls"> <a href="javascript:void(0);" class="fwd-link " id="central-login-forgot-password"> <span id="central-login-forgot-password-span">Forgot password?</span> <div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div> </a> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0);" class="cl-btn sr-btn-primary" id="login-in-with-password"><span id="login-in-with-password-span">Sign in</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> <a href="javascript:void(0);" class="cl-btn sr-btn-primary-outline" id="central-login-sign-in-with-loginwithpassword"><span id="central-login-sign-in-with-loginwithpassword-span">Sign in with OTP</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> </div> </div><div class="login-module-container_info_block"><img src="https://static.pbcdn.in/myaccount-cdn/images/assets/bell_ring_orange.svg" alt="bell icon"><p>Password login will be discontinued on<strong>&nbsp;15&nbsp;May&comma;&nbsp;2024</strong> as we&#39;re upgrading your account security. To login securely, please sign in via OTP or Google.</p></div></div>', gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_via_password",
            eventLabel: "password_screen_shown"
        })
    }, this.Modal.prototype.successHtml = function(e) {
        this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom=""> <div class="central-login-card-header"></div> <div class="central-login-card-body"> <div class="success-screen"> <img src="https://static.pbcdn.in/myaccount-cdn/images/success.png" alt=""> <h5>Your account has been created <br> successfully</h5> <a href="javascript:void(0);" class="cl-btn sr-btn-primary">Continue with car insurance</a> <a href="javascript:void(0);" class="cl-btn no-border">Complete your profile</a> </div> </div> </div>'
    }, this.Modal.prototype.successHtmlOTPVarifications = function(e = null, t = null, n = null) {
        e && "forgotPwd" === e ? (gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_via_password",
            eventLabel: "reset_success_page_shown"
        }), this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom=""> <div class="central-login-card-header"></div> <div class="central-login-card-body mb-35"> <div class="success-screen"> <img src="https://static.pbcdn.in/myaccount-cdn/images/success.png" alt=""> <h5>Password for your account has been<br> reset successfully</h5><a href="javascript:void(0);" class="cl-btn sr-btn-primary" id="central-login-signin-link" mobileNumber="' + t + '" countryCode="' + n + '">Sign In</div> </div> </div>') : e && "Set" === e ? this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom=""> <div class="central-login-card-header"></div> <div class="central-login-card-body"> <div class="success-screen"> <img src="https://static.pbcdn.in/myaccount-cdn/images/success.png" alt=""> <h5>Your account has been created <br> successfully</h5> </div> </div> </div>' : successAlert()
    }, this.Modal.prototype.loginWithOTPVerifyHTML = function(e, t, n = null, a = null, s = !1) {
        var o = "reset",
            i = "change_mobile_number";
        n && "signUpFlow" === n && (i = "central-loin-resendSignUp");
        var r = "",
            l = maskingAndhideMobileNumber.call(this, e),
            c = ' <h6 class="info-content-title">Please enter 6 digit OTP <span class="">sent on <span class="font-bold" id="sent-mobile" countryCode="' + t + '"  mobileNumber="' + e + '">' + l + "</span></span></h6>";
        n && "newUser" === n && (s || (r = '<h6 class="new_user_span info-content-title">Seems you are not registered yet.</h6>'), c = ' <h6 class="info-content-title">Please enter the OTP you&apos;ve received on <span class="font-bold" id="sent-mobile" countryCode="' + t + '" mobileNumber="' + e + '">' + l + "</span></h6>"), n && "forgotPwd" === n && (c = ' <h6 class="info-content-title">Forgot password? Enter <span class="">OTP sent on <span class="font-bold" id="sent-mobile" countryCode="' + t + '" mobileNumber="' + e + '">' + l + "</span></span></h6>", o = "forgotPwd"), this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom="' + a + '"><div class="header">Verify OTP</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> ' + r + ' <div class="popup-title-wrapper-not"><div class="text-wrapper"> ' + c + ' <a href="javascript:void(0);" id="' + i + '"   popupName="loginWithOTPVerifyHTML">Change mobile number</a> </div> </div> </div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="text" name="" id="central-login-otp-newuser"> <label for="">Enter OTP</label> </div> </div><span id="error-sentotp-in"></span> </div> <div class="otp-controls"> <p class="central-login-Receive-OTP">Didn&apos;t receive the OTP yet? <a href="javascript:void(0);" id="central-login-module-resendOtp" buttonId="verify-mobile-number-login-otp-button" class="no-line-break">Resend OTP</a> <small id="central-login-timer" class="central-login-timer-small-tag"> </small> <span id="centarla-login-module-resentotp-message" class="centarla-login-module-resentotp-message-class"></span></p> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0);" class="cl-btn sr-btn-primary verify-mobile-number-login-otp"  id="verify-mobile-number-login-otp-button" formName="' + o + '"><span class="verify-mobile-number-login-otp">Verify mobile number</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> </div> <div class="otp-send-alert" id="central-login-resend-otp-message"> </div></div> </div>', disbaleButton("central-login-module-resendOtp"), sendGaForOTPScreenShown(n)
    }, this.Modal.prototype.setPasswordHTML = function(e, t, n, a) {
        var s = "Set";
        n && "forgotPwd" === n && (s = "Reset", gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_via_password",
            eventLabel: "reset_password_screen_shown"
        })), this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom=""><div class="header">Reset your password</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="popup-title-wrapper-not"> <div class="text-wrapper"> <h6 class="info-content-title">' + s + ' password for your <span class="line-breaker" id="central-login-create-pwd" countryCode="' + e + '" mobileNumber="' + t + '" otp="' + a + '">account</span></h6> </div> </div> </div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="password" name="password" id="central-login-pwd" placeholder=" "> <label for="">Enter password</label><img id="centarl-login-pwd-eye"  textId="central-login-pwd" class="pass-hide" src="https://static.pbcdn.in/myaccount-cdn/images/eye-slash-icon.svg" alt=""> </div> </div> </div> <div class="form-wrapper"> <div class="input-block"> <div class="floating-placeholder"> <input type="password" name="confirm-pwd" id="central-login-pwd-confirm"  placeholder=" "> <label for="connfirm-pwd">Confirm password</label> <img id="centarl-login-pwd-confirm-eye" textId="central-login-pwd-confirm" class="pass-hide" src="https://static.pbcdn.in/myaccount-cdn/images/eye-slash-icon.svg" alt=""> </div> </div><span id="error-sentotp-in"></span> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0)" class="cl-btn sr-btn-primary central-login-save-pwd" formName="' + n + '" id="save_set_pwd"><span class="central-login-save-pwd">Save password</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> </div> </div><div class="login-module-container_info_block"><img src="https://static.pbcdn.in/myaccount-cdn/images/assets/bell_ring_orange.svg" alt="bell icon"><p>Password login will be discontinued on<strong>&nbsp;15&nbsp;May&comma;&nbsp;2024</strong> as we&#39;re upgrading your account security. To login securely, please sign in via OTP or Google.</p></div>  </div>'
    }, this.Modal.prototype.signUpFlow = function() {
        custom,
        dropdown,
        floating,
        placeholder,
        inner
    }, this.Modal.prototype.signInFlow = function(e = null) {
        var t = "",
            n = "";
        e && "insurance" === e && (t = "", n = "");
        var a = getForGaRanFn(),
            s = "",
            o = "";
        a && 3 === parseInt(a) ? (s = '<div class="divider-or"><span class="left"></span><span class="text">or</span><span class="right"></span></div>', o = '<div id="google-signin-component"></div>', gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_screen_shown",
            eventLabel: "shown_with_google_CTA",
            eventValue: ""
        })) : gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_screen_shown",
            eventLabel: "shown_without_google_CTA",
            eventValue: ""
        });
        var i = "",
            r = new URL(window.location.href);
        !r || r.pathname && "/" !== r.pathname && "" !== r.pathname || !["www.policybazaar.com", "localhost", "pbqa.policybazaar.com"].includes(this.hostName) || (i = '<div id="central-login-whatsapp_block" class="whatsapp_block btn-control-block"><button" id="central-login-whatsapp-btn" onclick="" type="button" class="whatsapp_button"><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div><img src="https://static.pbcdn.in/myaccount-cdn/images/imagesv3/filled_whatsapp.svg" alt="whatsapp icon"><span>Sign in with WhatsApp</span> </button></div>'), this.modal.children[0].children[0].innerHTML = '<div class="central-login-card" loginfrom=""><div class="header">Sign-in to Policybazaar</div> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <p class="info-content">For a more personalised experience, sign in with your registered mobile number </p></div> </div> <div class="central-login-card-body"> <div class="form-wrapper"> <div class="input-block"> <div class="custom-dropdown-floating-placeholder"> <input class="custom-dropdown-list-trigger central-login-custom-dropdown-list-open" type="checkbox" id="custom-dropdown-list-open"> <div class="custom-dropdown-floating-placeholder-inner"> <input type="number" name="" id="central-login-module-sign-mobile" placeholder=" "> <label class="float-placeholder" for="">Mobile Number</label><div class="custom-dropdown-country-icon-wrapper"> <ul> <li> <label for="custom-dropdown-list-open"> <div class="country-icon-wrapper"> <img id="centralLoginCountryIcon" src="https://static.pbcdn.in/myaccount-cdn/images/Content/countryIcon/in.svg" alt=""> </div> <div class="dropdown-arrow-icon central-login-custom-dropdown-list-open" id="central-login-drop-down-arrow"> <img class="central-login-custom-dropdown-list-open" src="https://static.pbcdn.in/myaccount-cdn/images/arrow-down.svg" alt="arrow-down"> </div> </label> </li> <li> <div class="country-code-wrapper"> <p id="countryCodeP" countryCode="91">+91</p> </div> </li> </ul> </div> </div> <div class="custom-dropdown-list"><div class="dropdown-list-title"> <h6>Select country</h6> <img id="close-by-image-county-list" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> </div> <div class="search-bar"> <div class="floating-placeholder"> <input type="text" name="centralLoginSearchCountryCode" id="centralLoginSearchCountryCode" placeholder=" "> <label for="centralLoginSearchCountryCode">Search</label> <img src="https://static.pbcdn.in/myaccount-cdn/images/Search.svg" alt=""> </div> </div> <div class="dropdown-list"> <ul id="central-login-country-list"> </ul> </div> </div> </div> <span id="error-sign-in"></span> </div> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block"> <a href="javascript:void(0)" class="cl-btn sr-btn-primary central-login-sign-in-with-otp-calss customBtn-otp" id="central-login-sign-in-with-otp"><span class="central-login-sign-in-with-otp-span-class">Sign in with OTP</span><div class="loader-dots"> <ol> <li></li> <li></li> <li></li> <li></li> </ol> </div></a> ' + t + s + "</div> " + i + o + "</div>" + n + " </div> </div>", loadGoogleSignInScript()
    }, Modal.prototype.OpenVerifyOtpFlow = function(e = null) {
        myModal.close5(), sendOtpForPrefieldData.call(this, e)
    }, Modal.prototype.open12 = function(t = null) {
        myModal.close5(), n.call(this, t), e.call(this), window.getComputedStyle(this.modal).height, this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? "login-module-container" : " login-module-container"), prefeildDataForCountryCode.call(this)
    }, Modal.prototype.openSendOtpScreen = function(n = null, a = null, s = null) {
        myModal.close5(), t.call(this, n, a, s), e.call(this), window.getComputedStyle(this.modal).height, this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? "login-module-container" : " login-module-container")
    }, Modal.prototype.open = function(t = null) {
        myModal.close5(), n.call(this, t), e.call(this), window.getComputedStyle(this.modal).height, this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? "login-module-container" : " login-module-container"), prefeildDataForCountryCode.call(this)
    }, Modal.prototype.LinkMobileNumberWithEmail = function(t = null) {
        var n = getLoginFrom.call(this),
            s = null,
            i = getGoogleToken();
        i && "" !== i && (s = decodeJWT(i)), s && s.email && t && "authenticateGmail" === t ? (o.call(this, n, s), e.call(this), window.getComputedStyle(this.modal).height, this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? "login-module-container" : " login-module-container"), prefeildDataForCountryCode.call(this)) : s && s.email ? (gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_with_google_prompt",
            eventLabel: "phone_no_shown",
            eventValue: ""
        }), a.call(this, n, s), e.call(this), window.getComputedStyle(this.modal).height, this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? "login-module-container" : " login-module-container"), prefeildDataForCountryCode.call(this)) : myModal.open12(null)
    }, Modal.prototype.successHtmlOTPVarificationsWithModal = function() {
        successAlert()
    }
}();
var sendEventAfterGALoaded = function(e) {
    ! function(e, t, n, a, s, o, i) {
        e.GoogleAnalyticsObject = s, e[s] = e[s] || function() {
            (e[s].q = e[s].q || []).push(arguments)
        }, e[s].l = 1 * new Date, o = t.createElement(n), i = t.getElementsByTagName(n)[0], o.async = 1, o.src = "https://www.google-analytics.com/analytics.js", i.parentNode.insertBefore(o, i)
    }(window, document, "script", 0, "ga"), ga("create", "UA-136507308-1", "auto"), ga("send", e.eventName, e.eventCategoryName, e.eventActionName, e.eventLabel, {
        customerId: e.custId && "" !== e.custId ? e.custId : "",
        journeyType: e.journeyType && "" !== e.journeyType ? e.journeyType : "",
        operatorType: e.operatorType && "" !== e.operatorType ? e.operatorType : ""
    })
};

function gaFuncations(e) {
    void 0 !== window.gaLoginWidgitFn ? sendGAEvent(e) : loadGA()
}

function sendGAEvent(e) {
    const t = {
        event: "eventTracking",
        eventCategory: e.eventCategoryName,
        eventAction: e.eventActionName,
        eventLabel: e.eventLabel,
        eventValue: null,
        pId: 0 == e.productId ? "" : e.productId,
        leadId: 0 == e.leadid ? "" : e.leadid,
        customerId: e && e.customerId ? e.customerId : null,
        pageName: "MyAccount_LoginWidget",
        serviceType: void 0 === e.serviceType ? "" : e.serviceType,
        communicationPreference: void 0 === e.communicationPreference ? "" : e.communicationPreference,
        paramType1: e.eventValue ? "tap_type" : e.paramType1 ? e.paramType1 : "",
        paramValue1: e.eventValue ? e.eventValue : e.paramValue1 ? e.paramValue1 : null,
        paramType2: "poup_type",
        paramValue2: getForGaRanFn(),
        paramType3: e.paramType3 ? e.paramType3 : null,
        paramValue3: e.paramValue3 ? e.paramValue3 : null,
        paramType4: e.paramType4 ? e.paramType4 : null,
        paramValue4: e.paramValue4 ? e.paramValue4 : null,
        paramType5: e.paramType5 ? e.paramType5 : null,
        paramValue5: e.paramValue5 ? e.paramValue5 : null
    };
    window.gaLoginWidgitFn(t)
}
var GTMID = "GTM-PW5K",
    hostURL = "https://myaccount.policybazaar.com/myacc",
    apiName = {
        sendOtp: "/login/sendOtpV3",
        validateOtp: "/login/verifyOtpV2",
        userLogin: "/login/userLogin",
        setPassword: "/login/setPassword",
        getMobileNoByCookies: "/login/getMobileNoByCookies",
        customerRegistration: "/login/customerRegistration",
        getCountry: "/master/getCountry",
        gtn: "/login/generateToken",
        reg: "/login/continue",
        authenticateGmail: "/login/authenticate"
    },
    SMS_TYPE = 1,
    myContent = document.getElementById("central-login-module-content"),
    myModal = new Modal({
        content: myContent
    }),
    st = {
        a: "YG5BJOcSk7YmyujMNsOZnuwh7tb0s",
        c: "AEOTL"
    };
document.addEventListener("keyup", (function(e) {
    "Enter" === e.code ? (e.preventDefault(), listenerFunction(e)) : keyUpAndPaste(e)
}), !1), document.addEventListener("paste", (function(e) {
    keyUpAndPaste(e)
}), !1);
var triggerSubmitButton = document.getElementById("btn-sign-in-submit"),
    listenerFunction = function(e) {
        if ((e.target.matches ? e.target.matches("#login_widget_cross_tost_container") : e.target.msMatchesSelector("#login_widget_cross_tost_container")) && removeTostContainer(), e.target.matches ? e.target.matches("#central-login-module-trigger") : e.target.msMatchesSelector("#central-login-module-trigger")) {
            var t = getLoginFrom.call(this);
            myModal.close5(this), t && "insurance" === t ? myModal.OpenVerifyOtpFlow(t) : myModal.open(t)
        }(e.target.matches ? e.target.matches("#close-by-image") : e.target.msMatchesSelector("#close-by-image")) && (myModal.close2(), gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_screen_tap",
            eventLabel: "widget-closed"
        }));
        var n = e.target.matches ? e.target.matches(".central-login-custom-dropdown-list-open") : e.target.msMatchesSelector(".central-login-custom-dropdown-list-open");
        n && (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#custom-dropdown-list-open")[0].checked = !0);
        (e.target.matches ? e.target.matches("#close-by-image-county-list") : e.target.msMatchesSelector("#close-by-image-county-list")) && (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#custom-dropdown-list-open")[0].checked = !1);
        e.target.matches ? e.target.matches(".central-login-custom-dropdown-list-open") : e.target.msMatchesSelector(".central-login-custom-dropdown-list-open");
        n && (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#custom-dropdown-list-open")[0].checked = !0);
        var a = e.target.matches ? e.target.matches(".country-drop-down-list-container") : e.target.msMatchesSelector(".country-drop-down-list-container"),
            s = e.target.getAttribute("countryCode"),
            o = e.target.getAttribute("CountryIcon");
        if (a && s && "" !== s) {
            document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#custom-dropdown-list-open")[0].checked = !1;
            var i = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#countryCodeP"),
                r = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#centralLoginCountryIcon");
            i[0].innerHTML = "+" + s, i[0].setAttribute("countryCode", s), r[0].src = o
        }
        var l = e.target.matches ? e.target.matches(".central-login-signUp-proceed-class") : e.target.msMatchesSelector(".central-login-signUp-proceed-class"),
            c = e.target.matches ? e.target.matches(".central-login-sign-in-with-otp-calss") : e.target.msMatchesSelector(".central-login-sign-in-with-otp-calss"),
            d = e.target.matches ? e.target.matches(".central-login-sign-in-with-otp-span-class") : e.target.msMatchesSelector(".central-login-sign-in-with-otp-span-class"),
            g = e.target.matches ? e.target.matches(".central-login-sign-in-with-password-calss") : e.target.msMatchesSelector(".central-login-sign-in-with-password-calss"),
            m = e.target.matches ? e.target.matches("#central-login-sign-in-with-password-span") : e.target.msMatchesSelector("#central-login-sign-in-with-password-span"),
            u = e.target.matches ? e.target.matches("#central-login-sign-in-with-loginwithpassword-span") : e.target.msMatchesSelector("#central-login-sign-in-with-loginwithpassword-span"),
            p = e.target.matches ? e.target.matches("#central-login-sign-in-with-loginwithpassword") : e.target.msMatchesSelector("#central-login-sign-in-with-loginwithpassword"),
            h = e.target.matches ? e.target.matches("#verify-otp-sign-with-pass") : e.target.msMatchesSelector("#verify-otp-sign-with-pass"),
            y = e.target.matches ? e.target.matches("#central-login-sign-in-with-password") : e.target.msMatchesSelector("#central-login-sign-in-with-password"),
            v = e.target.matches ? e.target.matches("#central-login-gsign-otp") : e.target.msMatchesSelector("#central-login-gsign-otp"),
            b = e.target.matches ? e.target.matches("#central-login-gsign-otp-span") : e.target.msMatchesSelector("#central-login-gsign-otp-span");
        if (l || c || d || g || m || y || h || p || u || v || b) {
            (c || d) && gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_screen_tap",
                eventLabel: "login_with_otp"
            }), (g || m) && gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_screen_tap",
                eventLabel: "login_with_password"
            }), (v || b) && gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: getPromptType(),
                eventLabel: "phone_no_tap"
            }), (u || p) && gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_via_password",
                eventLabel: "login_with_otp"
            });
            t = getLoginFrom.call(this);
            var w = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sign-in"),
                C = (s = "", i = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#countryCodeP"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#loader_image"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-sign-in-with-otp"));
            (y || h) && (C = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-sign-in-with-password")), (g || m) && (C = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-loggin-with-pwd")), (p || u) && (C = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-sign-in-with-loginwithpassword")), l && (C = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-signUp-proceed-id"), "signUpFlow"), (c || d || m || g) && "newUser", (v || b) && (C = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-gsign-otp"), "signUpFlow");
            var f = document.getElementById("central-login-module-sign-mobile") ? .value;
            if (y || h || p || u) {
                var M = document.getElementById("sent-mobile");
                f = M.getAttribute("mobileNumber"), s = M.getAttribute("countrycode")
            } else s = i[0].getAttribute("countrycode");
            if (s && "" !== s && 91 === parseInt(s) && (!f || "" === f || f.length < 10)) return f && f.length < 10 ? w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Must be 10 characters or more' : w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> This field cannot be left blank', !1;
            if (s && "" !== s && 91 !== parseInt(s) && (!f || "" === f || f.length < 6)) return f && f.length < 6 ? w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Must be 6 characters or more' : w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> This field cannot be left blank', !1;
            if (c || d || b || v || (p || u) && s && 91 !== parseInt(s)) sendOtpForFirstScreen(f, s, {}, C, t, w, "loginwithotp");
            else {
                var N = new XMLHttpRequest,
                    S = {};
                S.CountryCode = s, S.Mobile = f, N.onreadystatechange = function() {
                    if (1 == this.readyState && C[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                        C[0].classList.remove("show-loader");
                        var e = JSON.parse(this.response);
                        e && e.statusMsg && "success" === e.statusMsg.toLowerCase() && e.statusCode && 10 === parseInt(e.statusCode) ? t && "insurance" === t || e && e.result && 1 !== parseInt(e.result) && 2 !== parseInt(e.result) || e && e.result && (1 === parseInt(e.result) || 2 === parseInt(e.result)) && (c || d || p || u || l) ? sendOtpForFirstScreen(f, s, e, C, t, w, "") : e && e.result && 1 === parseInt(e.result) && (g || m || y || h) ? myModal.loginWithPasswordHTML(f, s, t) : e && e.result && 2 === parseInt(e.result) && (g || m || y || h) && myModal.HtmlCaptchaForNewUser(f, s, t, 2) : e && e.statusMsg && "success" !== e.statusMsg.toLowerCase() && e.statusCode && 1 != parseInt(e.statusCode) ? w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />' + e.statusMsg : w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again'
                    } else 4 == this.readyState && 200 != this.status && (C[0].classList.remove("show-loader"), w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
                }, N.open("POST", hostURL + apiName.customerRegistration, !0), N.setRequestHeader("Content-Type", "application/json"), N.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), N.setRequestHeader("x-Ismobile", !isDekstopFn()), N.withCredentials = !0, N.send(JSON.stringify(S))
            }
        }(e.target.matches ? e.target.matches(".central-login-sign-up-class") : e.target.msMatchesSelector(".central-login-sign-up-class")) && (prefeildDataForCountryCode.call(this), myModal.signUpFlow(), document.getElementById("central-login-module-sign-mobile").value = ""), (e.target.matches ? e.target.matches(".central-login-sign-class") : e.target.msMatchesSelector(".central-login-sign-class")) && (prefeildDataForCountryCode.call(this), myModal.signInFlow(), document.getElementById("central-login-module-sign-mobile").value = "");
        var T = e.target.matches ? e.target.matches(".verify-mobile-number-login-otp") : e.target.msMatchesSelector(".verify-mobile-number-login-otp"),
            _ = e.target.matches ? e.target.matches("#central-login-otp-newuser") : e.target.msMatchesSelector("#central-login-otp-newuser"),
            L = e.target.matches ? e.target.matches("#central-login-module-resendOtp-otp-id") : e.target.msMatchesSelector("#central-login-module-resendOtp-otp-id"),
            A = e.target.matches ? e.target.matches("#span-sign-in-varify-otp") : e.target.msMatchesSelector("#btn-sign-in-varify-otp"),
            O = e.target.matches ? e.target.matches("#sentOTPnwithOTP") : e.target.msMatchesSelector("#sentOTPnwithOTP");
        if (T || O || A || L && "Enter" === e.code || _ && "Enter" === e.code) {
            var I = "",
                k = new XMLHttpRequest,
                P = {},
                H = (s = (M = document.getElementById("sent-mobile")).getAttribute("countrycode"), f = M.getAttribute("mobileNumber"), ""),
                B = "",
                E = (w = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"));
            if (T || _) {
                if (H = document.getElementById("central-login-otp-newuser").value, B = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#verify-mobile-number-login-otp-button"), !H || "" === H) return w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ', !1;
                if (H.length < 6) return !1;
                var F = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#verify-mobile-number-login-otp-button");
                F && F[0] && (I = F[0].getAttribute("formName"))
            } else {
                if (H = document.getElementById("central-login-module-resendOtp-otp-id").value, B = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sentOTPnwithOTP"), !H || "" === H) return w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ', !1;
                if (H.length < 6) return !1
            }
            if (H && "" === H) return !1;
            if (!H || "" === H || "" === f) return w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ', !1;
            if (H.length < 6) return E[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Must be 6 digits', !1;
            if (P.SMSType = 1, P.CountryCode = s, P.Mobile = f, P.OTPLogin = !0, P.OTP = H, P.isCustReg = !0, P.registrationFlow = !1, P.source = "PBHOME_MYACC", (j = getGoogleToken()) && "" !== j) changeMobileNumberGA(getPromptType(), "otp_page_tap", "VerifyMobile"), (x = decodeJWT(j)) && x.email && "" !== x.email && (P.registrationFlow = !1, P.GToken = j, P.GmailID = x.email, P.isGFlow = !0);
            else(T || _) && I && "forgotPwd" === I ? (P.registrationFlow = !0, changeMobileNumberGA("login_via_password", "forgot_password_screen_tap", "VerifyMobile")) : changeMobileNumberGA("login_via_OTP", "OTP_screen_tap", "VerifyOTP");
            k.onreadystatechange = function() {
                if (1 == this.readyState && B[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                    B[0].classList.remove("show-loader");
                    var e = JSON.parse(this.response);
                    if (e && e.statusMsg && "success" === e.statusMsg.toLowerCase()) {
                        var t = JSON.parse(this.response);
                        if (!I || "forgotPwd" !== I || !T && !_ || P && P.GToken) {
                            var n = getForGaRanFn();
                            myModal.successHtmlOTPVarifications(), closePopupWithTimeInterval("close5"), t && t.data && Object.keys(t.data).length > 0 && t.data.UniqueID;
                            try {
                                var a = localStorage.getItem("centralGSigntoken");
                                a && "" != a && (a = JSON.parse(a)), setLoginSuccessGA("login_with_otp", a, t, n), setCookies(t), removeGoogleToken()
                            } catch (e) {
                                console.log("Cannot set cookies")
                            }
                            try {
                                centralLoginOnSuccess()
                            } catch (e) {
                                console.log("function not found ")
                            }
                        } else I && "forgotPwd" === I ? (gaFuncations({
                            eventCategoryName: "pbhome_login_v2",
                            eventActionName: "login_via_password",
                            eventLabel: "forgot_password_screen_tap",
                            eventValue: "VerifyMobile"
                        }), myModal.setPasswordHTML(s, f, I, H)) : myModal.setPasswordHTML(s, f, "Set", H)
                    } else(e.statusMsg && "failure" === e.statusMsg.toLowerCase() || !e.IsValidOTP) && e.Message ? (B[0].classList.remove("show-loader"), w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + e.Message, gaFuncations({
                        eventName: "eventTracking",
                        eventCategoryName: "loginWidget",
                        eventActionName: "sign-in",
                        eventLabel: "wrongOTP",
                        journeyType: s && 91 === parseInt(s) ? "NRI" : "non-NRI",
                        operatorType: s
                    })) : e.success || (B[0].classList.remove("show-loader"), w[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
                }
            }, k.open("POST", hostURL + apiName.validateOtp, !0), k.setRequestHeader("Content-Type", "application/json"), k.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), k.setRequestHeader("x-Ismobile", !isDekstopFn()), k.withCredentials = !0, k.send(JSON.stringify(P))
        }
        if (e.target.matches ? e.target.matches("#central-login-module-resendOtp") : e.target.msMatchesSelector("#central-login-module-resendOtp")) {
            document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sentOTPnwithOTP");
            if ((q = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-module-resendOtp")) && q[0] && q[0].getAttribute("buttonId") && "" !== q[0].getAttribute("buttonId")) {
                var q = "#" + q[0].getAttribute("buttonId");
                document.getElementsByClassName("login-module-inner")[0].querySelectorAll(q)
            }
            var R = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"),
                V = (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#centarla-login-module-resentotp-message"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#verify-mobile-number-login-otp-button")),
                G = "";
            V && V[0] && (G = V[0].getAttribute("formName"));
            var D = {
                source: "MYACC"
            };
            (ge = new XMLHttpRequest).onreadystatechange = function() {
                if (1 == this.readyState && disbaleButtonBtnOnly(!0, "central-login-module-resendOtp"), 4 == this.readyState && 200 == this.status) {
                    var e = JSON.parse(this.response);
                    if (e.statusMsg && "success" === e.statusMsg.toLowerCase() && e.statusCode && 10 === parseInt(e.statusCode) && e.token && "" !== e.token) {
                        var t = new XMLHttpRequest,
                            n = {},
                            a = document.getElementById("sent-mobile"),
                            s = a.getAttribute("countrycode"),
                            o = a.getAttribute("mobileNumber");
                        n.SMSType = SMS_TYPE, n.CountryCode = s, n.Mobile = o, n.OTPLogin = !0, n.isCustReg = !0, n.source = "MYACC", n.requestReason = G && "forgotPwd" === G ? "SETPASSWORD" : "OTPLogin";
                        var i = getGoogleToken();
                        i && "" !== i ? changeMobileNumberGA(getPromptType(), "otp_page_tap", "ResendOTP") : G && "forgotPwd" === G ? changeMobileNumberGA("login_via_password", "forgot_password_screen_tap", "ResendOTP") : changeMobileNumberGA("login_via_OTP", "OTP_screen_tap", "ResendOTP"), t.onreadystatechange = function() {
                            if (1 == this.readyState && (R[0].innerHTML = "", document.getElementById("central-login-module-resendOtp-otp-id") && (document.getElementById("central-login-module-resendOtp-otp-id").value = "")), 4 == this.readyState && 200 == this.status) {
                                var e = JSON.parse(this.response);
                                if (e.statusMsg && "success" === e.statusMsg.toLowerCase()) disbaleButton("central-login-module-resendOtp"), gaFuncations({
                                    eventName: "eventTracking",
                                    eventCategoryName: "loginWidget",
                                    eventActionName: "sign-in",
                                    eventLabel: "otp-resent",
                                    journeyType: s && 91 === parseInt(s) ? "NRI" : "non-NRI",
                                    operatorType: s
                                }), e.Message && "" !== e.Message && centralLoginSendOtpMesage(e.Message);
                                else if (e.statusMsg && "success" !== e.statusMsg.toLowerCase()) {
                                    try {
                                        gaFuncations({
                                            eventCategoryName: "error_tracking",
                                            eventActionName: "shown",
                                            paramType3: "API code name",
                                            paramValue3: apiName.sendOtp,
                                            paramType4: "message",
                                            paramValue4: e.Message && "" !== e.Message ? e.Message : "Please try once again",
                                            paramType5: "api_status",
                                            paramValue5: t ? .status + "_error",
                                            paramType1: "c_m",
                                            paramValue1: maskMobileNumberInput(o)
                                        })
                                    } catch (e) {}
                                    disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + (e.Message && "" !== e.Message ? e.Message : "Please try once again")
                                } else {
                                    try {
                                        gaFuncations({
                                            eventCategoryName: "error_tracking",
                                            eventActionName: "shown",
                                            paramType3: "API code name",
                                            paramValue3: apiName.sendOtp,
                                            paramType4: "message",
                                            paramValue4: "Please try once again",
                                            paramType5: "api_status",
                                            paramValue5: t ? .status + "_error",
                                            paramType1: "c_m",
                                            paramValue1: maskMobileNumberInput(o)
                                        })
                                    } catch (e) {}
                                    disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again'
                                }
                            } else if (4 == this.readyState && 200 != this.status) {
                                try {
                                    gaFuncations({
                                        eventCategoryName: "error_tracking",
                                        eventActionName: "shown",
                                        paramType3: "API code name",
                                        paramValue3: apiName.sendOtp,
                                        paramType4: "message",
                                        paramValue4: "Something went wrong!",
                                        paramType5: "api_status",
                                        paramValue5: t ? .status + "_error",
                                        paramType1: "c_m",
                                        paramValue1: maskMobileNumberInput(o)
                                    })
                                } catch (e) {}
                                disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!'
                            }
                        }, t.open("POST", hostURL + apiName.sendOtp, !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), t.setRequestHeader("x-Ismobile", !isDekstopFn());
                        var r = e.token.split(".");
                        t.setRequestHeader("Authorization", "Bearer " + r[0] + "." + st.c + "." + r[1] + "." + st.a + "." + r[2]), t.withCredentials = !0, t.send(JSON.stringify(n))
                    } else e.statusMsg && "success" !== e.statusMsg.toLowerCase() ? R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + (e.Message && "" !== e.Message ? e.Message : "Please try once again") : R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again'
                } else 4 == this.readyState && 200 != this.status && (disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
            }, ge.open("POST", hostURL + apiName.gtn, !0), ge.setRequestHeader("Content-Type", "application/json"), ge.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), ge.setRequestHeader("clientkey", st.c), ge.setRequestHeader("authkey", st.a), ge.setRequestHeader("x-Ismobile", !isDekstopFn()), ge.withCredentials = !0, ge.send(JSON.stringify(D))
        }
        if (e.target.matches ? e.target.matches("#change_mobile_number") : e.target.msMatchesSelector("#change_mobile_number")) {
            var j, x = null;
            if ((j = getGoogleToken()) && "" !== j && (x = decodeJWT(j)), x && x.email) myModal.LinkMobileNumberWithEmail(), document.getElementById("central-login-module-sign-mobile").value = "", changeMobileNumberGA(getPromptType(), "otp_page_tap", "EditNumber");
            else {
                V = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#verify-mobile-number-login-otp-button"), G = "";
                V && V[0] && (G = V[0].getAttribute("formName")), "loginWithPasswordHTML" === getAttributeValue("change_mobile_number", "popupname") ? changeMobileNumberGA("login_via_password", "password_screen_tap", "EditNumber") : G && "forgotPwd" === G ? changeMobileNumberGA("login_via_password", "forgot_password_screen_tap", "EditNumber") : changeMobileNumberGA("login_via_OTP", "OTP_screen_tap", "EditNumber");
                t = getLoginFrom.call(this);
                prefeildDataForCountryCode.call(this), myModal.signInFlow(t), document.getElementById("central-login-module-sign-mobile").value = ""
            }
        }
        if ((e.target.matches ? e.target.matches("#central-loin-resendSignUp") : e.target.msMatchesSelector("#central-loin-resendSignUp")) && (prefeildDataForCountryCode.call(this), myModal.signUpFlow(), document.getElementById("central-login-module-sign-mobile").value = ""), e.target.matches ? e.target.matches("#central-login-signin-link") : e.target.msMatchesSelector("#central-login-signin-link")) {
            var W = document.getElementById("central-login-signin-link");
            s = W.getAttribute("countryCode");
            if (prefeildDataForCountryCode.call(this, s), myModal.signInFlow(), W && void 0 !== W && W.getAttribute("mobileNumber")) {
                var U = W.getAttribute("mobileNumber");
                document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-module-sign-mobile")[0].value = U, document.getElementById("central-login-module-sign-mobile").value = U
            } else document.getElementById("central-login-module-sign-mobile").value = ""
        }
        var J = e.target.matches ? e.target.matches("#central-login-password-eye") : e.target.msMatchesSelector("#central-login-password-eye"),
            Y = e.target.matches ? e.target.matches("#centarl-login-pwd-eye") : e.target.msMatchesSelector("#centarl-login-pwd-eye"),
            X = e.target.matches ? e.target.matches("#centarl-login-pwd-confirm-eye") : e.target.msMatchesSelector("#centarl-login-pwd-confirm-eye");
        if (J || Y || X) {
            var z = "";
            if (J && (z = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-password-eye")), Y && (z = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#centarl-login-pwd-eye")), X && (z = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#centarl-login-pwd-confirm-eye")), z[0] && z[0].classList.contains("pass-hide")) {
                var K = z[0].getAttribute("textId");
                document.getElementById(K).type = "text", z[0].classList.add("pass-show"), z[0].classList.remove("pass-hide"), z[0].src = "https://static.pbcdn.in/myaccount-cdn/images/eye-icon.svg"
            } else if (z[0] && z[0].classList.contains("pass-show")) {
                K = z[0].getAttribute("textId");
                document.getElementById(K).type = "password", z[0].classList.add("pass-hide"), z[0].classList.remove("pass-show"), z[0].src = "https://static.pbcdn.in/myaccount-cdn/images/eye-slash-icon.svg"
            }
        }
        var Q = e.target.matches ? e.target.matches("#login-in-with-password") : e.target.msMatchesSelector("#login-in-with-password"),
            Z = e.target.matches ? e.target.matches("#login-in-with-password-span") : e.target.msMatchesSelector("#login-in-with-password-span");
        if (Q || Z) {
            M = document.getElementById("sent-mobile");
            var $ = document.getElementById("central-login-password").value,
                ee = (R = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"), i = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sent-mobile"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#login-in-with-password"));
            s = i[0].getAttribute("countrycode");
            if (!$ || $ && "" === $.trim()) return R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ', !1;
            P = {
                Mobile: M.textContent,
                CountryCode: parseInt(s),
                KeepMeLoggedIn: !0,
                Password: $.trim(),
                source: "MYACC",
                isCustReg: !0
            };
            gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_via_password",
                eventLabel: "password_screen_tap",
                eventValue: "VerifyPassword"
            }), (k = new XMLHttpRequest).onreadystatechange = function() {
                if (1 == this.readyState && ee[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                    var e = JSON.parse(this.response);
                    if (e.statusMsg && "success" === e.statusMsg.toLowerCase()) {
                        ee[0].classList.remove("show-loader");
                        var t = getForGaRanFn();
                        myModal.successHtmlOTPVarifications(), closePopupWithTimeInterval("close5");
                        try {
                            setLoginSuccessGA("login_with_password", null, e, t), removeGoogleToken(), setCookies(e)
                        } catch (e) {
                            console.log("Cannot set cookies")
                        }
                        try {
                            centralLoginOnSuccess()
                        } catch (e) {
                            console.log("function not found ")
                        }
                    } else e.statusMsg && "success" !== e.statusMsg.toLowerCase() ? (ee[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + e.statusMsg) : (ee[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
                } else 4 == this.readyState && 200 != this.status && (ee[0].classList.remove("show-loader"), ee[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
            }, k.open("POST", hostURL + apiName.userLogin, !0), k.setRequestHeader("Content-Type", "application/json"), k.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), k.setRequestHeader("x-Ismobile", !isDekstopFn()), k.withCredentials = !0, k.send(JSON.stringify(P))
        }
        if (e.target.matches ? e.target.matches(".central-login-save-pwd") : e.target.msMatchesSelector(".central-login-save-pwd")) {
            var te, ne = document.getElementById("save_set_pwd");
            te = ne.getAttribute("formName");
            var ae = document.getElementById("central-login-create-pwd"),
                se = ae.getAttribute("mobileNumber"),
                oe = (s = ae.getAttribute("countryCode"), H = ae.getAttribute("otp"), document.getElementById("central-login-pwd").value),
                ie = document.getElementById("central-login-pwd-confirm").value,
                re = (R = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll(".central-login-save-pwd"));
            if (!oe || "" === oe || !ie || "" === ie) return R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ', !1;
            if (!se || "" === se || !s || "" === s) return !1;
            if (oe && "" !== oe && ie && "" !== ie && ie.trim() !== oe.trim()) return R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />Password don&apos;t match ', !1;
            P = {
                Password: oe.trim(),
                OTP: H,
                Mobile: parseInt(se),
                CountryCode: s,
                isCustReg: !(!te || "Set" !== te)
            };
            gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_via_password",
                eventLabel: "reset_password_screen_tap",
                eventValue: "SubmitPassword"
            }), (k = new XMLHttpRequest).onreadystatechange = function() {
                if (1 == this.readyState && re[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                    var e = JSON.parse(this.response);
                    if (e.statusMsg && "success" === e.statusMsg.toLowerCase()) {
                        getForGaRanFn();
                        if (re[0].classList.remove("show-loader"), te && "forgotPwd" === te) gaFuncations({
                            eventCategoryName: "pbhome_login_v2",
                            eventActionName: "login_via_password",
                            eventLabel: "reset_password_success"
                        }), myModal.successHtmlOTPVarifications(te, se, s);
                        else if (te && "Set" === te) {
                            myModal.successHtmlOTPVarifications(te), closePopupWithTimeInterval("close5");
                            try {
                                setLoginSuccessGA("login_with_password", null, e, getForGaRanFn()), removeGoogleToken(), setCookies(e)
                            } catch (e) {
                                console.log("Cannot set cookies")
                            }
                            try {
                                centralLoginOnSuccess()
                            } catch (e) {
                                console.log("function not found ")
                            }
                        } else myModal.successHtmlOTPVarifications(), closePopupWithTimeInterval("close5")
                    } else e.statusMsg && "success" !== e.statusMsg.toLowerCase() ? (re[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + e.statusMsg) : (re[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
                } else 4 == this.readyState && 200 != this.status && (re[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
            }, k.open("POST", hostURL + apiName.setPassword, !0), k.setRequestHeader("Content-Type", "application/json"), k.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), k.setRequestHeader("x-Ismobile", !isDekstopFn()), k.withCredentials = !0, k.send(JSON.stringify(P))
        }
        var le = e.target.matches ? e.target.matches("#central-login-forgot-password") : e.target.msMatchesSelector("#central-login-forgot-password"),
            ce = e.target.matches ? e.target.matches("#central-login-forgot-password-span") : e.target.msMatchesSelector("#central-login-forgot-password-span");
        if (le || ce) {
            t = getLoginFrom.call(this);
            var de = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-forgot-password");
            M = document.getElementById("sent-mobile"), $ = document.getElementById("central-login-password").value, R = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"), i = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sent-mobile"), U = M.textContent, s = i[0].getAttribute("countrycode");
            if (!U || U && "" === U.trim() || !s || s && "" === s.trim()) return R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ', !1;
            var ge = new XMLHttpRequest;
            D = {
                source: "MYACC"
            };
            gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_via_password",
                eventLabel: "password_screen_tap",
                eventValue: "ForgotPassword"
            }), s && 91 !== parseInt(s) ? myModal.HtmlCaptchaForNewUser(U, s, t, 3) : (ge.onreadystatechange = function() {
                if (1 == this.readyState && de[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                    var e = JSON.parse(this.response);
                    if (e && e.statusMsg && "success" === e.statusMsg.toLowerCase() && e.statusCode && 10 === parseInt(e.statusCode) && e.token && "" !== e.token) {
                        var n = {
                                SMSType: SMS_TYPE,
                                Mobile: U,
                                CountryCode: parseInt(s),
                                OTPLogin: !0,
                                source: "MYACC",
                                isCustReg: !0,
                                onEmail: !1,
                                requestReason: "SETPASSWORD"
                            },
                            a = new XMLHttpRequest;
                        a.onreadystatechange = function() {
                            if (1 == this.readyState && de[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                                var e = JSON.parse(this.response);
                                e.statusMsg && "success" === e.statusMsg.toLowerCase() ? (de[0].classList.remove("show-loader"), myModal.loginWithOTPVerifyHTML(U, s, "forgotPwd", t, !1), e.Message && "" !== e.Message && centralLoginSendOtpMesage(e.Message)) : e.statusMsg && "success" !== e.statusMsg.toLowerCase() ? (de[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + (e.Message && "" !== e.Message ? e.Message : "Please try once again")) : (de[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
                            } else if (4 == this.readyState && 200 != this.status) {
                                try {
                                    gaFuncations({
                                        eventCategoryName: "error_tracking",
                                        eventActionName: "shown",
                                        paramType3: "API code name",
                                        paramValue3: apiName.sendOtp,
                                        paramType4: "message",
                                        paramValue4: "Something went wrong!",
                                        paramType5: "api_status",
                                        paramValue5: a ? .status + "_error",
                                        paramType1: "c_m",
                                        paramValue1: maskMobileNumberInput(U)
                                    })
                                } catch (e) {}
                                de[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!'
                            }
                        }, a.open("POST", hostURL + apiName.sendOtp, !0), a.setRequestHeader("Content-Type", "application/json"), a.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), a.setRequestHeader("x-Ismobile", !isDekstopFn());
                        var o = e.token.split(".");
                        a.setRequestHeader("Authorization", "Bearer " + o[0] + "." + st.c + "." + o[1] + "." + st.a + "." + o[2]), a.withCredentials = !0, a.send(JSON.stringify(n))
                    } else e.statusMsg && "success" !== e.statusMsg.toLowerCase() ? (de[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + (e.Message && "" !== e.Message ? e.Message : "Please try once again")) : (de[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
                } else 4 == this.readyState && 200 != this.status && (de[0].classList.remove("show-loader"), R[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
            }, ge.open("POST", hostURL + apiName.gtn, !0), ge.setRequestHeader("Content-Type", "application/json"), ge.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), ge.setRequestHeader("clientkey", st.c), ge.setRequestHeader("authkey", st.a), ge.setRequestHeader("x-Ismobile", !isDekstopFn()), ge.withCredentials = !0, ge.send(JSON.stringify(D)))
        }
        var me = e.target.matches ? e.target.matches("#sendOtpWithCapcha") : e.target.msMatchesSelector("#sendOtpWithCapcha"),
            ue = e.target.matches ? e.target.matches("#span-sign-with-recaptcha") : e.target.msMatchesSelector("#span-sign-with-recaptcha");
        if ((me || ue) && gentTKN({
                id: "sendOtpWithCapchaSpan"
            }), e.target.matches ? e.target.matches("#central-login-whatsapp-btn") : e.target.msMatchesSelector("#central-login-whatsapp-btn")) {
            gaFuncations({
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_screen_tap",
                eventLabel: "login_via_whatsapp"
            });
            const e = isDekstopFn();
            window.open(e ? "https://web.whatsapp.com/send?phone=8506013131&text=Hey%20Policybazaar,%20sign%20me%20in%20to%20the%20website!" : "https://wa.me/8506013131?text=Hey%20Policybazaar,%20sign%20me%20in%20to%20the%20website!", "_blank")
        }
    };

function prefeildDataForCountryCode(e = null) {
    document.getElementById("central-login-module-content") && document.getElementById("central-login-module-content").setAttribute("ismobilefromcookies", !1);
    var t = new XMLHttpRequest;
    t.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            var t = JSON.parse(this.response);
            if (t.statusMsg && "success" === t.statusMsg.toLowerCase() && t.statusCode && 10 === parseInt(t.statusCode)) {
                var n = document.getElementsByClassName("login-module-inner") ? document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-country-list") : "",
                    a = "",
                    s = "";
                for (i = 0; i < t.data.length; i++) e && null !== e && t.data[i] && t.data[i].CountryCode && "" !== t.data[i].CountryCode && parseInt(e) === parseInt(t.data[i].CountryCode) && (s = t.data[i].CountryIcon), t.data[i] && t.data[i].CountryIcon && null !== t.data[i].CountryIcon && t.data[i].CountryCode && null !== t.data[i].CountryCode && (a += '<li class="country-drop-down-list-container" countryIcon="' + t.data[i].CountryIcon + '" countryCode="' + t.data[i].CountryCode + '" countryName="' + t.data[i].Country + '"> <div class="country-wrapper country-drop-down-list-container"  countryIcon="' + t.data[i].CountryIcon + '" countryCode="' + t.data[i].CountryCode + '"> <div class="country-flag country-drop-down-list-container" countryCode="' + t.data[i].CountryCode + '" countryIcon="' + t.data[i].CountryIcon + '"> <img class="country-drop-down-list-container" src="' + t.data[i].CountryIcon + '" alt="" countryCode="' + t.data[i].CountryCode + '" countryIcon="' + t.data[i].CountryIcon + '"> <span class="country-drop-down-list-container" countryCode="' + t.data[i].CountryCode + '" countryIcon="' + t.data[i].CountryIcon + '">' + t.data[i].Country + '</span> </div> <div class="country-code country-drop-down-list-container" countryIcon="' + t.data[i].CountryIcon + '" countryCode="' + t.data[i].CountryCode + '"> <p class="central-login-country-code country-drop-down-list-container" countryIcon="' + t.data[i].CountryIcon + '" countryCode="' + t.data[i].CountryCode + '">+' + t.data[i].CountryCode + "</p> </div> </div> </li>");
                if (n && (n[0].innerHTML = a), s && e && "" !== s && "" !== e) {
                    document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#custom-dropdown-list-open")[0].checked = !1;
                    var o = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#countryCodeP"),
                        r = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#centralLoginCountryIcon");
                    o[0].innerHTML = "+" + e, o[0].setAttribute("countryCode", e), r[0].src = s
                }
            }
        }
    }, t.open("GET", hostURL + apiName.getCountry, !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), t.setRequestHeader("Accept", "*/*"), t.withCredentials = !0, t.send()
}

function prefeildData() {
    document.getElementById("central-login-module-content") && document.getElementById("central-login-module-content").setAttribute("ismobilefromcookies", !1);
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            var e = JSON.parse(this.response);
            if (e.statusMsg && "success" === e.statusMsg.toLowerCase()) {
                disableHtmlAttribute.call(this, "central-login-input-block-div-id", "central-login-module-sign-mobile");
                var t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-module-sign-mobile");
                document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-sign-in-with-password");
                e.data && "" !== e.data && (t[0].value = e.data, document.getElementById("central-login-module-sign-mobile").value = e.data), e.countryCode && "" !== e.countryCode ? prefeildDataForCountryCode.call(e.countryCode) : prefeildDataForCountryCode.call()
            } else prefeildDataForCountryCode.call()
        } else 4 == this.readyState && 200 != this.status && prefeildDataForCountryCode.call()
    }, e.open("GET", hostURL + apiName.getMobileNoByCookies, !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), e.withCredentials = !0, e.send()
}
document.addEventListener("click", listenerFunction, !1);
var sendOtpForPrefieldData = function(e = null) {
        document.getElementById("central-login-module-content") && document.getElementById("central-login-module-content").setAttribute("ismobilefromcookies", !1);
        var t = new XMLHttpRequest;
        t.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var t = JSON.parse(this.response);
                t.statusMsg && "success" === t.statusMsg.toLowerCase() && t.data && "" !== t.data ? t.countryCode && "" !== t.countryCode ? (document.getElementById("central-login-module-content").setAttribute("ismobilefromcookies", !0), myModal.openSendOtpScreen(t.countryCode.toString(), t.data.toString(), e), sendOtpAfterCookies.call(this, t.countryCode, t.data.toString())) : (myModal.openSendOtpScreen("91", t.data.toString(), e), sendOtpAfterCookies.call(this, "91", t.data.toString())) : myModal.open12(e)
            }
        }, t.open("GET", hostURL + apiName.getMobileNoByCookies, !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), t.withCredentials = !0, t.send()
    },
    sendOtpAfterCookies = function(e, t) {
        var n = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sentOTPnwithOTP");
        if ((a = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-module-resendOtp")) && a[0] && a[0].getAttribute("buttonId") && "" !== a[0].getAttribute("buttonId")) {
            var a = "#" + a[0].getAttribute("buttonId");
            n = document.getElementsByClassName("login-module-inner")[0].querySelectorAll(a)
        }
        var s = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in"),
            o = (n = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sentOTPnwithOTP"), new XMLHttpRequest);
        o.onreadystatechange = function() {
            if (1 == this.readyState && (disbaleButtonBtnOnly(!0, "central-login-module-resendOtp"), n[0].classList.add("show-loader")), 4 == this.readyState && 200 == this.status) {
                var e = JSON.parse(this.response);
                if (e.statusMsg && "success" === e.statusMsg.toLowerCase() && e.statusCode && 10 === parseInt(e.statusCode) && e.token && "" !== e.token) {
                    var t = new XMLHttpRequest,
                        a = {},
                        o = document.getElementById("sent-mobile"),
                        i = o.getAttribute("countrycode"),
                        r = o.getAttribute("mobileNumber");
                    a.SMSType = SMS_TYPE, a.CountryCode = i, a.Mobile = r, a.OTPLogin = !0, a.isCustReg = !0, a.source = "MYACC", a.requestReason = "OTPLogin", t.onreadystatechange = function() {
                        if (1 == this.readyState && n[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                            var e = JSON.parse(this.response);
                            if (e.statusMsg && "success" === e.statusMsg.toLowerCase()) disbaleButton("central-login-module-resendOtp"), n[0].classList.remove("show-loader"), gaFuncations({
                                eventName: "eventTracking",
                                eventCategoryName: "loginWidget",
                                eventActionName: "sign-in",
                                eventLabel: "otp-resent",
                                journeyType: i && 91 === parseInt(i) ? "NRI" : "non-NRI",
                                operatorType: i
                            }), e.Message && "" !== e.Message && centralLoginSendOtpMesage(e.Message);
                            else if (e.statusMsg && "success" !== e.statusMsg.toLowerCase()) {
                                try {
                                    gaFuncations({
                                        eventCategoryName: "error_tracking",
                                        eventActionName: "shown",
                                        paramType3: "API code name",
                                        paramValue3: apiName.sendOtp,
                                        paramType4: "message",
                                        paramValue4: e.Message && "" !== e.Message ? e.Message : "Please try once again",
                                        paramType5: "api_status",
                                        paramValue5: t ? .status + "_error",
                                        paramType1: "c_m",
                                        paramValue1: maskMobileNumberInput(r)
                                    })
                                } catch (e) {}
                                disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), n[0].classList.remove("show-loader"), s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + (e.Message && "" !== e.Message ? e.Message : "Please try once again")
                            } else {
                                try {
                                    gaFuncations({
                                        eventCategoryName: "error_tracking",
                                        eventActionName: "shown",
                                        paramType3: "API code name",
                                        paramValue3: apiName.sendOtp,
                                        paramType4: "message",
                                        paramValue4: "Please try once again",
                                        paramType5: "api_status",
                                        paramValue5: t ? .status + "_error",
                                        paramType1: "c_m",
                                        paramValue1: maskMobileNumberInput(r)
                                    })
                                } catch (e) {}
                                disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), n[0].classList.remove("show-loader"), s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again'
                            }
                        } else if (4 == this.readyState && 200 != this.status) {
                            try {
                                gaFuncations({
                                    eventCategoryName: "error_tracking",
                                    eventActionName: "shown",
                                    paramType3: "API code name",
                                    paramValue3: apiName.sendOtp,
                                    paramType4: "message",
                                    paramValue4: "Something went wrong!",
                                    paramType5: "api_status",
                                    paramValue5: t ? .status + "_error",
                                    paramType1: "c_m",
                                    paramValue1: maskMobileNumberInput(r)
                                })
                            } catch (e) {}
                            disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), n[0].classList.remove("show-loader"), s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!'
                        }
                    }, t.open("POST", hostURL + apiName.sendOtp, !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), t.setRequestHeader("x-Ismobile", !isDekstopFn());
                    var l = e.token.split(".");
                    t.setRequestHeader("Authorization", "Bearer " + l[0] + "." + st.c + "." + l[1] + "." + st.a + "." + l[2]), t.withCredentials = !0, t.send(JSON.stringify(a))
                } else e.statusMsg && "success" !== e.statusMsg.toLowerCase() ? (n[0].classList.remove("show-loader"), s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> ' + (e.Message && "" !== e.Message ? e.Message : "Please try once again")) : (n[0].classList.remove("show-loader"), s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
            } else 4 == this.readyState && 200 != this.status && (disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), n[0].classList.remove("show-loader"), s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
        }, o.open("POST", hostURL + apiName.gtn, !0), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("X-Client-Source", "PBHOME_MYACC"), o.setRequestHeader("clientkey", st.c), o.setRequestHeader("authkey", st.a), o.setRequestHeader("x-Ismobile", !isDekstopFn()), o.withCredentials = !0, o.send(JSON.stringify({
            source: "MYACC"
        }))
    },
    keyUpAndPaste = function(e) {
        var t, n, a;
        if (e.target.matches ? e.target.matches("#centralLoginSearchCountryCode") : e.target.msMatchesSelector("#centralLoginSearchCountryCode"))
            for (t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#centralLoginSearchCountryCode")[0].value.toUpperCase(), n = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-country-list")[0].getElementsByTagName("li"), a = 0; a < n.length; a++) n[a].getAttribute("countryName").toUpperCase().indexOf(t) > -1 ? n[a].style.display = "" : n[a].style.display = "none";
        if (e.target.matches ? e.target.matches("#central-login-module-sign-mobile") : e.target.msMatchesSelector("#central-login-module-sign-mobile")) {
            var s = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sign-in"),
                o = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-module-sign-mobile"),
                i = (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#btn-sign-in-submit"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-floating-login"), document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#countryCodeP")[0].getAttribute("countrycode")),
                r = e.target.value;
            r = Number(r);
            var l = e.target.value;
            if (["-", "+", ".", "e"].includes(e.key) && (o[0].value = ""), i && l == r && 91 === parseInt(i) && l.length > 10) {
                var c = e.target.value.slice(0, 10);
                return document.getElementById("central-login-module-sign-mobile").value = c, o[0].value = c, !1
            }
            if (i && l && 91 !== parseInt(i) && l.length > 13) {
                c = e.target.value.slice(0, 13);
                return document.getElementById("central-login-module-sign-mobile").value = c, o[0].value = c, !1
            }
            if (i && l && 91 === parseInt(i) && ("0" == l.charAt(0) || "1" == l.charAt(0) || "2" == l.charAt(0) || "3" == l.charAt(0) || "4" == l.charAt(0) || "5" == l.charAt(0))) return s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Invalid number', document.getElementById("central-login-module-sign-mobile").value = "", o[0].value = "", !1;
            if (i && l && 91 !== parseInt(i) && "0" == l.charAt(0)) return s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Invalid number', document.getElementById("central-login-module-sign-mobile").value = "", o[0].value = "", !1;
            s[0].innerHTML = "", document.getElementById("central-login-module-sign-mobile").value = e.target.value
        }
        var d = e.target.matches ? e.target.matches("#central-login-module-resendOtp-otp-id") : e.target.msMatchesSelector("#central-login-module-resendOtp-otp-id"),
            g = e.target.matches ? e.target.matches("#central-login-otp-newuser") : e.target.msMatchesSelector("#central-login-otp-newuser");
        if (d || g) {
            s = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in");
            var m = "";
            m = g ? document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-otp-newuser") : document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-module-resendOtp-otp-id");
            document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sentOTPnwithOTP"), r = e.target.value;
            r = Number(r);
            l = e.target.value;
            if (isNaN(l) || -1 != l.indexOf(" ")) return s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Enter valid otp', !1;
            if (l.length > 6) {
                c = e.target.value.slice(0, 6);
                return g ? document.getElementById("central-login-otp-newuser").value = c : document.getElementById("central-login-module-resendOtp-otp-id").value = c, s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Must be 6 digits', m[0].value = c, !1
            }
            6 === l.length && (s[0].innerHTML = ""), l.length, g ? document.getElementById("central-login-otp-newuser").value = e.target.value : document.getElementById("central-login-module-resendOtp-otp-id").value = e.target.value
        }
        var u = e.target.matches ? e.target.matches("#central-login-pwd") : e.target.msMatchesSelector("#central-login-pwd"),
            p = e.target.matches ? e.target.matches("#central-login-pwd-confirm") : e.target.msMatchesSelector("#central-login-pwd-confirm");
        if (u || p) {
            s = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sentotp-in");
            var h = e.target.value.trim();
            if (h.length < 8) return s[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Must be 8 characters or more', !1;
            h.length >= 8 && (s[0].innerHTML = ""), u && (document.getElementById("central-login-pwd").value = e.target.value), p && (document.getElementById("central-login-pwd-confirm").value = e.target.value)
        }
    },
    closePopupWithTimeInterval = function(e, t = null) {
        var n = 500;
        console.log("0000dn  sucess  3"), t && "" !== t && (n = t);
        var a = setInterval((function() {
            clearInterval(a), a = null, myModal.close5()
        }), n)
    },
    login_widget_toast_container_close_timer = function(e, t = null) {
        var n = 3e3;
        t && "" !== t && (n = t);
        var a = setInterval((function() {
            clearInterval(a), a = null, removeTostContainer()
        }), n)
    };

function removeTostContainer(e) {
    var t = document.getElementById("login_widget_toast_container");
    t && t.remove()
}
var centralLoginSendOtpMesage = function(e) {
        var t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-resend-otp-message");
        t[0].innerHTML = '<p><img src="https://static.pbcdn.in/myaccount-cdn/images/success.png" alt=""> ' + e + "</p> ";
        let n = setInterval((function() {
            clearInterval(n), n = null, t[0].innerHTML = ""
        }), 1e4)
    },
    centralLoginRegistrationEroor = function(e) {
        var t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sign-in");
        t[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt=""> ' + e;
        let n = setInterval((function() {
            clearInterval(n), n = null, t[0].innerHTML = ""
        }), 1e4)
    },
    maskingAndhideMobileNumber = function(e) {
        var t = "",
            n = e,
            a = "";
        if ((t = getLoginFrom.call()) && "insurance" === t) {
            var s = getMobileCookiesState.call(),
                o = e.split(""),
                i = o.length;
            if (s && !0 === s && i > 7) {
                for (var r = 0; r <= i - 3; r++) a += "*";
                a = a + o[i - 3] + o[i - 2] + o[i - 1]
            }
        }
        return a && "" !== a && (n = a), n
    },
    diableDivContenteById = function(e = null, t = null) {
        e && "" !== e && document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#" + e)[0].classList.add("centarl-login-module-disabled");
        t && "" !== t && (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#" + t)[0].disabled = !0)
    },
    getLoginFrom = function() {
        var e = "",
            t = document.getElementById("central-login-module-content");
        return t && null !== t && (e = t.getAttribute("loginfrom")), e
    },
    getAttributeValue = function(e, t) {
        var n = "",
            a = document.getElementById(e);
        return a && null !== a && (n = a.getAttribute(t)), n
    },
    getMobileCookiesState = function() {
        var e = !1,
            t = document.getElementById("central-login-module-content");
        return t && null !== t && (e = t.getAttribute("ismobilefromcookies")) && "true" === e && (e = !0), e
    },
    disableHtmlAttribute = function(e = null, t = null) {
        var n = getLoginFrom.call(this);
        if (n && "insurance" === n) {
            var a = getMobileCookiesState.call(this);
            a && !0 === a && diableDivContenteById.call(this, e, t)
        }
    },
    setMobileMaskingValue = function(e = null, t) {
        document.getElementById("central-login-module-content").setAttribute("ismobilefromcookies", !0);
        var n = maskingAndhideMobileNumber.call(this, e),
            a = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#" + t);
        document.getElementById("central-login-module-sign-mobile").value = n, a[0].type = "text", a[0].value = n
    },
    getAM = function(e, t, n) {
        return e[0] + t + e[1] + n + e[2]
    },
    gentTKN = function(e) {
        var t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sign-in"),
            n = grecaptcha.enterprise.getResponse(),
            a = document.getElementById("sent-mobile").getAttribute("mobileNumber");
        if (n) {
            gaFuncations({
                eventName: "eventTracking",
                eventCategoryName: "ma_login_v2",
                eventActionName: "recaptcha_continue_tap"
            });
            var s = new XMLHttpRequest,
                o = {
                    source: "MYACC",
                    MobileNo: a
                },
                i = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sendOtpWithCapcha");
            i[0].classList.add("show-loader"), s.onreadystatechange = function() {
                if (1 == this.readyState && i[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                    i[0].classList.remove("show-loader");
                    var e = JSON.parse(this.response);
                    e && e.statusMsg && "success" === e.statusMsg.toLowerCase() && e.statusCode && 10 === parseInt(e.statusCode) && e.token && "" !== e.token ? continueWithLogin(e.token, n) : t[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />Something went wrong!'
                } else 4 == this.readyState && 200 != this.status && (i[0].classList.remove("show-loader"), t[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />Something went wrong!')
            }, s.open("POST", hostURL + apiName.gtn, !0), s.setRequestHeader("Content-Type", "application/json"), s.setRequestHeader("x-client-source", "PBHOME_MYACC"), s.setRequestHeader("clientkey", st.c), s.setRequestHeader("authkey", st.a), s.setRequestHeader("x-Ismobile", !isDekstopFn()), s.withCredentials = !0, s.send(JSON.stringify(o))
        } else t[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />Kindly verify the CAPTCHA first, please!'
    },
    continueWithLogin = function(e, t) {
        var n = getLoginFrom.call(this),
            a = document.getElementById("sent-mobile"),
            s = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sent-mobile"),
            o = a.getAttribute("mobileNumber"),
            i = s[0].getAttribute("countrycode"),
            r = a.getAttribute("userType"),
            l = (document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-sign-in"), {});
        l.SMSType = SMS_TYPE, l.CountryCode = i, l.Mobile = o, l.OTPLogin = !0, l.source = "MYACC", l.requestReason = "OTPLogin", l.cToken = t;
        var c = getGoogleToken();
        if (c && "" !== c && (userData = decodeJWT(c), userData && userData.email && "" !== userData.email && (l.GmailFlow = !0)), e) {
            var d = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#sendOtpWithCapcha"),
                g = new XMLHttpRequest;
            g.onreadystatechange = function() {
                if (1 == this.readyState && d[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                    var e = JSON.parse(this.response);
                    if (e.statusMsg && "success" === e.statusMsg.toLowerCase()) d[0].classList.remove("show-loader"), gaFuncations({
                        eventName: "eventTracking",
                        eventCategoryName: "loginWidget",
                        eventActionName: "sign-in",
                        eventLabel: "otp-resent",
                        journeyType: i && 91 === parseInt(i) ? "NRI" : "non-NRI",
                        operatorType: i
                    }), myModal.loginWithOTPVerifyHTML(o, i, "newUser", n, !0), e.Message && "" !== e.Message && centralLoginSendOtpMesage(e.Message);
                    else if (e.statusMsg && "success" !== e.statusMsg.toLowerCase()) {
                        myModal.HtmlCaptchaForNewUser(o, i, n, r);
                        var t = "Please try once again!";
                        e && e.statusMsg && "" !== e.statusMsg && (56 === e.statusCode || 57 === e.statusCode) && (t = e.statusMsg), centralLoginRegistrationEroor(t)
                    } else {
                        try {
                            gaFuncations({
                                eventCategoryName: "error_tracking",
                                eventActionName: "shown",
                                paramType3: "API code name",
                                paramValue3: apiName.reg,
                                paramType4: "message",
                                paramValue4: "Please try once again!",
                                paramType5: "api_status",
                                paramValue5: g ? .status + "_error",
                                paramType1: "c_m",
                                paramValue1: maskMobileNumberInput(o)
                            })
                        } catch (e) {}
                        myModal.HtmlCaptchaForNewUser(o, i, n, r), centralLoginRegistrationEroor("Please try once again!")
                    }
                } else if (4 == this.readyState && 200 != this.status) {
                    myModal.HtmlCaptchaForNewUser(o, i, n), centralLoginRegistrationEroor("Please try once again!");
                    try {
                        gaFuncations({
                            eventCategoryName: "error_tracking",
                            eventActionName: "shown",
                            paramType3: "API code name",
                            paramValue3: apiName.reg,
                            paramType4: "message",
                            paramValue4: "Something went wrong!",
                            paramType5: "api_status",
                            paramValue5: g ? .status + "_error",
                            paramType1: "c_m",
                            paramValue1: maskMobileNumberInput(o)
                        })
                    } catch (e) {}
                }
            }, g.open("POST", hostURL + apiName.reg, !0), g.setRequestHeader("Content-Type", "application/json"), g.setRequestHeader("x-client-source", "PBHOME_MYACC"), g.setRequestHeader("x-Ismobile", !isDekstopFn());
            var m = e.split(".");
            g.setRequestHeader("Authorization", "Bearer " + m[0] + "." + st.c + "." + m[1] + "." + st.a + "." + m[2]), g.withCredentials = !0, g.send(JSON.stringify(l))
        }
    },
    sendOtpForFirstScreen = function(e, t, n, a, s, o, i) {
        var r = new XMLHttpRequest,
            l = null,
            c = getGoogleToken();
        c && "" !== c && (l = decodeJWT(c)), t && 91 !== parseInt(t) ? myModal.HtmlCaptchaForNewUser(e, t, s, 3) : (r.onreadystatechange = function() {
            if (1 == this.readyState && (disbaleButtonBtnOnly(!0, "central-login-module-resendOtp"), a[0].classList.add("show-loader")), 4 == this.readyState && 200 == this.status) {
                var r = JSON.parse(this.response);
                if (r && r.statusMsg && "success" === r.statusMsg.toLowerCase() && r.statusCode && 10 === parseInt(r.statusCode) && r.token && "" !== r.token) {
                    var c = new XMLHttpRequest,
                        d = {},
                        g = !1;
                    d.SMSType = SMS_TYPE, d.CountryCode = t, d.Mobile = e, d.OTPLogin = !0, d.source = "MYACC", d.isCustReg = !0, d.requestReason = "OTPLogin", n && n.result && 3 === parseInt(n.result) && (d.onEmail = !1), l && l.email && "" !== l.email && (d.GmailFlow = !0, g = !0), disbaleButtonBtnOnly(!0, "central-login-module-resendOtp"), c.onreadystatechange = function() {
                        if (1 == this.readyState && a[0].classList.add("show-loader"), 4 == this.readyState && 200 == this.status) {
                            a[0].classList.remove("show-loader");
                            var r = JSON.parse(this.response);
                            if (r && r.statusMsg && "success" === r.statusMsg.toLowerCase() && r.statusCode && 10 === parseInt(r.statusCode)) disbaleButton("central-login-module-resendOtp"), i && "loginwithotp" === i && (!n || Object.keys(n).length <= 0) || s && "insurance" === s || n && n.result && (1 === parseInt(n.result) || 2 === parseInt(n.result)) ? (gaFuncations({
                                eventName: "eventTracking",
                                eventCategoryName: "loginWidget",
                                eventActionName: "sign-in",
                                eventLabel: "otp-sent",
                                journeyType: t && 91 === parseInt(t) ? "NRI" : "non-NRI",
                                operatorType: t
                            }), g ? myModal.loginWithOTPVerifyHTML(e, t, "newUser", s, !0) : myModal.verifyOTPHtml(e, t, s)) : n && n.result && 3 === parseInt(n.result) && myModal.loginWithOTPVerifyHTML(e, t, submitFrom, s, !1), r.Message && "" !== r.Message && centralLoginSendOtpMesage(r.Message);
                            else if (r && r.statusCode && 55 === parseInt(r.statusCode)) disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), gaFuncations({
                                eventName: "eventTracking",
                                eventCategoryName: "loginWidget",
                                eventActionName: "sign-in",
                                eventLabel: "landCaptchaScreen",
                                journeyType: t && 91 === parseInt(t) ? "NRI" : "non-NRI",
                                operatorType: t
                            }), myModal.HtmlCaptchaForNewUser(e, t, s, 3);
                            else if (r && r.statusMsg && "success" !== r.statusMsg.toLowerCase() && r.statusCode && 10 != parseInt(r.statusCode)) {
                                try {
                                    gaFuncations({
                                        eventCategoryName: "error_tracking",
                                        eventActionName: "shown",
                                        paramType3: "API code name",
                                        paramValue3: apiName.sendOtp,
                                        paramType4: "message",
                                        paramValue4: r.Message && "" !== r.Message ? r.Message : "Please try once again",
                                        paramType5: "api_status",
                                        paramValue5: c ? .status + "_error",
                                        paramType1: "c_m",
                                        paramValue1: maskMobileNumberInput(e)
                                    })
                                } catch (e) {}
                                disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), o[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />' + (r.Message && "" !== r.Message ? r.Message : "Please try once again")
                            } else {
                                try {
                                    gaFuncations({
                                        eventCategoryName: "error_tracking",
                                        eventActionName: "shown",
                                        paramType3: "API code name",
                                        paramValue3: apiName.sendOtp,
                                        paramType4: "message",
                                        paramValue4: "Please try once again",
                                        paramType5: "api_status",
                                        paramValue5: c ? .status + "_error",
                                        paramType1: "c_m",
                                        paramValue1: maskMobileNumberInput(e)
                                    })
                                } catch (e) {}
                                disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), o[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again'
                            }
                        } else if (4 == this.readyState && 200 != this.status) {
                            try {
                                gaFuncations({
                                    eventCategoryName: "error_tracking",
                                    eventActionName: "shown",
                                    paramType3: "API code name",
                                    paramValue3: apiName.sendOtp,
                                    paramType4: "message",
                                    paramValue4: "Something went wrong!",
                                    paramType5: "api_status",
                                    paramValue5: c ? .status + "_error",
                                    paramType1: "c_m",
                                    paramValue1: maskMobileNumberInput(e)
                                })
                            } catch (e) {}
                            disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), a[0].classList.remove("show-loader"), o[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!'
                        }
                    }, c.open("POST", hostURL + apiName.sendOtp, !0), c.setRequestHeader("Content-Type", "application/json"), c.setRequestHeader("x-client-source", "PBHOME_MYACC"), c.setRequestHeader("x-Ismobile", !isDekstopFn());
                    var m = r.token.split(".");
                    c.setRequestHeader("Authorization", "Bearer " + m[0] + "." + st.c + "." + m[1] + "." + st.a + "." + m[2]), c.withCredentials = !0, c.send(JSON.stringify(d))
                } else r && r.statusMsg && "success" !== r.statusMsg.toLowerCase() && r.statusCode && 10 != parseInt(r.statusCode) ? (a[0].classList.remove("show-loader"), o[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />' + (r.Message && "" !== r.Message ? r.Message : "Please try once again")) : (a[0].classList.remove("show-loader"), o[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again')
            } else 4 == this.readyState && 200 != this.status && (disbaleButtonBtnOnly(!1, "central-login-module-resendOtp"), a[0].classList.remove("show-loader"), o[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
        }, r.open("POST", hostURL + apiName.gtn, !0), r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("x-client-source", "PBHOME_MYACC"), r.setRequestHeader("clientkey", st.c), r.setRequestHeader("authkey", st.a), r.setRequestHeader("x-Ismobile", !isDekstopFn()), r.withCredentials = !0, r.send(JSON.stringify({
            source: "MYACC"
        })))
    },
    disbaleButtonBtnOnly = function(e, t) {
        var n = document.getElementsByClassName("login-module-inner");
        if (t && n && n[0]) {
            var a = n[0].querySelectorAll("#" + t);
            e && a && a[0] ? (a[0].classList.remove("disablebtnClass"), a[0].classList.add("disablebtnClass")) : !e && a && a[0] && a[0].classList.remove("disablebtnClass")
        }
    },
    disbaleButton = function(e) {
        clearInterval(this.showResendTimer), clearInterval(this.hideResendTimer), this.showResendTimer = setInterval((function() {
            clearInterval(this.showResendTimer), centralLoginClock = null;
            var t = document.getElementsByClassName("login-module-inner");
            if (t && t[0]) {
                var n = t[0].querySelectorAll("#" + e);
                n[0].classList.add("disablebtnClass"), n[0].disabled = !0, n[0].textContent = "Resend in ", document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-timer")[0].innerHTML = ' <span id="central-login-timer-small-tag">30</span>s', clearInterval(this.timerInterval), this.timerInterval = setInterval(updateTimer, 1e3)
            }
        }), 650), this.hideResendTimer = setInterval((function() {
            clearInterval(this.hideResendTimer), centralLoginClock = null;
            var t = document.getElementsByClassName("login-module-inner");
            if (t && t[0]) {
                var n = t[0].querySelectorAll("#" + e);
                n && n[0] && n[0].classList.remove("disablebtnClass"), n && n[0] && (n[0].disabled = !1), n && n[0] && (n[0].textContent = "Resend ")
            }
        }), 3e4)
    };

function updateTimer() {
    var e = document.getElementsByClassName("login-module-inner");
    if (e && e[0]) {
        seconds = 30;
        var t = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-timer-small-tag");
        if (t && t[0] && t[0].textContent && "" != t[0].textContent && (seconds = parseInt(t[0].textContent)), t && t[0])
            if (seconds--, t[0].textContent = seconds, 0 == seconds) document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#central-login-timer")[0].innerHTML = "", clearInterval(this.timerInterval)
    } else clearInterval(this.timerInterval)
}

function renderGoogleSignInButton() {
    try {
        var e = document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#google-signin-component"),
            t = document.querySelector("#central-login-module-inner .customBtn-otp");
        google && google.accounts.id.renderButton(e[0], {
            width: t ? t.offsetWidth : 370,
            "max-width": 500
        })
    } catch (e) {}
}

function loadGoogleSignInScript() {
    renderGoogleSignInButton()
}

function gOneTap(e = null) {
    if (!google) return void console.error("Google Sign-In library not loaded");
    window.onSignInSuccess = e => {
        if (e && e.credential) {
            var t = decodeJWT(e.credential);
            if (t && t.email) {
                var n = {
                    GmailID: t.email,
                    GToken: e.credential
                };
                localStorage.setItem("centralGSigntoken", JSON.stringify(e)), authenticateGmail(n), gaFuncations({
                    eventCategoryName: "pbhome_login_v2",
                    eventActionName: "login_screen_tap",
                    eventLabel: e.select_by && ["user", "fedcm"].includes(e.select_by ? .toLowerCase()) ? "login_with_google_prompt" : e.select_by && "btn" === e.select_by ? "login_with_google" : ""
                })
            }
        }
    }, window.onSignInFailure = e => {
        console.error("Error signing in:", e)
    };
    google && google.accounts.id.initialize({
        client_id: "862644857848-hmn86jv9b7dpq7crujciampar3ggfm8p.apps.googleusercontent.com",
        callback: window.onSignInSuccess
    }), e && "G_API_LOAD" == e && renderGoogleSignInButton();
    const t = window.location.href,
        n = new URL(t).pathname;
    (n && "/" === n || !n) && google && google.accounts.id.prompt()
}

function mutationObserverFnc(e) {
    return new MutationObserver((t => {
        e(t)
    }))
}

function GoogleOneTabOverLayFun(e) {
    const t = document.getElementById("central-login-module-content");
    if (e ? .length)
        for (const n of e)
            if ("childList" === n.type) {
                for (const e of n ? .addedNodes)
                    if ("credential_picker_iframe" === e ? .id || "credential_picker_container" === e ? .id) {
                        window.innerWidth < 786 && t.classList.add("one-tap-overlay"), gaFuncations({
                            eventCategoryName: "pbhome_login_v2",
                            eventActionName: "googlePromptShown"
                        });
                        break
                    }
                for (const e of n ? .removedNodes)
                    if ("credential_picker_iframe" === e ? .id || "credential_picker_container" === e ? .id) {
                        window.innerWidth < 786 && t.classList.remove("one-tap-overlay"), window.observer && window.observer.disconnect();
                        break
                    }
            }
}

function onWindowLoadFunction(e = null) {
    var t = getc("pbcentrallogin");
    if (setForGaRanN(3), 3 === parseInt(3) && (!t || "" === t)) {
        removeGoogleToken();
        var n = document.createElement("script");
        n.src = "https://accounts.google.com/gsi/client", n.async = !0, n.defer = !0, n.nonce = "nonce", document.body.appendChild(n), n.addEventListener("load", (() => {
            gOneTap(e)
        })), n.addEventListener("error", (e => {
            console.log("Error on loading file", e)
        }))
    }
}

function decodeJWT(e) {
    var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
        n = decodeURIComponent(atob(t).split("").map((function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        })).join(""));
    return JSON.parse(n)
}

function authenticateGmail(e, t) {
    if (e && e.GToken) {
        var n = document.getElementsByClassName("login-module-inner") && document.getElementsByClassName("login-module-inner")[0] ? document.getElementsByClassName("login-module-inner")[0].querySelectorAll(".google-sign-in-container") : "",
            a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            if (this.readyState, 4 == this.readyState && 200 == this.status) {
                var e = JSON.parse(this.response);
                if (e && e.statusMsg && "success" === e.statusMsg.toLowerCase() && e.statusCode && 10 === parseInt(e.statusCode))
                    if (e.verified)
                        if (e.data && e.data.Token && e.data.lstCookiesDetails && e.data.lstCookiesDetails.length > 0) {
                            var t = getForGaRanFn(),
                                s = localStorage.getItem("centralGSigntoken");
                            s && "" != s && (s = JSON.parse(s)), setLoginSuccessGA("gmail", s, e, t), setCookies(e), removeGoogleToken(), n ? myModal.successHtmlOTPVarifications() : myModal.successHtmlOTPVarificationsWithModal(), closePopupWithTimeInterval("close5", 2e3);
                            try {
                                centralLoginOnSuccess()
                            } catch (e) {
                                console.log("function not found ")
                            }
                        } else errorHandling();
                else n ? myModal.LinkMobileNumberWithEmail() : myModal.LinkMobileNumberWithEmail("authenticateGmail");
                else errorHandling()
            } else if (4 == this.readyState && 200 != this.status) {
                errorHandling();
                try {
                    gaFuncations({
                        eventCategoryName: "error_tracking",
                        eventActionName: "shown",
                        paramType3: "API code name",
                        paramValue3: apiName.authenticateGmail,
                        paramType4: "message",
                        paramValue4: responseData.Message && "" !== responseData.Message ? responseData.Message : "something wen worng",
                        paramType5: "api_status",
                        paramValue5: a ? .status + "_error"
                    })
                } catch (e) {}
            }
        }, a.open("POST", hostURL + apiName.authenticateGmail, !0), a.setRequestHeader("Content-Type", "application/json"), a.setRequestHeader("x-client-source", "PBHOME_MYACC"), a.setRequestHeader("x-Ismobile", !isDekstopFn()), a.withCredentials = !0, a.send(JSON.stringify(e))
    }
}

function errorHandling(e) {
    var t = getLoginFrom.call(this);
    if (myModal.close5(this), t && "insurance" === t) myModal.OpenVerifyOtpFlow(t);
    else {
        myModal.open(t);
        let e = setInterval((function() {
                clearInterval(e), e = null;
                var t = document.getElementsByClassName("login-module-inner") && document.getElementsByClassName("login-module-inner")[0] && document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-google-sign-in") ? document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-google-sign-in") : "";
                t && t[0] && (t[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Something went wrong!')
            }), 1e3),
            n = setInterval((function() {
                clearInterval(e), n = null;
                var t = document.getElementsByClassName("login-module-inner") && document.getElementsByClassName("login-module-inner")[0] && document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-google-sign-in") ? document.getElementsByClassName("login-module-inner")[0].querySelectorAll("#error-google-sign-in") : "";
                t && t[0] && (t[0].innerHTML = "")
            }), 5e3)
    }
}

function getGoogleToken() {
    var e = null;
    try {
        var t = localStorage.getItem("centralGSigntoken");
        t && "" != t && (t = JSON.parse(t)).credential && (e = t.credential)
    } catch (e) {}
    return e
}

function removeGoogleToken() {
    try {
        localStorage.removeItem("centralGSigntoken")
    } catch (e) {}
}

function setCookies(e) {
    try {
        if (e && e.data && Object.keys(e.data).length > 0 && e.data.lstCookiesDetails && e.data.lstCookiesDetails.length > 0)
            for (var t = 0; t < e.data.lstCookiesDetails.length; t++)
                if (e.data.lstCookiesDetails[t].CookieDuration && e.data.lstCookiesDetails[t].CookieKey && e.data.lstCookiesDetails[t].CookieValue && "" !== e.data.lstCookiesDetails[t].CookieDuration && "" !== e.data.lstCookiesDetails[t].CookieKey && "" !== e.data.lstCookiesDetails[t].CookieValue) {
                    let n = new Date,
                        a = e.data.lstCookiesDetails[t].CookieDuration && "" !== e.data.lstCookiesDetails[t].CookieDuration ? e.data.lstCookiesDetails[t].CookieDuration : 2;
                    n.setDate(n.getDate() + a), document.cookie = e.data.lstCookiesDetails[t].CookieKey + "=" + e.data.lstCookiesDetails[t].CookieValue + ";expires = " + n + ";domain=.policybazaar.com;path=/;Secure=" + !0 + ";"
                }
    } catch (e) {}
}

function getc(e) {
    let t = e + "=",
        n = decodeURIComponent(document.cookie).split(";");
    for (let e = 0; e < n.length; e++) {
        let a = n[e];
        for (;
            " " == a.charAt(0);) a = a.substring(1);
        if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
    }
    return ""
}

function loadGA() {
    if (window && window.dataLayer && dataLayer) window.gaLoginWidgitFn = function() {
        arguments && arguments[0] && dataLayer.push(arguments[0])
    };
    else {
        var e = document.createElement("script");
        e.src = "https://www.googletagmanager.com/gtag/js?id=" + GTMID, e.onload = function() {
            window.dataLayer = window.dataLayer || [], window.gaLoginWidgitFn = function() {
                arguments && arguments[0] && dataLayer.push(arguments[0])
            }, gaLoginWidgitFn("js", new Date), gaLoginWidgitFn("config", GTMID)
        }, document.head.appendChild(e)
    }
}

function setLoginSuccessGA(e, t, n, a) {
    try {
        var s = null,
            o = "";
        t && t.select_by && (o = t.select_by && ["user", "fedcm"].includes(t.select_by ? .toLowerCase()) ? "login_with_google_prompt" : t.select_by && "btn" === t.select_by ? "login_with_google" : ""), n && n.data && Object.keys(n.data).length > 0 && n.data.lstCookiesDetails && n.data.lstCookiesDetails.length > 0 && n.data.UniqueID && (s = n.data.UniqueID), gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_success",
            eventLabel: o && "" !== o ? o : e && "" !== e ? e : "",
            eventValue: a,
            customerId: s
        })
    } catch (e) {}
}

function changeMobileNumberGA(e = null, t = null, n = null) {
    try {
        gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: e,
            eventLabel: t,
            eventValue: n
        })
    } catch (e) {}
}

function sendGaForOTPScreenShown(e) {
    try {
        if (e && "forgotPwd" === e) gaFuncations({
            eventCategoryName: "pbhome_login_v2",
            eventActionName: "login_via_password",
            eventLabel: "forgot_password_screen_shown"
        });
        else {
            var t = localStorage.getItem("centralGSigntoken");
            gaFuncations(t && "" != t ? {
                eventCategoryName: "pbhome_login_v2",
                eventActionName: getPromptType(),
                eventLabel: "otp_page_shown"
            } : {
                eventCategoryName: "pbhome_login_v2",
                eventActionName: "login_via_OTP",
                eventLabel: "OTP_screen_shown"
            })
        }
    } catch (e) {}
}

function getPromptType(e) {
    var t = "login_via_google";
    try {
        var n = localStorage.getItem("centralGSigntoken");
        return n && n.select_by && "btn" === n.select_by && (t = "login_with_google_prompt"), t
    } catch (e) {
        return t
    }
}

function successAlert(e) {
    myModal && myModal.close5(), removeTostContainer(), removeForGaRanN();
    var t = document.body,
        n = document.createElement("div");
    n.innerHTML = '<div class="toast_card"><span>You&apos;ve logged in successfully.</span><svg id="login_widget_cross_tost_container" aria-hidden="true" viewBox="0 0 14 16">             <path fill-rule="evenodd"                 d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z">             </path>         </svg></div>', n.id = "login_widget_toast_container", n.className = "toast_container", t.appendChild(n), login_widget_toast_container_close_timer()
}

function getRandomIntForLoginWidget(e, t) {
    try {
        return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
    } catch (e) {
        return 1
    }
}

function setForGaRanN(e) {
    try {
        localStorage.setItem("centralGSignRandomNumber", e)
    } catch (e) {}
}

function removeForGaRanN(e) {}
window.onload = () => {
    onWindowLoadFunction(), loadGA();
    const e = document.body,
        t = mutationObserverFnc(GoogleOneTabOverLayFun);
    t.observe(e, {
        childList: !0
    }), window.observer = t
};
var getForGaRanFn = function() {
        var e = null;
        try {
            e = localStorage.getItem("centralGSignRandomNumber")
        } catch (e) {}
        return e
    },
    maskMobileNumberInput = function(e) {
        try {
            let t = e.toString(),
                n = 2;
            t && t.length < 9 && (n = 0);
            let a = t.length - 5;
            return t.substring(0, n) + t.substring(n, a).replace(/\d/g, "*") + t.substring(t.length - 3)
        } catch (e) {
            return 0
        }
    },
    isDekstopFn = function() {
        try {
            const e = window.innerWidth;
            return !(e <= 768)
        } catch (e) {}
    };